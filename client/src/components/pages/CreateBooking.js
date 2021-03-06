import React, { Fragment, Component } from 'react';
import BookingForm from './../booking-form/BookingForm';

class CreateBooking extends Component {
	render() {
		return (
			<Fragment>
				<div className="text-center align-self-center topping">
					<h2>Create Booking</h2>
					<span>
						WARNING: Refrain from entering sensitive information as the
						administrative routes of this application are public. This
						application should be viewed as a sample.
					</span>
				</div>

				<BookingForm />
			</Fragment>
		);
	}
}

export default CreateBooking;
