import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteAccount } from '../../actions/profile';
import Profile from '../profile/Profile';
import { getBookings } from '../../actions/booking';
import Bookings from '../bookings/Bookings';
import Button from 'react-bootstrap/Button';

const Dashboard = ({
	deleteAccount,
	auth: { user },
	profile: { profile, loading },
	getBookings,
	booking: { bookings },
}) => {
	useEffect(() => {
		getBookings();
	}, []);

	return (
		<Fragment>
			<div className="container">
				<div>
					<h2>Account information</h2>
					<p>
						First Name: <span>{user && user.name}</span>
					</p>
					<p>
						Last Name: <span>{user && user.lastName}</span>
					</p>
					<p>
						Email: <span>{user && user.email}</span>
					</p>
					<Button variant="danger dash-button" onClick={() => deleteAccount()}>
						Delete My Account{' '}
					</Button>
				</div>

				{loading || profile !== null ? (
					<Fragment>
						<div>
							<h2>Profile information</h2>
							<Profile />
							<Link to="/edit-profile">
								<Button variant="success">Edit Profile</Button>
							</Link>
						</div>
					</Fragment>
				) : (
					<Fragment>
						<div>
							<h2>Profile information</h2>
							<p>You have not yet setup a profile, please add some info</p>
							<Link to="/create-profile">
								<Button variant="success">Create Profile</Button>
							</Link>
						</div>
					</Fragment>
				)}
			</div>

			{bookings !== null ? (
				<Fragment>
					<div className="Booking-information">
						<h2 className="dbHeaderRight">Booking information</h2>
						<Bookings />
					</div>
				</Fragment>
			) : (
				<Fragment>
					<div className="Booking-information">
						<p>You have not have any Appointments, please set one</p>
						<Link to="/appointment">
							<Button variant="success">Create Appointment</Button>
						</Link>
					</div>
				</Fragment>
			)}
		</Fragment>
	);
};

Dashboard.propTypes = {
	deleteAccount: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired,
	getBookings: PropTypes.func.isRequired,
	booking: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile,
	booking: state.booking,
});

export default connect(mapStateToProps, {
	deleteAccount,
	getBookings,
})(Dashboard);
