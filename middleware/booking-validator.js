const { check } = require('express-validator');

exports.createBookingValidator = [
	check('appointmentDate', 'Appointment Date is Required').not().isEmpty(),
	check('appointmentTime', 'Appointment Time is Required').not().isEmpty(),
	check('appointmentDuration', 'Appointment Duration is Required')
		.not()
		.isEmpty(),
	check('text', 'Text is required').not().isEmpty(),
];
