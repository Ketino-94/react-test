import React, { Component } from 'react';
import { moviesData } from "../moviesData";
import MovieItem from './MovieItem';

export default class MovieList extends React.Component {
    constructor() {
      super();
  
      this.state = {
        moviesData: []
      };
    }
    
    render() {
      return(
        <div className="col-sm-3">
        {this.state.moviesData}
          {this.state.moviesData.map(movie => {
              return (
                <MovieItem  key={movie.id} item={movie} />
              );
            })
           }
        </div>
      );
    }
}

