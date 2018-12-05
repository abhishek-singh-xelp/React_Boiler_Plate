import {
	SUCCESS,
	FAILURE,
	REQUESTING,
	USER_REQUESTING,
	USER_SUCCESS,
	USER_FAILURE
} from "./config.js";

function saveUserRequest() {
	return {
		type: USER_REQUESTING,
		status: SUCCESS
	};
}

function saveUserSuccess(userData) {
	return {
		type: USER_SUCCESS,
		status: SUCCESS,
		userData
	};
}

function saveUserFailure(errorMsg) {
	return {
		type: USER_FAILURE,
		status: FAILURE,
		errorMsg
	};
}
export function saveUser(userData) {
	console.log("userData", userData);
	return async (dispatch, getState, api) => {
		dispatch(saveUserRequest());
		try {
			dispatch(saveUserSuccess(userData));
		} catch (e) {
			dispatch(saveUserFailure(e.message));
		}
	};
}
