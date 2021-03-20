const { check } = require('express-validator');

exports.loginUserValidator = [
	check('email', 'Please include a valid email').isEmail(),
	check('password', 'Password is required').exists(),
];
