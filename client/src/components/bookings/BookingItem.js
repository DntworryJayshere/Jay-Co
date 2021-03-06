import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteBooking } from '../../actions/booking';
import Button from 'react-bootstrap/Button';
import Moment from 'react-moment';
import moment from 'moment';
import 'moment-timezone';

const BookingItem = ({
	deleteBooking,
	booking: { _id, text, appointmentDate, appointmentTime, appointmentDuration },
}) => (
	<Fragment>
		<div className="contextBodyProfile">
			Appointment Date:{' '}
			<span>
				<Moment>{moment.utc(appointmentDate)}</Moment>
			</span>
		</div>
		<div className="contextBodyProfile">
			Appointment Time: <span>{appointmentTime}</span>
		</div>
		<div className="contextBodyProfile">
			Appointment Duration: <span>{appointmentDuration}</span>
		</div>
		<div className="contextBodyProfile">
			Appointment Comments: <span>{text}</span>
		</div>
		<Button
			className="contextBodyProfile"
			variant="danger"
			onClick={() => deleteBooking(_id)}
		>
			<i className="fas fa-trash" /> Delete Booking{' '}
		</Button>
	</Fragment>
);

BookingItem.propTypes = {
	booking: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
	deleteBooking: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { deleteBooking })(BookingItem);
