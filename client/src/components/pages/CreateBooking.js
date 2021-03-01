import React, { Component } from 'react';
import BookingForm from './../booking-form/BookingForm';

class CreateBooking extends Component {
	render() {
		return (
			<>
				<div className="text-center align-self-center topping">
					<h2>Create Booking</h2>
				</div>

				<BookingForm />
			</>
		);
	}
}

export default CreateBooking;
