import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
		user,
		name,
		lastName,
		email,
	},
}) => (
	<Fragment>
		<div>
			<div className="contextBodyProfile">
				<Link to={`/profile/${user}`}>
					name: {name} {lastName}
				</Link>
			</div>
			<div className="contextBodyProfile">email:{email}</div>
			<div className="contextBodyProfile">
				Appointment Date:{' '}
				<span>
					<Moment format="MMM-D-YYYY">{moment.utc(appointmentDate)}</Moment>
				</span>
				<Link to={`/edit-booking/${_id}`} className="editOption">
					<p>Change Date</p>
				</Link>
			</div>
			<div className="contextBodyProfile">
				Appointment Time: <span>{appointmentTime}</span>
				<Link to={`/edit-booking/${_id}`} className="editOption">
					<p>Change Time</p>
				</Link>
			</div>
			<div className="contextBodyProfile">
				Appointment Duration: <span>{appointmentDuration}</span>
				<Link to={`/edit-booking/${_id}`} className="editOption">
					<p>Change Duration</p>
				</Link>
			</div>
			<div className="contextBodyProfile">
				Appointment Comments: <span>{text}</span>
				<Link to={`/edit-booking/${_id}`} className="editOption">
					<p>Change Comments</p>
				</Link>
			</div>
			<Link to={`/booking/${_id}`} className="btn btn-primary">
				View booking
			</Link>
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
