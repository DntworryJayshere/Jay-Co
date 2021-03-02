import React, { Component } from 'react';
import ProfilesAdmin from './../profiles/ProfilesAdmin';
import BookingsAdmin from './../bookings/BookingsAdmin';

class Admin extends Component {
	render() {
		return (
			<div className="outerContainer">
				<div className="container pt-1">
					<div className="col-md-12 mt-6 bg-white">
						<div className="container-fluid p-2">
							<div className="p-3">
								<div className="text-center">
									<h1 className="h4 mt-4 mb-4 signinHeader">Admin View</h1>
								</div>

								<div className="contextBodyTitle text-left border-top border-dark">
									Account & Profile Information
									<br />
									<ProfilesAdmin />
								</div>
								<div className="contextBodyTitle text-left border-top border-dark">
									Booking Information
									<br />
									<BookingsAdmin />
								</div>

								<br />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Admin;
