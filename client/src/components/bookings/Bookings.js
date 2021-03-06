import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import BookingItem from './BookingItem';
import { getBookings } from '../../actions/booking';

const Bookings = ({
	getBookings,
	booking: { bookings, loadingB },
	auth: { user },
}) => {
	useEffect(() => {
		getBookings(user._id);
	}, [getBookings, user._id]);

	return (
		<Fragment>
			{loadingB ? (
				<Spinner />
			) : (
				<Fragment>
					{bookings.map((booking) => (
						<BookingItem key={booking.id} booking={booking} />
					))}
				</Fragment>
			)}
		</Fragment>
	);
};

Bookings.propTypes = {
	booking: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
	getBookings: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	booking: state.booking,
	auth: state.auth,
});

export default connect(mapStateToProps, { getBookings })(Bookings);
