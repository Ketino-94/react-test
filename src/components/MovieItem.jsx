import React, { Component } from 'react';

export default class MovieItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          willWatch: false
        };
      }
    
      state = {
        willWatch: false,
        movie: this.props.item
      };

    changeWillWatch = () => {
        if (this.state.willWatch) {
          this.props.removeMovieWatch(this.props.item);
          this.setState({
            willWatch: false
          });
        } else {
          this.props.addMovieWatch(this.props.item);
          this.setState({
            willWatch: true
          });
        }
      };


    render() {
    const { willWatch } = this.state;
    const { item } = this.props;
      return(
        <div className="col-sm-4 mb-4">
            <div className="card">
            <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}`} alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="mb-1">Rating: {item.vote_average}</p>
                    <button className={`btn ${willWatch ? "btn-success" : "btn-primary"}`} 
                    onClick={this.changeWillWatch} >Will Watch </button>
                </div>
            </div>
        </div>
      );
    }
}