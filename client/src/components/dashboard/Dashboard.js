import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import { getBookings } from '../../actions/booking';
import Bookings from '../bookings/Bookings';
import Button from 'react-bootstrap/Button';
import Moment from 'react-moment';
import moment from 'moment';

const Dashboard = ({
	getCurrentProfile,
	deleteAccount,
	auth: { user },
	profile: { profile },
	getBookings,
	booking: { bookings },
}) => {
	useEffect(
		() => {
			getCurrentProfile();
			getBookings();
		},
		[getCurrentProfile],
		[getBookings]
	);

	return (
		<Fragment>
			<div className="container">
				<div className="Account-information">
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

				{profile !== null ? (
					<Fragment>
						<div className="Profile-information">
							<h2>Profile information</h2>

							<p>
								Phone Number: <span>{profile && profile.phone}</span>
							</p>
							<p>
								Date Of Birth:{' '}
								<span>
									{profile && (
										<Moment format="MMM-D-YYYY">
											{moment.utc(profile.dob)}
										</Moment>
									)}
								</span>
							</p>
							<p>
								Address:{' '}
								<span>
									{profile && profile.address1} {profile && profile.address2}
								</span>
							</p>
							<p>
								City: <span>{profile && profile.city}</span>
							</p>
							<p>
								State: <span>{profile && profile.statee}</span>
							</p>
							<p>
								Zip Code: <span>{profile && profile.zip}</span>
							</p>

							<Link to="/edit-profile">
								<Button variant="success">Edit Profile</Button>
							</Link>
						</div>
					</Fragment>
				) : (
					<Fragment>
						<div className="Profile-information">
							<h2 className="dbHeader">Profile information</h2>
							<p>You have not yet setup a profile, please add some info</p>
							<Link to="/create-profile">
								<Button variant="success dash-button">Create Profile</Button>
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
	getCurrentProfile: PropTypes.func.isRequired,
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
	getCurrentProfile,
	deleteAccount,
	getBookings,
})(Dashboard);
