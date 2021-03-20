const express = require('express');
const router = express.Router();
const AWS = require('aws-sdk');
require('dotenv').config();

// import models
const Booking = require('../../models/Booking');
const User = require('../../models/User');

// import middleware
const auth = require('../../middleware/auth');
const checkObjectId = require('../../middleware/checkObjectId');
const {
	createBookingValidator,
} = require('../../middleware/booking-validator');
const { runValidation } = require('../../middleware/index-validator');

//import helpers
const { bookingPublishedParams } = require('../../helpers/email');

// config AWS SES
AWS.config.update({
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	region: process.env.AWS_REGION,
});
const ses = new AWS.SES({ apiVersion: '2010-12-01' });

// @route    POST api/bookings
// @desc     Create a booking
// @access   Private
router.post(
	'/',
	auth,
	createBookingValidator,
	runValidation,
	async (req, res) => {
		const {
			appointmentDate,
			appointmentTime,
			appointmentDuration,
			text,
		} = req.body;
		try {
			const user = await User.findById(req.user.id).select('-password');

			let newBooking = new Booking({
				appointmentDate,
				appointmentTime,
				appointmentDuration,
				text,
				name: user.name,
				lastName: user.lastName,
				email: user.email,
				user: req.user.id,
			});

			const booking = await newBooking.save();

			const params = bookingPublishedParams(user.email, booking);
			const sendEmail = ses.sendEmail(params).promise();

			sendEmail
				.then((success) => {
					console.log('email submitted to SES ', success);
					return;
				})
				.catch((failure) => {
					console.log('error on email submitted to SES  ', failure);
					return;
				});
			return res.json(booking);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

// @route    GET api/bookings/admin
// @desc     Get all bookings for all users
// @access   Admin*********************************************************
router.get('/admin', async (req, res) => {
	try {
		const bookings = await Booking.find().sort({ date: 1 });
		res.json(bookings);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route    GET api/bookings/user/:user_id
// @desc     Get all bookings for current user
// @access   Private
router.get(
	'/user/:_id',
	[auth, checkObjectId('_id')],
	async ({ params: { _id } }, res) => {
		try {
			const bookings = await Booking.find({
				user: _id,
			}).sort({ date: 1 });

			if (!bookings) return res.status(400).json({ msg: 'No bookings found' });

			return res.json(bookings);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

// @route    GET api/bookings/:id
// @desc     Get booking by ID
// @access   Private
router.get('/:id', [auth, checkObjectId('id')], async (req, res) => {
	try {
		const booking = await Booking.findById(req.params.id);

		if (!booking) {
			return res.status(404).json({ msg: 'Booking not found' });
		}

		res.json(booking);
	} catch (err) {
		console.error(err.message);

		res.status(500).send('Server Error');
	}
});

// @route    DELETE api/bookings/:id
// @desc     Delete a booking
// @access   Private
router.delete('/:id', [auth, checkObjectId('id')], async (req, res) => {
	try {
		const booking = await Booking.findById(req.params.id);

		if (!booking) {
			return res.status(404).json({ msg: 'Booking not found' });
		}

		// Check user
		if (booking.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: 'User not authorized' });
		}

		await booking.remove();

		res.json({ msg: 'Booking removed' });
	} catch (err) {
		console.error(err.message);

		res.status(500).send('Server Error');
	}
});

// @route    DELETE api/bookings/admin/:id
// @desc     Delete a booking
// @access   Admin*********************************************************
router.delete('/admin/:id', checkObjectId('id'), async (req, res) => {
	try {
		const booking = await Booking.findById(req.params.id);

		if (!booking) {
			return res.status(404).json({ msg: 'Booking not found' });
		}

		await booking.remove();

		return res.json({ msg: 'Booking removed' });
	} catch (err) {
		console.error(err.message);

		res.status(500).send('Server Error');
	}
});

module.exports = router;
