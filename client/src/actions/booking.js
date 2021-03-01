import api from '../utils/api';
import { setAlert } from './alert';
import {
	GET_BOOKING,
	GET_BOOKINGS,
	BOOKING_ERROR,
	DELETE_BOOKING,
	ADD_BOOKING,
} from './types';

// Get booking by ID
export const getBookingById = (id) => async (dispatch) => {
	try {
		const res = await api.get(`/bookings/${id}`);

		dispatch({
			type: GET_BOOKING,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: BOOKING_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};

// Get all bookings for current user
export const getBookings = (userid) => async (dispatch) => {
	try {
		const res = await api.get(`/bookings/user/${userid}`);

		dispatch({
			type: GET_BOOKINGS,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: BOOKING_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};

// Get all bookings
export const getBookingsAdmin = () => async (dispatch) => {
	try {
		const res = await api.get('/bookings/admin');

		dispatch({
			type: GET_BOOKINGS,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: BOOKING_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};

// Delete booking
export const deleteBooking = (id) => async (dispatch) => {
	try {
		await api.delete(`/bookings/${id}`);

		dispatch({
			type: DELETE_BOOKING,
			payload: id,
		});

		dispatch(setAlert('Booking Removed', 'success'));
	} catch (err) {
		dispatch({
			type: BOOKING_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};

// Add booking
export const addBooking = (formData, history, edit = false) => async (
	dispatch
) => {
	try {
		const res = await api.post('/bookings', formData);

		dispatch({
			type: ADD_BOOKING,
			payload: res.data,
		});

		dispatch(setAlert(edit ? 'Booking Updated' : 'Booking Created', 'success'));

		if (!edit) {
			history.push('/landing');
		}
	} catch (err) {
		const errors = err.response.data.errors;

		if (errors) {
			errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
		}

		dispatch({
			type: BOOKING_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};
