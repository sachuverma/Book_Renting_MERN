import React, { useState, useContext, useReducer, useEffect } from "react";

import { LOADING, LOAD_ITEMS } from "../actions/types";
import reducer from "../reducer/searchReducer";

const url = "/api/books/search?";
const SearchContext = React.createContext();

const initialState = {
  loading: false,
  books: [],
};

const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async (url) => {
    dispatch({ type: LOADING });
    const res = await fetch(url);
    const items = await res.json();
    console.log(items);
    dispatch({ type: LOAD_ITEMS, payload: items });
  };

  // useEffect(() => {
  //   fetchData(`${url}`);
  // }, []);

  const handleSearch = (field = "title", value = "") => {
    console.log("handle search");
    fetchData(`${url}${field}=${value}`);
  };

  return (
    <SearchContext.Provider
      value={{
        ...state,
        handleSearch,
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
