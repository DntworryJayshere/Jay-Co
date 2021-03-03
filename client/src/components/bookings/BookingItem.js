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
	auth,
	booking: {
		id,
		user,
		text,
		appointmentDate,
		appointmentTime,
		appointmentDuration,
	},
}) => (
	<Fragment>
		{!auth.loading && user === auth.user._id && (
			<div>
				<div className="contextBodyProfile">
					Appointment Date:{' '}
					<span>
						<Moment format="MMM-D-YYYY">{moment.utc(appointmentDate)}</Moment>
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
					onClick={() => deleteBooking(id)}
				>
					<i className="fas fa-trash" /> Delete Booking{' '}
				</Button>
			</div>
		)}
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
