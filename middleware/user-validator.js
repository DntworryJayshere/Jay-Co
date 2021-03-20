const { check } = require('express-validator');

exports.registerUserValidator = [
	check('name', 'Name is Required').not().isEmpty(),
	check('lastName', 'Last Name is Required').not().isEmpty(),
	check('email', 'Please include a valid email').isEmail(),
	check(
		'password',
		'Please include a password with 6 or more characters'
	).isLength({ min: 6 }),
];
