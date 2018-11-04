import React, { Component } from "react";
import { moviesData } from "../moviesData";
import MovieList  from "./MovieList" ;
import MoviesWillWatch  from "./MovieListWillWatch" ;

export default class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      moviesWillWatch: []
    };
  }
  
  addMovieWatch = movie => {
    const newMoviesWillWatch = [...this.state.moviesWillWatch];
    newMoviesWillWatch.push(movie);

    this.setState({
      moviesWillWatch: newMoviesWillWatch
    });
  };

  removeMovieWatch = movie => {
    const newMovieWillWatch = this.state.moviesWillWatch.filter(
      item => item.id !== movie.id
    );
    this.setState({
      moviesWillWatch: newMovieWillWatch
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9">
            <MovieList addMovieWatch={this.addMovieWatch}
                  removeMovieWatch={this.removeMovieWatch}/>
          </div>
          <div className="col-sm-3">
           <MoviesWillWatch />
          </div>
        </div>
      </div>
    );
  }
}

