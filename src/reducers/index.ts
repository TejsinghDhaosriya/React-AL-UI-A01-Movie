import { combineReducers } from "redux";

import moviesSlice from "../components/Card/moviesSlice";
const createRootReducer = () =>
  combineReducers({
    movies: moviesSlice,
  });

export default createRootReducer;
