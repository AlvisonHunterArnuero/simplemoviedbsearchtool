export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_MOVIE_THUMBS_03":
      return action.payload;
    default:
  }
  return state;
};
