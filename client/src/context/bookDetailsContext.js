import React, { useState, useContext, useReducer, useEffect } from "react";

import { BOOK_LOADING, BOOK_ERROR, BOOK_LOADED } from "../actions/types";
import reducer from "../reducer/bookDetailsReducer";

const url = "/api/books/book/";
const BookDetailsContext = React.createContext();

const initialState = {
  loading_book: true,
  book_error: "",
  book_details: {},
};

const BookDetailsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async (url) => {
    dispatch({ type: BOOK_LOADING });
    const res = await fetch(url);
    const details = await res.json();
    console.log(res);
    if (res.status == 400) {
      console.log("error searching");
      dispatch({ type: BOOK_ERROR, payload: res.statusText });
      return;
    }
    dispatch({ type: BOOK_LOADED, payload: details });
  };

  const searchBookDetails = (id) => {
    console.log("fetch book data");
    fetchData(`${url}${id}`);
  };

  return (
    <BookDetailsContext.Provider
      value={{
        ...state,
        searchBookDetails,
      }}
    >
      {children}
    </BookDetailsContext.Provider>
  );
};

export const useBookDetailsContext = () => {
  return useContext(BookDetailsContext);
};

export { BookDetailsContext, BookDetailsProvider };
