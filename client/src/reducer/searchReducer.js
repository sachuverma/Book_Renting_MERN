import {
  LOADING,
  SEND_LOADING,
  LOAD_ITEMS,
  LOAD_ADD_ITEMS,
  SENT_DETAILS,
} from "../actions/types";

const reducer = (state, action) => {
  if (action.type === LOADING) {
    return {
      ...state,
      loading: true,
      added_loading: true,
    };
  }

  if (action.type === SEND_LOADING) {
    return {
      ...state,
      send_loading: true,
    };
  }

  if (action.type === LOAD_ITEMS) {
    return {
      ...state,
      loading: false,
      added_loading: false,
      books: [...action.payload],
    };
  }

  if (action.type === LOAD_ADD_ITEMS) {
    return {
      ...state,
      loading: false,
      added_loading: false,
      added_books: [...action.payload],
    };
  }

  if (action.type === SENT_DETAILS) {
    return {
      ...state,
      loading: false,
      send_loading: false,
      added_books: [...state.added_books, action.payload],
    };
  }

  throw new Error("action type match not found :P");
};

export default reducer;
