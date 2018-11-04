import React, { Component } from 'react';
import { moviesData } from "../moviesData";
import MovieItem from './MovieItem';

export default class MovieList extends React.Component {
    constructor() {
      super();
  
      this.state = {
        movies: [] 
      };
    }

   componentDidMount() {
     this.setState({
        movies: moviesData
       });
    }
    
    render() {
      return(
        <div className="row">
          {this.state.movies.map(movie => {
              return (
                <MovieItem 
                key={movie.id}
                item={movie}
                addMovieWatch={this.props.addMovieWatch}
                removeMovieWatch={this.props.removeMovieWatch}/>
              );
            })
           }
        </div>
      );
    }
}

