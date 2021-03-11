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
    const res = await axios.get(url);
    const items = await res.data;

    if (res.status === 400) {
      console.log("error searching");
      dispatch({ type: LOAD_ITEMS, payload: [] });
      return;
    }

    for (let i = 0; i < items.length; ++i) {
      let image_url = "https://via.placeholder.com/500";
      try {
        const res = await axios.get(`/api/books/book/image/${items[i]._id}`);
        image_url = res.config.url;
      } catch (e) {
        console.log("img err", e);
      }
      items[i]["image_url"] = image_url;
      console.log(i, items[i]);
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

    for (let i = 0; i < items.length; ++i) {
      let image_url = "https://via.placeholder.com/500";
      try {
        const res = await axios.get(`/api/books/book/image/${items[i]._id}`);
        image_url = res.config.url;
      } catch (e) {
        console.log("img err", e);
      }
      items[i]["image_url"] = image_url;
      console.log(i, items[i]);
    }
    dispatch({ type: LOAD_ADD_ITEMS, payload: items });
  };

  const addBook = async (data, file) => {
    dispatch({ type: SEND_LOADING });

    let formData = new FormData();
    formData.append("book_name", data.book_name);
    formData.append("book_author", data.book_author);
    formData.append("for_semester", data.for_semester);
    formData.append("for_branch", data.for_branch);
    formData.append("book_image", file);

    console.log("data from form", formData);
    const res = await axios.post(
      "http://localhost:5000/api/books",
      formData,
      imageHeaderConfig()
    );
    const item = await res.data;

    if (res.status !== 200) {
      console.log("error geting sell books");
      dispatch({ type: SENT_DETAILS, payload: null });
      return;
    }

    console.log(item);
    dispatch({ type: SENT_DETAILS, payload: item });
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

  const imageHeaderConfig = () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
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
