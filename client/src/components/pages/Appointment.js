import React, { Fragment, Component } from 'react';
import Fade from 'react-reveal/Fade';
import BookingForm from './../bookings/BookingForm';

class Appointment extends Component {
	render() {
		return (
			<Fade>
				<div className="bodyContainer">
					<div className="justify-content-center"></div>
					<h2>Schedule Appointment</h2>

					<div className="Appointment-body">
						<Fragment>
							<BookingForm />
						</Fragment>
					</div>
				</div>
			</Fade>
		);
	}
}

export default Appointment;
