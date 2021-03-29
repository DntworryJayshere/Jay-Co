const express = require('express');
const router = express.Router();

// import models
const Subscriber = require('../../models/Subscriber');

// import middleware
const {
	subscriberValidator,
} = require('../../middleware/subscriber-validator');
const { runValidation } = require('../../middleware/index-validator');

//@route    POST api/subscribers
//@desc     Register new subscriber
//@access   Public
router.post('/', subscriberValidator, runValidation, async (req, res) => {
	const { email } = req.body;
	try {
		let subscriber = await Subscriber.findOne({ email });

		if (subscriber) {
			return res
				.status(400)
				.json({ errors: [{ msg: 'Subscriber already exists' }] });
		}

		subscriber = new Subscriber({
			email,
		});

		await subscriber.save();
		return res.json(subscriber);
	} catch (err) {
		console.error(err.message);
		return res.status(500).send('Server error');
	}
});

module.exports = router;
