import {
  GET_ERRORS,
  CLEAR_ERRORS,
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "../actions/types";

const reducer = (state, action) => {
  if (action.type === GET_ERRORS) {
    return {
      ...state,
      err_msg: action.payload.msg,
      err_status: action.payload.status,
      err_id: action.payload.id,
    };
  }

  if (action.type === CLEAR_ERRORS) {
    return {
      ...state,
      err_msg: "",
      err_status: null,
      err_id: null,
    };
  }

  if (action.type === USER_LOADING) {
    return {
      ...state,
      user_loading: true,
    };
  }

  if (action.type === USER_LOADED) {
    return {
      ...state,
      isAuthenticated: true,
      user_loading: false,
      user: action.payload,
    };
  }

  if (action.type === LOGIN_SUCCESS || action.type === REGISTER_SUCCESS) {
    localStorage.setItem("token", action.payload.token);
    return {
      ...state,
      ...action.payload,
      isAuthenticated: true,
      user_loading: false,
      err_msg: "",
      err_status: null,
      err_id: null,
    };
  }

  if (
    action.type === AUTH_ERROR ||
    action.type === LOGIN_FAIL ||
    action.type === REGISTER_FAIL ||
    action.type === LOGOUT_SUCCESS
  ) {
    localStorage.removeItem("token");
    return {
      ...state,
      token: null,
      user: null,
      isAuthenticated: false,
      user_loading: false,
    };
  }

  throw new Error("action type match not found :P");
};

export default reducer;
