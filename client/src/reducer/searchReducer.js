import { LOADING, LOAD_ITEMS } from "../actions/types";

const reducer = (state, action) => {
  if (action.type === LOADING) {
    console.log("fetching items");
    return { ...state, loading: true };
  }

  if (action.type === LOAD_ITEMS) {
    console.log("load items");
    return {
      ...state,
      loading: false,
      books: [...action.payload],
    };
  }

  throw new Error("action type match not found :P");
};

export default reducer;
