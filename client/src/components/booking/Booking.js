import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import BookingItem from '../bookings/BookingItem';
import { getBookingById } from '../../actions/booking';

const Booking = ({ getBookingById, booking: { booking, loading }, match }) => {
	useEffect(() => {
		getBookingById(match.params.id);
	}, [getBookingById, match.params.id]);

	return loading || booking === null ? (
		<Spinner />
	) : (
		<Fragment>
			<BookingItem booking={booking} />
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
