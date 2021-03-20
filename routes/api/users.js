const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const AWS = require('aws-sdk');
require('dotenv').config();

// import models
const User = require('../../models/User');

// import middleware
const { registerUserValidator } = require('../../middleware/user-validator');
const { runValidation } = require('../../middleware/index-validator');

// import helpers
const { registerEmailParams } = require('../../helpers/email');

//AWS Config SES
AWS.config.update({
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	region: process.env.AWS_REGION,
});
const ses = new AWS.SES({ apiVersion: '2010-12-01' });

//@route    POST api/users
//@desc     Begin to register user through SES
//@access   Public
router.post('/', registerUserValidator, runValidation, async (req, res) => {
	const { name, lastName, email, password } = req.body;
	try {
		let user = await User.findOne({ email }).exec((err) => {
			if (user) {
				console.log(err);
				return res
					.status(400)
					.json({ errors: [{ msg: 'User already exists' }] });
			}

			// generate token with user name email and password
			const token = jwt.sign(
				{ name, lastName, email, password },
				process.env.JWT_ACCOUNT_ACTIVATION,
				{
					expiresIn: '10d',
				}
			);

			// send email
			const params = registerEmailParams(email, token);

			const sendEmailOnRegister = ses.sendEmail(params).promise();

			sendEmailOnRegister
				.then((data) => {
					console.log('email submitted to SES', data);
					return res.json({
						message: `Email has been sent to ${email}, Follow the instructions to complete your registration`,
					});
				})
				.catch((error) => {
					console.log('ses email on register', error);
					res.json({
						message: `We could not verify your email. Please try again`,
					});
				});
		});
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

//@route    POST  api/users/activate
//@desc     Activate a registered user from email link
//@access   Public
router.post('/activate', runValidation, async (req, res) => {
	const { token } = req.body;
	const { name, lastName, email, password } = jwt.decode(token);

	try {
		jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION);

		let user = await User.findOne({ email });

		if (user) {
			return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
		}

		user = new User({
			name,
			lastName,
			email,
			password,
		});

		const salt = await bcrypt.genSalt(10);

		user.password = await bcrypt.hash(password, salt);

		await user.save();

		const payload = {
			user: {
				id: user.id,
			},
		};

		jwt.sign(
			payload,
			process.env.JWT_SECRET,
			{ expiresIn: '5 days' },
			(err, token) => {
				if (err) throw err;
				res.json({ token });
			}
		);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

module.exports = router;
