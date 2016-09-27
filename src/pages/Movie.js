import React from 'react';
import MovieContainer from '../containers/movie-container';
import MovieDetailContainer from '../containers/active-movie-container';

class Movie extends React.Component{
  render(){
    return (
      <div>
        <div className="col-md-12">
          <h3>ThemovieDB <small>Popular</small></h3>
          <hr/>
        </div>
        <MovieContainer />
        <MovieDetailContainer />

      </div>
    );
  }
}

export default Movie;
