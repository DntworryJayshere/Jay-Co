import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Moment from 'react-moment';
import moment from 'moment';
import 'moment-timezone';

const BookingItem = ({
	booking: {
		user: { _id },
		text,
		appointmentDate,
		appointmentTime,
		appointmentDuration,
	},
}) => {
	return (
		<div>
			<p>
				Appointment Date:{' '}
				<span>
					<Moment format="MMM-D-YYYY">{moment.utc(appointmentDate)}</Moment>
				</span>
			</p>
			<p>
				Appointment Time: <span>{appointmentTime}</span>
			</p>
			<p>
				Appointment Duration: <span>{appointmentDuration}</span>
			</p>
			<p>
				Comment: <span>{text}</span>
			</p>
			<Link to="/edit-booking">
				<Button variant="success">Edit Booking</Button>
			</Link>
			<Link to={`/booking/${_id}`} className="btn btn-primary">
				View Profile
			</Link>
		</div>
	);
};

BookingItem.propTypes = {
	booking: PropTypes.object.isRequired,
};

export default BookingItem;
