/* eslint-disable no-undef */
import React from "react";
import { connect } from "react-redux";
import {
  fetchPosts,
  fetchMovieThumbs01,
  fetchMovieThumbs02,
  fetchMovieThumbs03
} from "../actions";
import "./PostList.css";
import { CSSTransition } from "react-transition-group";

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      searchMovieThumbTerm01: "",
      searchMovieThumbTerm02: "",
      searchMovieThumbTerm03: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.fetchPosts(this.state.searchTerm);
  }

  componentDidMount() {
    var arrGreatestAllTimes = [
      "The Dark Knight",
      "The Exorcist",
      "The Fellowship of the Ring",
      "Forrest Gump",
      "Pulp Fiction",
      "Gladiator",
      "Forrest Gump",
      "Pulp Fiction",
      "Gladiator",
      "Doctor Zhivago",
      "Rain Man",
      "Star Wars: Episode IV - A New Hope",
      "The Silence of the Lambs",
      "Braveheart",
      "An American in Paris",
      "The Shawshank Redemption",
      "Schindler's List",
      "The Green Mile",
      "Close Encounters of the Third Kind",
      "Good Will Hunting",
      "Network",
      "The Pianist",
      "Back to the Future",
      "The Empire Strikes Back",
      "Jurassic Park",
      "Avatar",
      "E.T.",
      "Snow White and the Seven Dwarfs",
      "Avengers",
      "The Lion King ",
      "Terminator 2",
      "The Wizard of Oz",
      "Goodfellas",
      "Black Panther",
      "Saving Private Ryan",
      "Taxi Driver",
      "Rocky"
    ];
    var rand =
      arrGreatestAllTimes[
        Math.floor(Math.random() * arrGreatestAllTimes.length)
      ];
    var rand02 =
      arrGreatestAllTimes[
        Math.floor(Math.random() * arrGreatestAllTimes.length)
      ];
    var rand03 =
      arrGreatestAllTimes[
        Math.floor(Math.random() * arrGreatestAllTimes.length)
      ];
    if (rand02 === rand || rand02 === rand03 || rand === rand03) {
      rand02 =
        arrGreatestAllTimes[
          Math.floor(Math.random() * arrGreatestAllTimes.length - 1)
        ];
      rand =
        arrGreatestAllTimes[
          Math.floor(Math.random() * arrGreatestAllTimes.length - 2)
        ];
      rand03 =
        arrGreatestAllTimes[
          Math.floor(Math.random() * arrGreatestAllTimes.length - 2)
        ];
    }
    this.props.fetchPosts("8 Mile");
    this.props.fetchMovieThumbs01(rand);
    this.props.fetchMovieThumbs02(rand02);
    this.props.fetchMovieThumbs03(rand03);
  }

  // the method to print this out on the div we have here
  renderList() {
    return (
      <>
        <div className="mb-3 col-sm-12 col-md-12 col-lg-4">
          <div className="card">
            <img
              className="fade-in"
              src={this.props.posts.Poster}
              alt={this.props.posts.Title}
            />
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-8">
          <div className="row mb-2">
            <CSSTransition
              in={true}
              timeout={500}
              classNames="list-transition"
              unmountOnExit
              appear
            >
              <form
                onSubmit={this.handleSubmit}
                className="col-12 d-flex justify-content-around"
              >
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                  className="form-control list-transition"
                />
                <button
                  type="submit"
                  className="ml-2 col-3 btn btn-info btn-block"
                >
                  SEARCH
                </button>
              </form>
            </CSSTransition>
          </div>

          <ul className="list-group myfont">
            <li className="list-group-item active">
              <b className="lead text-center">{this.props.posts.Title}</b>
            </li>
            <li className="list-group-item">
              <b className="text-info text-uppercase"> Plot:</b>{" "}
              {this.props.posts.Plot}{" "}
            </li>
            <li className="list-group-item">
              <b className="text-info text-uppercase"> Starring:</b>{" "}
              {this.props.posts.Actors}
            </li>

            <li className="list-group-item">
              <b className="text-info text-uppercase"> Genre:</b>{" "}
              {this.props.posts.Genre}
            </li>
            <li className="list-group-item">
              <b className="text-info text-uppercase"> Awards:</b>{" "}
              {this.props.posts.Awards}
            </li>

            <li className="list-group-item">
              <div className="row d-flex justify-content-around">
                <div className="col-6">
                  <b className="text-info text-uppercase">Year:</b>{" "}
                  {this.props.posts.Year}
                </div>
                <div className="col-6">
                  <b className="text-info text-uppercase"> Released:</b>{" "}
                  {this.props.posts.Released}
                </div>
              </div>
            </li>

            <li className="list-group-item">
              <div className="row d-flex justify-content-around">
                <div className="col-6">
                  <b className="text-info text-uppercase"> Produced by:</b>{" "}
                  {this.props.posts.Production}
                </div>
                <div className="col-6">
                  <b className="text-info text-uppercase"> Directed by</b> :{" "}
                  {this.props.posts.Director}
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row d-flex justify-content-around">
                <div className="col-6">
                  <b className="text-info text-uppercase"> Duration:</b>{" "}
                  {this.props.posts.Runtime}
                </div>
                <div className="col-6">
                  <b className="text-info text-uppercase"> Country:</b>{" "}
                  {this.props.posts.Country}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </>
    );
  }

  MovieThumbList() {
    return (
      <>
        <div className="card d-flex w-100 ">
          <div className="card-header lead text-uppercase bg-primary text-white">
            Some of the Greatest Movies of All Time
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                <div className="card border border-success">
                  <img
                    className="card-img-top fade-in"
                    src={this.props.thumbs.Poster}
                    alt={this.props.thumbs.Title}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-info">
                      {this.props.thumbs.Title}
                    </h5>
                    <p className="card-text text-muted">
                      {this.props.thumbs.Plot}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                <div className="card border border-success">
                  <img
                    className="card-img-top fade-in"
                    src={this.props.thumbs02.Poster}
                    alt={this.props.thumbs02.Title}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-info">
                      {this.props.thumbs02.Title}
                    </h5>
                    <p className="card-text text-muted">
                      {this.props.thumbs02.Plot}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                <div className="card border border-success">
                  <img
                    className="card-img-top fade-in"
                    src={this.props.thumbs03.Poster}
                    alt={this.props.thumbs03.Title}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-info">
                      {this.props.thumbs03.Title}
                    </h5>
                    <p className="card-text text-muted">
                      {this.props.thumbs03.Plot}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-1">
          <p className="text-muted p-2 m-4">
            Copyright © 2019 A Simple Movie DB Search Tool - Coded and built
            with ❤ by Alvison Hunter
          </p>
        </div>
      </>
    );
  }

  render() {
    return (
      <>
        <div className="row pt-3 bg-light w-100 border border-secondary">
          {this.renderList()}
        </div>
        <div className="row bg-light w-100">{this.MovieThumbList()}</div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    thumbs: state.thumbs,
    thumbs02: state.thumbs02,
    thumbs03: state.thumbs03
  };
};
export default connect(mapStateToProps, {
  fetchPosts,
  fetchMovieThumbs01,
  fetchMovieThumbs02,
  fetchMovieThumbs03
})(PostList);
