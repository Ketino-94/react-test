import React, { Component } from "react";
import { moviesData } from "../moviesData";
import MovieList  from "./MovieList" ;

export default class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      moviesWillWatch: []
    };
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
          <MovieList />
          </div>
        </div>
      </div>
    );
  }
}

