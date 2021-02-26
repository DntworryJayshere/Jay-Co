import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../routing/PrivateRoute';
import Alert from '../layout/Alert';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Dashboard from '../pages/Dashboard';
import ProfileForm from '../profile-form/ProfileForm';
import Appointment from '../pages/Appointment';
import BookingForm from '../booking-form/BookingForm';
import SamplePage from '../pages/SamplePage';
import AdminPage from '../pages/AdminPage';
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
				<Route exact path="/samplePage" component={SamplePage} />
				<Route exact path="/adminPage" component={AdminPage} />

				<PrivateRoute exact path="/dashboard" component={Dashboard} />

				<PrivateRoute exact path="/create-profile" component={ProfileForm} />
				<PrivateRoute exact path="/edit-profile" component={ProfileForm} />
				<PrivateRoute exact path="/appointment" component={Appointment} />
				<PrivateRoute exact path="/edit-booking" component={BookingForm} />

				<Route exact path="/err500" component={Err500} />
				<Route exact path="/err401" component={Err401} />
				<Route exact path="/err404" component={Err404} />
			</Switch>
		</>
	);
};

export default Routes;

{
	/* <PrivateRoute exact path="/profile/:id" component={Profile} /> */
}
