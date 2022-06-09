import React from "react";

import "./movie.css";
import Card from "../Card/card";

const MovieCard = () => {
  return (
    <div className="MovieCard">
      <div className="card-heading">New Release Films</div>
      <Card />
    </div>
  );
};

export default MovieCard;
