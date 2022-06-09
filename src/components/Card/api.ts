import axios from "axios";

export const getMoviesList = () =>
  axios.get(`https://api.androidhive.info/json/movies_2017.json`);
