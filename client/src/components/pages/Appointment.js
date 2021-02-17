import React, { Fragment, Component } from 'react';
import BookingForm from './../booking-form/BookingForm';

class Appointment extends Component {
	render() {
		return (
			<div className="container">
				<h2>Schedule Appointment</h2>

				<Fragment>
					<BookingForm />
				</Fragment>
			</div>
		);
	}
}

export default Appointment;
