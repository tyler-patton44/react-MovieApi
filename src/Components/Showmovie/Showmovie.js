import React, { Component } from 'react';
import './Showmovie.css';

class Showmovie extends Component {
  render() {
    let list = this.props.movList.map((data, idx)=>{
      return <div className="movieContain" key={idx}>
        <h2>{data.Title}</h2>
        <p>Rated: {data.Rated}</p>
        <p>Rating: {data.imdbRating}</p>
        <img src={data.Poster} alt="Poster" />
        <p>Actors: {data.Actors}</p>
        <p>Description: {data.Plot}</p>
      </div>
    })
    return (
      <div className="showmovi">
        {list}
      </div>
    );
  }
}

export default Showmovie;
