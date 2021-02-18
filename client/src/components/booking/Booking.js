import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import BookingItem from '../bookings/BookingItem';
import { getBookingById } from '../../actions/booking';

const Booking = ({ getBookingById, booking: { booking }, match }) => {
	useEffect(() => {
		getBookingById(match.params.id);
	}, []);

	return (
		<Fragment>
			{booking === null ? (
				<Spinner />
			) : (
				<Fragment>
					<BookingItem booking={booking} showActions={false} />
				</Fragment>
			)}
		</Fragment>
	);
};

Booking.propTypes = {
	getBookingById: PropTypes.func.isRequired,
	booking: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	booking: state.booking,
});

export default connect(mapStateToProps, { getBookingById })(Booking);
