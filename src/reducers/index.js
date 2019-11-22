import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import thumb01Reducer from "./thumb01Reducer";
import thumb02Reducer from "./thumb02Reducer";
import thumb03Reducer from "./thumb03Reducer";

export default combineReducers({
  posts: postsReducer,
  movie_thumb_01: thumb01Reducer,
  movie_thumb_02: thumb02Reducer,
  movie_thumb_03: thumb03Reducer
});
