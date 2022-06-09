import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./card.css";
import MoviesListInterface from "../../model/MoviesListInterface";
import {
  selectMovies,
  selectMoviesError,
  selectMoviesLoading,
} from "./moviesSlice";
import { moviesListing } from "./actions";

const Card: React.FC = () => {
  const [moviesList, setMoviesList] = useState<MoviesListInterface[]>([]);
  const moviesLoading = useSelector(selectMoviesLoading);
  const movies = useSelector(selectMovies);
  const moviesError = useSelector(selectMoviesError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(moviesListing());
  }, [dispatch]);

  useEffect(() => {
    setMoviesList(movies);
  }, [moviesLoading, movies]);

  return (
    <div className="cards">
      {!moviesLoading &&
        moviesList.map((element: MoviesListInterface, index: number) => {
          return (
            <div className="card" key={index}>
              <img src={element.image} alt="" className="card-img" />
              <div className="card-info">
                <h3 className="card-title">{element.title}</h3>
                <span className="card-price">{element.price}</span>
              </div>
            </div>
          );
        })}
      {!moviesLoading &&
        moviesList.length < 1 &&
        moviesError === "Network Error" && (
          <div>
            Server Error : No 'Access-Control-Allow-Origin' header is present on
            the requested resource. Please enable cors from extension like{" "}
            <a href="https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en">
              extension link
            </a>
          </div>
        )}
      <div className="cards-bottom"></div>
    </div>
  );
};

export default Card;
