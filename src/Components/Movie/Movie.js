import React, { Component } from 'react';
import './Movie.css';
import Showmovie from '../Showmovie/Showmovie';
import axios from 'axios';


class Movie extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: "",
      movie: []
    }
  }
  onInputChange = (event) => {
    this.setState(
      {text: event.target.value}
    );
  }
  onFormSubmit = (event) => {
    this.movie = [];
    event.preventDefault();
    axios.get("http://www.omdbapi.com/?t="+this.state.text+"&apikey=146c3f26")
        // when we get a response, we will update state with the results of the request
    .then((response) => (
      this.setState({movie: [response.data]})
    ));
    this.setState({text: ""});
  }
  render() {
    return (
      <div className="movi">
        <h1>Movie Data</h1>
        <form className="form-inline mt-2 mt-md-0" onSubmit={this.onFormSubmit}>
          <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" value={this.state.text} onChange={this.onInputChange} />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button>
        </form>

        <div className="contain">
          <Showmovie movList={this.state.movie} />
        </div>
      </div>
    );
  }
}

export default Movie;
