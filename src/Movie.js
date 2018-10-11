import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';

class Movie extends Component {  
    render() {
      return (
        <div className="App">
        <div className="Background">
           
             <div className="Movies">
               <h3>Title: </h3>
               <h3>Release Date: {this.props.individualMovie.release_date}</h3>
               <h3>Rating: {this.props.individualMovie.vote_average}</h3>
               <h3>Budget: {this.props.individualMovie.budget}</h3>
               <button onClick={this.props.goBack}>Go Back</button>
            </div>
           
          </div> 
        </div>
      );
    }
  }
  
  export default Movie;