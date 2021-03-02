import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteBookingAdmin } from '../../actions/booking';
import Button from 'react-bootstrap/Button';
import Moment from 'react-moment';
import moment from 'moment';
import 'moment-timezone';

const BookingItem = ({
	deleteBookingAdmin,
	booking: {
		_id,
		text,
		appointmentDate,
		appointmentTime,
		appointmentDuration,
		name,
		lastName,
		email,
	},
}) => (
	<Fragment>
		<div>
			<div className="contextBodyProfile">
				Full Name: {name} {lastName}
			</div>
			<div className="contextBodyProfile">email: {email}</div>
			<div className="contextBodyProfile">
				Appointment Date:{' '}
				<span>
					<Moment format="MMM-D-YYYY">{moment.utc(appointmentDate)}</Moment>
				</span>
			</div>
			<div className="contextBodyProfile">
				Appointment Time: <span> {appointmentTime}</span>
			</div>
			<div className="contextBodyProfile">
				Appointment Duration: <span> {appointmentDuration}</span>
			</div>
			<div className="contextBodyProfile">
				Appointment Comments: <span> {text}</span>
			</div>
			<Button
				className="contextBodyProfile"
				variant="danger"
				onClick={() => deleteBookingAdmin(_id)}
			>
				<i className="fas fa-trash" /> Delete Booking{' '}
			</Button>
		</div>
	</Fragment>
);

BookingItem.propTypes = {
	booking: PropTypes.object.isRequired,
	deleteBookingAdmin: PropTypes.func.isRequired,
};

export default connect(null, { deleteBookingAdmin })(BookingItem);
