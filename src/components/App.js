import React from "react";
import PostList from "./PostList";
import "./PostList.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPencilAlt,
  faBook,
  faUserCircle
} from "@fortawesome/free-solid-svg-icons";

library.add(faPencilAlt, faBook, faUserCircle);

const App = () => {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center mt-4">
          <h3 className="display-4 text-uppercase text-white text-center m-3 text-shadow-pop-bottom">
            A Simple Movie DB Search Tool
          </h3>
        </div>
        <div className="row">
          <PostList />
        </div>
      </div>
    </>
  );
};

export default App;
