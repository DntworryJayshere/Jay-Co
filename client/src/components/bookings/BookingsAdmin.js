import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import BookingItemAdmin from './BookingItemAdmin';
import { getBookingsAdmin } from '../../actions/booking';
import CardColumns from 'react-bootstrap/CardColumns';

const Bookings = ({ getBookingsAdmin, booking: { bookings, loadingB } }) => {
	useEffect(() => {
		getBookingsAdmin();
	}, [getBookingsAdmin]);

	return (
		<Fragment>
			{loadingB ? (
				<Spinner />
			) : (
				<Fragment>
					<CardColumns>
						{bookings.map((booking) => (
							<BookingItemAdmin key={booking._id} booking={booking} />
						))}
					</CardColumns>
					<br />
				</Fragment>
			)}
		</Fragment>
	);
};

Bookings.propTypes = {
	getBookingsAdmin: PropTypes.func.isRequired,
	booking: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	booking: state.booking,
});

export default connect(mapStateToProps, { getBookingsAdmin })(Bookings);
