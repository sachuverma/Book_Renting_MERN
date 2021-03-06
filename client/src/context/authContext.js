import React, { useState, useContext, useReducer, useEffect } from "react";
import axios from "axios";

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
import reducer from "../reducer/authReducer";

const url = "/api/auth/";
const AuthContext = React.createContext();

const getToken = () => {
  return localStorage.getItem("token") || null;
};

const storeToken = (token) => {
  localStorage.setItem("token", token);
};

const initialState = {
  token: getToken(),
  user_loading: false,
  user: null,
  isAuthenticated: false,
  err_msg: "",
  err_status: null,
  err_id: null,
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loadUser = () => {
    dispatch({ type: USER_LOADING });

    axios
      .get("/api/user", tokenConfig())
      .then((res) => {
        dispatch({ type: USER_LOADED, payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: GET_ERRORS,
          payload: {
            msg: err.response.data,
            status: err.response.status,
            id: null,
          },
        });
        dispatch({ type: AUTH_ERROR });
      });
  };

  const register = (data) => {
    console.log("register ran");
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify(data);

    axios
      .post("http://localhost:5000/api/register", body, config)
      .then((res) => {
        console.log("register end");
        dispatch({ type: REGISTER_SUCCESS, payload: res.data });
        dispatch({ type: CLEAR_ERRORS });
      })
      .catch((err) => {
        console.log("reg err", err.response);
        dispatch({
          type: GET_ERRORS,
          payload: {
            msg: err.response.data,
            status: err.response.status,
            id: "REGISTER_FAIL",
          },
        });
        dispatch({ type: REGISTER_FAIL });
      });
  };

  const login = (data) => {
    console.log("login ran");
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify(data);

    axios
      .post("http://localhost:5000/api/login", body, config)
      .then((res) => {
        console.log("login end");
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        dispatch({ type: CLEAR_ERRORS });
      })
      .catch((err) => {
        console.log("login err", err.response);
        dispatch({
          type: GET_ERRORS,
          payload: {
            msg: err.response.data,
            status: err.response.status,
            id: "LOGIN_FAIL",
          },
        });
        dispatch({ type: LOGIN_FAIL });
      });
  };

  const logout = () => {
    dispatch({ type: LOGOUT_SUCCESS });
  };

  const clearErrors = () => {
    dispatch({ type: CLEAR_ERRORS });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        loadUser,
        register,
        clearErrors,
        logout,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const tokenConfig = () => {
  const token = getToken();
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  if (token) config.headers["x-auth-token"] = token;
  return config;
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthContext, AuthProvider };
