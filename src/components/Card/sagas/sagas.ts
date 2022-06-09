import { AxiosError } from "axios";
import { put, call } from "redux-saga/effects";
import MoviesListInterface from "../../../model/MoviesListInterface";
import { getMoviesList } from "../api";
import { setMoviesLoading, setMovies,setMoviesError } from "../moviesSlice";

export function* moviesListingSaga() {
  try {
    yield put(setMoviesLoading(true));
    const fetchedMovies: Response = yield call(getMoviesList);
    yield put(setMovies(fetchedMovies.data));
    yield put(setMoviesLoading(false));
  } catch (err: any) {
    const error: AxiosError = err;
    yield put(setMoviesError(err.message));
    yield put(setMoviesLoading(false));
  }
}

export default interface Response {
  data: MoviesListInterface;
}
