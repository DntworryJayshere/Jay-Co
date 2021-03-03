import api from '../utils/api';
import { setAlert } from './alert';

import {
	GET_PROFILE,
	GET_PROFILES,
	PROFILE_ERROR,
	CLEAR_PROFILE,
	ACCOUNT_DELETED,
} from './types';

// Get current users profile
export const getCurrentProfile = () => async (dispatch) => {
	try {
		const res = await api.get('/profile/me');

		dispatch({
			type: GET_PROFILE,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};

// *Route is functional but not currently in use by the application
// Get profile by ID
// export const getProfileById = (userId) => async (dispatch) => {
// 	try {
// 		const res = await api.get(`/profile/user/${userId}`);

// 		dispatch({
// 			type: GET_PROFILE,
// 			payload: res.data,
// 		});
// 	} catch (err) {
// 		dispatch({
// 			type: PROFILE_ERROR,
// 			payload: { msg: err.response.statusText, status: err.response.status },
// 		});
// 	}
// };

// Get all profiles
export const getProfiles = () => async (dispatch) => {
	dispatch({ type: CLEAR_PROFILE });

	try {
		const res = await api.get('/profile/admin');

		dispatch({
			type: GET_PROFILES,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};

// Create or update profile
export const createProfile = (formData) => async (dispatch) => {
	try {
		const res = await api.post('/profile', formData);

		dispatch({
			type: GET_PROFILE,
			payload: res.data,
		});

		dispatch(setAlert('Profile Updated', 'success'));
	} catch (err) {
		const errors = err.response.data.errors;

		if (errors) {
			errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
		}

		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};

// Delete account & profile
export const deleteAccount = () => async (dispatch) => {
	if (window.confirm('Are you sure? This can NOT be undone!')) {
		try {
			await api.delete('/profile');

			dispatch({ type: CLEAR_PROFILE });
			dispatch({ type: ACCOUNT_DELETED });

			dispatch(
				setAlert('Your account has been permanently deleted', 'success')
			);
		} catch (err) {
			dispatch({
				type: PROFILE_ERROR,
				payload: { msg: err.response.statusText, status: err.response.status },
			});
		}
	}
};

// *Route is functional but currently not in use by the application
// Delete account & profile as administrator
// export const deleteAccountAdmin = (_id) => async (dispatch) => {
// 	if (window.confirm('Are you sure? This can NOT be undone!')) {
// 		try {
// 			await api.delete(`/profile/admin/${_id}`);

// 			dispatch({ type: CLEAR_PROFILE });
// 			dispatch({ type: ACCOUNT_DELETED });

// 			dispatch(
// 				setAlert(
// 					'This account, profile, and bookings have been permanently deleted'
// 				)
// 			);
// 		} catch (err) {
// 			dispatch({
// 				type: PROFILE_ERROR,
// 				payload: { msg: err.response.statusText, status: err.response.status },
// 			});
// 		}
// 	}
// };
