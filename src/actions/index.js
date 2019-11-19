import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = searchTerm => async dispatch => {
  const response = await jsonPlaceholder.get(
    "?t=" + searchTerm + "&apikey=b424dfd6"
  );

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

// Setuo the actions to get the name of the first second and third movie

export const fetchMovieThumbs01 = searchMovieThumbTerm01 => async dispatch => {
  const response = await jsonPlaceholder.get(
    "?t=" + searchMovieThumbTerm01 + "&apikey=b424dfd6"
  );

  dispatch({ type: "FETCH_MOVIE_THUMBS_01", payload: response.data });
};

export const fetchMovieThumbs02 = searchMovieThumbTerm02 => async dispatch => {
  const response = await jsonPlaceholder.get(
    "?t=" + searchMovieThumbTerm02 + "&apikey=b424dfd6"
  );

  dispatch({ type: "FETCH_MOVIE_THUMBS_02", payload: response.data });
};

export const fetchMovieThumbs03 = searchMovieThumbTerm03 => async dispatch => {
  const response = await jsonPlaceholder.get(
    "?t=" + searchMovieThumbTerm03 + "&apikey=b424dfd6"
  );

  dispatch({ type: "FETCH_MOVIE_THUMBS_03", payload: response.data });
};
