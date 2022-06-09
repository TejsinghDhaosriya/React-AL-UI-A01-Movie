// ACTION TYPES
export const SAGA_FETCH_MOVIES = "movies/SAGA_FETCH_MOVIES";

// ACTION CREATORS

export const moviesListing = () => ({
  type: SAGA_FETCH_MOVIES,
});
