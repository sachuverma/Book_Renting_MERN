import { BOOK_LOADING, BOOK_ERROR, BOOK_LOADED } from "../actions/types";

const reducer = (state, action) => {
  if (action.type === BOOK_LOADING) {
    return {
      ...state,
      loading_book: true,
      book_error: "",
    };
  }

  if (action.type === BOOK_LOADED) {
    return {
      ...state,
      loading_book: false,
      book_details: action.payload,
    };
  }

  if (action.type === BOOK_ERROR) {
    return {
      ...state,
      loading_book: false,
      book_error: action.payload,
    };
  }
  throw new Error("action type match not found :P");
};

export default reducer;
