import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
		_id,
		text,
		appointmentDate,
		appointmentTime,
		user,
		appointmentDuration,
	},
	showActions,
}) => (
	<div>
		{showActions && (
			<Fragment>
				{!auth.loading && user === auth.user._id && (
					<div>
						<p>
							Appointment Date:{' '}
							<span>
								<Moment format="MMM-D-YYYY">
									{moment.utc(appointmentDate)}
								</Moment>
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
						<Link to={`/bookings/${_id}`}>
							<Button variant="success">Edit Booking</Button>
						</Link>
						<Button onClick={() => deleteBooking(_id)} variant="danger">
							Delete Booking
						</Button>
					</div>
				)}
			</Fragment>
		)}
	</div>
);

BookingItem.defaultProps = {
	showActions: true,
};

BookingItem.propTypes = {
	booking: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
	deleteBooking: PropTypes.func.isRequired,
	showActions: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { deleteBooking })(BookingItem);
