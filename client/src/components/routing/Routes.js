import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../routing/PrivateRoute';
import Alert from '../layout/Alert';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Dashboard from '../pages/Dashboard';
import ProfileForm from '../profile-form/ProfileForm';
import Profile from '../profile/Profile';
import Profiles from '../profiles/Profiles';
import Appointment from '../pages/Appointment';
import BookingForm from '../booking-form/BookingForm';
import Booking from '../booking/Booking';
import Bookings from '../bookings/Bookings';
import Err404 from '../pages/errors/404/404';
import Err500 from '../pages/errors/500/500';
import Err401 from '../pages/errors/401/401';

const Routes = (props) => {
	return (
		<>
			<Alert />
			<Switch>
				<Route exact path="/register" component={Register} />
				<Route exact path="/login" component={Login} />

				<PrivateRoute exact path="/dashboard" component={Dashboard} />

				<PrivateRoute exact path="/create-profile" component={ProfileForm} />
				<PrivateRoute exact path="/edit-profile" component={ProfileForm} />
				<PrivateRoute exact path="/profile/:id" component={Profile} />
				<PrivateRoute exact path="/profiles" component={Profiles} />

				<PrivateRoute exact path="/appointment" component={Appointment} />
				<PrivateRoute exact path="/edit-booking" component={BookingForm} />
				<PrivateRoute exact path="/bookings" component={Bookings} />
				<PrivateRoute exact path="/bookings/:id" component={Booking} />

				<Route exact path="/err500" component={Err500} />
				<Route exact path="/err401" component={Err401} />
				<Route exact path="/err404" component={Err404} />
			</Switch>
		</>
	);
};

export default Routes;
