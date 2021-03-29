const { check } = require('express-validator');

exports.createORupdateProfileValidator = [
	check('phone', 'PhoneNumber is required').not().isEmpty(),
	check('address1', 'Address1 is required').not().isEmpty(),
	check('city', 'City is required').not().isEmpty(),
	check('statee', 'State is required').not().isEmpty(),
	check('zip', 'Zip is required').not().isEmpty(),
];
