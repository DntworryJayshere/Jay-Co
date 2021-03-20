const { check } = require('express-validator');

exports.subscriberValidator = [
	check('email', 'Please include a valid email').isEmail(),
];
