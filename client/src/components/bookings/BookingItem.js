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
	<>
		{showActions && (
			<Fragment>
				{!auth.loading && user === auth.user._id && (
					<div>
						<div className="contextBodyProfile">
							Appointment Date:{' '}
							<span>
								<Moment format="MMM-D-YYYY">
									{moment.utc(appointmentDate)}
								</Moment>
							</span>
							<Link to={`/bookings/${_id}`} className="editOption">
								<p>Change Date</p>
							</Link>
						</div>
						<div className="contextBodyProfile">
							Appointment Time: <span>{appointmentTime}</span>
							<Link to={`/bookings/${_id}`} className="editOption">
								<p>Change Time</p>
							</Link>
						</div>
						<div className="contextBodyProfile">
							Appointment Duration: <span>{appointmentDuration}</span>
							<Link to={`/bookings/${_id}`} className="editOption">
								<p>Change Duration</p>
							</Link>
						</div>
						<div className="contextBodyProfile">
							Appointment Comments: <span>{text}</span>
							<Link to={`/bookings/${_id}`} className="editOption">
								<p>Change Comments</p>
							</Link>
						</div>
						<Button
							className="contextBodyProfile"
							variant="danger"
							onClick={() => deleteBooking(_id)}
						>
							<i className="fas fa-trash" /> Delete Booking{' '}
						</Button>
					</div>
				)}
			</Fragment>
		)}
	</>
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
