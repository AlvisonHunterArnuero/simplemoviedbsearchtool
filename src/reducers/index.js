import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import thumb01Reducer from "./thumb01Reducer";
import thumb02Reducer from "./thumb02Reducer";
import thumb03Reducer from "./thumb03Reducer";

export default combineReducers({
  posts: postsReducer,
  thumbs: thumb01Reducer,
  thumbs02: thumb02Reducer,
  thumbs03: thumb03Reducer
});
