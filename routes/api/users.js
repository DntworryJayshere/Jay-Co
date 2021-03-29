const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// import models
const User = require('../../models/User');

// import middleware
const { registerUserValidator } = require('../../middleware/user-validator');
const { runValidation } = require('../../middleware/index-validator');

//@route    POST api/users
//@desc     Register user
//@access   Public
router.post('/', registerUserValidator, runValidation, async (req, res) => {
	const { name, lastName, email, password } = req.body;
	try {
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
