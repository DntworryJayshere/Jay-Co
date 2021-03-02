const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const checkObjectId = require('../../middleware/checkObjectId');

const Profile = require('../../models/Profile');
const User = require('../../models/User');
const Booking = require('../../models/Booking');

// @route    GET api/profile/me
// @desc     Get current users profile
// @access   Private
router.get('/me', auth, async (req, res) => {
	try {
		const profile = await Profile.findOne({
			user: req.user.id,
		}).populate('user', ['name', 'lastName', 'email']);

		if (!profile) {
			return res.status(400).json({ msg: 'There is no profile for this user' });
		}

		res.json(profile);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route    POST api/profile
// @desc     Create or update user profile
// @access   Private
router.post(
	'/',
	[
		auth,
		[
			check('dob', 'DOB is required').not().isEmpty(),
			check('phone', 'PhoneNumber is required').not().isEmpty(),
			check('address1', 'Address1 is required').not().isEmpty(),
			check('city', 'City is required').not().isEmpty(),
			check('statee', 'State is required').not().isEmpty(),
			check('zip', 'Zip is required').not().isEmpty(),
		],
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const { dob, phone, address1, address2, city, statee, zip } = req.body;

		const profileFields = {
			user: req.user.id,
			dob,
			phone,
			address1,
			address2,
			city,
			statee,
			zip,
		};

		try {
			// Using upsert option (creates new doc if no match is found):
			let profile = await Profile.findOneAndUpdate(
				{ user: req.user.id },
				{ $set: profileFields },
				{ new: true, upsert: true, setDefaultsOnInsert: true }
			);
			return res.json(profile);
		} catch (err) {
			console.error(err.message);
			return res.status(500).send('Server Error');
		}
	}
);

// @route    GET api/profile/admin
// @desc     Get all profiles
// @access   ADMIN *********************************************************
router.get('/admin', async (req, res) => {
	try {
		const profiles = await Profile.find().populate('user', [
			'name',
			'lastName',
			'email',
		]);
		res.json(profiles);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// Route is functional but not in use in application
// @route    GET api/profile/user/:user_id
// @desc     Get profile by user ID
// @access   ADMIN *********************************************************
// router.get(
// 	'/user/:user_id',
// 	checkObjectId('user_id'),
// 	async ({ params: { user_id } }, res) => {
// 		try {
// 			const profile = await Profile.findOne({
// 				user: user_id,
// 			}).populate('user', ['name', 'lastName', 'email']);

// 			if (!profile) return res.status(400).json({ msg: 'Profile not found' });

// 			return res.json(profile);
// 		} catch (err) {
// 			console.error(err.message);
// 			return res.status(500).json({ msg: 'Server error' });
// 		}
// 	}
// );

// @route    DELETE api/profile
// @desc     Delete profile, user, bookings
// @access   Private
router.delete('/', auth, async (req, res) => {
	try {
		// Remove user bookings
		// Remove profile
		// Remove user
		await Promise.all([
			Booking.deleteMany({ user: req.user.id }),
			Profile.findOneAndRemove({ user: req.user.id }),
			User.findOneAndRemove({ _id: req.user.id }),
		]);

		res.json({ msg: 'User deleted' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// Route is functional but not in use in application
// @route    DELETE api/profile/admin/:user_id
// @desc     Delete profile, user, bookings
// @access   ADMIN *********************************************************
// router.delete(
// 	'/admin/:user_id',
// 	checkObjectId('user_id'),
// 	async ({ params: { user_id } }, res) => {
// 		try {
// 			// Remove user bookings
// 			// Remove profile
// 			// Remove user
// 			await Promise.all([
// 				Booking.deleteMany({ user: user_id }),
// 				Profile.findOneAndRemove({ user: user_id }),
// 				User.findOneAndRemove({ _id: user_id }),
// 			]);

// 			res.json({ msg: 'User deleted' });
// 		} catch (err) {
// 			console.error(err.message);
// 			res.status(500).send('Server Error');
// 		}
// 	}
// );

module.exports = router;
