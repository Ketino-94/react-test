import React, { Component } from 'react';

export default class MovieItem extends React.Component{
    state = {
        movie: this.props.item
    };


    render() {
    const { willWatch } = this.state;
    const { item } = this.props;
      return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">dsfsf {item.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button className="btn btn-primary">Will Watch </button>
            </div>
        </div>
      );
    }
}