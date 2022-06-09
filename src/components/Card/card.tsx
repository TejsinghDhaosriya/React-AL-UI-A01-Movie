import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./card.css";
import MoviesListInterface from "../../model/MoviesListInterface";
import { selectMovies, selectMoviesLoading } from "./moviesSlice";
import { moviesListing } from "./actions";

const Card: React.FC = () => {
  const [moviesList, setMoviesList] = useState<MoviesListInterface[]>([]);
  const moviesLoading = useSelector(selectMoviesLoading);
  const movies = useSelector(selectMovies);
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
     <div className="cards-bottom"></div>
    </div>
  );
};

export default Card;
