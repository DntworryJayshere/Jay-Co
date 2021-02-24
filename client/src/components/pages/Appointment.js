import React, { Fragment, Component } from 'react';
import BookingForm from './../booking-form/BookingForm';

class Appointment extends Component {
	render() {
		return (
			<>
				<div class="text-center align-self-center topping">
					<h2>Schedule Appointment</h2>
				</div>

				<Fragment>
					<BookingForm />
				</Fragment>
			</>
		);
	}
}

export default Appointment;
