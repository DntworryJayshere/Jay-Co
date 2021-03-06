import {
	// GET_BOOKING,
	GET_BOOKINGS,
	GET_BOOKINGSADMIN,
	BOOKING_ERROR,
	DELETE_BOOKING,
	ADD_BOOKING,
} from '../actions/types';

const initialState = {
	booking: null,
	bookings: [],
	loadingB: true,
	error: {},
};

function bookingReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		// case GET_BOOKING:
		// 	return {
		// 		...state,
		// 		booking: payload,
		// 		loading: false,
		// 	};
		case GET_BOOKINGS:
			return {
				...state,
				bookings: payload,
				loadingB: false,
			};
		case GET_BOOKINGSADMIN:
			return {
				...state,
				bookings: payload,
				loadingB: false,
			};
		case ADD_BOOKING:
			return {
				...state,
				bookings: [payload, ...state.bookings],
				loadingB: false,
			};
		case DELETE_BOOKING:
			return {
				...state,
				bookings: state.bookings.filter((booking) => booking._id !== payload),
				loadingB: false,
			};
		case BOOKING_ERROR:
			return {
				...state,
				error: payload,
				loadingB: false,
			};
		default:
			return state;
	}
}

export default bookingReducer;
