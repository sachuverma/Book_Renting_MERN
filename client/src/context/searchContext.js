import React, { useState, useContext, useReducer, useEffect } from "react";
import axios from "axios";

import {
  LOADING,
  SEND_LOADING,
  LOAD_ITEMS,
  LOAD_ADD_ITEMS,
  SENT_DETAILS,
} from "../actions/types";
import reducer from "../reducer/searchReducer";

const url = "http://localhost:5000/api/books/search?";
const SearchContext = React.createContext();

const initialState = {
  loading: false,
  added_loading: false,
  send_loading: false,
  books: [],
  added_books: [],
};

const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async (url) => {
    dispatch({ type: LOADING });
    const res = await fetch(url);
    const items = await res.json();

    if (res.status == 400) {
      console.log("error searching");
      dispatch({ type: LOAD_ITEMS, payload: [] });
      return;
    }
    // console.log(items);
    dispatch({ type: LOAD_ITEMS, payload: items });
  };

  // useEffect(() => {
  //   fetchData(`${url}`);
  // }, []);

  const handleSearch = (field = "title", value = "") => {
    console.log("handle search");
    fetchData(`${url}${field}=${value}`);
  };

  const userAdded = async () => {
    dispatch({ type: LOADING });

    const res = await axios.get(
      "http://localhost:5000/api/user/books",
      tokenConfig()
    );
    const items = res.data;

    if (res.status !== 200) {
      console.log("error geting sell books");
      dispatch({ type: LOAD_ADD_ITEMS, payload: [] });
      return;
    }
    // console.log(items);
    dispatch({ type: LOAD_ADD_ITEMS, payload: items });
  };

  const addBook = async (data, file) => {
    // dispatch({ type: SEND_LOADING });
    console.log("file from form", file);
    // const body = JSON.stringify(data);

    // const res = await axios.post(
    //   "http://localhost:5000/api/books",
    //   data,
    //   tokenConfig()
    // );
    // const item = await res.data;

    // if (res.status !== 200) {
    //   console.log("error geting sell books");
    //   dispatch({ type: SENT_DETAILS, payload: null });
    //   return;
    // }

    // console.log(item);
    // dispatch({ type: SENT_DETAILS, payload: item });
  };

  const tokenConfig = () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    if (token) config.headers["x-auth-token"] = token;
    console.log(config);
    return config;
  };

  return (
    <SearchContext.Provider
      value={{
        ...state,
        handleSearch,
        userAdded,
        addBook,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};

export { SearchContext, SearchProvider };
