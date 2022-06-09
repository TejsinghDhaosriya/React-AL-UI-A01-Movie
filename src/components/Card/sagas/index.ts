import { takeEvery } from "redux-saga/effects";
import { SAGA_FETCH_MOVIES} from "../actions";
import { moviesListingSaga} from "./sagas";

export const moviesSagas = [
  takeEvery(SAGA_FETCH_MOVIES, moviesListingSaga)
];
