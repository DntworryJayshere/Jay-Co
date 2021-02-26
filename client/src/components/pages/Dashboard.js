import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteAccount } from '../../actions/profile';
import ProfileCurrent from '../profile/ProfileCurrent';
import Bookings from '../bookings/Bookings';
import Button from 'react-bootstrap/Button';
import Moment from 'react-moment';
import moment from 'moment';
import 'moment-timezone';

const Dashboard = ({
	deleteAccount,
	auth: { user },
	profile: { profile, loading },
	booking: { booking },
}) => {
	return (
		<div className="outerContainer">
			<div className="container pt-1">
				<div className="col-md-12 mt-6 bg-white">
					<div className="container-fluid p-2">
						<div className="p-3">
							<div className="text-center">
								<h1 className="h4 mt-4 mb-4 signinHeader">Account</h1>
							</div>
							<div className="contextBodyTitle text-left border-top border-dark mb6">
								Account Information &amp; Billing
								<br />
								<div className="contextBodyProfile">
									Email: <span>{user && user.email}</span>
									<Link to="/edit-account" className="editOption">
										<p>Change Email</p>
									</Link>
								</div>
								<div className="contextBodyProfile">
									Password: *****
									<Link to="/edit-account" className="editOption">
										<p>Change Password</p>
									</Link>
								</div>
								<div className="contextBodyProfile">
									First Name: <span>{user && user.name}</span>
									<Link to="/edit-account" className="editOption">
										<p>Change First Name</p>
									</Link>
								</div>
								<div className="contextBodyProfile">
									Last Name: <span>{user && user.lastName}</span>
									<Link to="/edit-account" className="editOption">
										<p>Change Last Name</p>
									</Link>
								</div>
								<div className="contextBodyProfile">
									Created Date:{' '}
									<span>
										{user && (
											<Moment format="MMM-D-YYYY">
												{moment.utc(user.date)}
											</Moment>
										)}
									</span>
								</div>
								<Button
									className="contextBodyProfile"
									variant="danger"
									onClick={() => deleteAccount()}
								>
									<i className="fas fa-trash" /> Delete Account & Profile{' '}
								</Button>
							</div>
							<br />

							{loading || profile !== null ? (
								<Fragment>
									<div className="contextBodyTitle text-left border-top border-dark">
										Profile Information
										<br />
										<ProfileCurrent />
									</div>
									<br />
								</Fragment>
							) : (
								<Fragment>
									<div className="contextBodyTitle text-left border-top border-dark">
										Profile Information
										<br />
										<div className="contextBodyProfile">
											You have not yet setup a profile, please add some info
											<Link to="/create-profile">
												<Button variant="success">Create Profile</Button>
											</Link>
										</div>
									</div>
									<br />
								</Fragment>
							)}
						</div>
						{/* {loading || Bookings !== null ? (
							<Fragment>
								<div className="contextBodyTitle text-left border-top border-dark">
									Appointment Information
									<br />
									<Bookings booking={booking} />
								</div>
								<br />
							</Fragment>
						) : (
							<Fragment>
								<div className="contextBodyTitle text-left border-top border-dark">
									Appointment Information
									<br />
									<div className="contextBodyProfile">
										You have not have any Appointments, please set one
										<Link to="/appointment">
											<Button variant="success">Create Appointment</Button>
										</Link>
									</div>
								</div>
								<br />
							</Fragment>
						)} */}
					</div>
				</div>
			</div>
		</div>
	);
};

Dashboard.propTypes = {
	deleteAccount: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired,
	booking: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile,
	booking: state.booking,
});

export default connect(mapStateToProps, {
	deleteAccount,
})(Dashboard);
