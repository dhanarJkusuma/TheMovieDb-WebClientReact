import React from 'react';
import { connect } from 'react-redux';
import { fetchMovie, selectMovie } from '../actions/movie-actions';


@connect((store)=> {
  return{
    movies : store.movies
  };
})
class MovieContainer extends React.Component{
  constructor(){
    super();
  }

  componentWillMount(){
    this.props.dispatch(fetchMovie());
  }

  renderLoading(){
    return (
      <p>Loading...</p>
    );
  }

  selectedMovie(movie){
    this.props.dispatch(selectMovie(movie));
  }

  renderMovies(){
    const { movies } = this.props.movies;

    const mappedMovie = movies.map((movie) => {
        return (
          <a className="list-group-item" onClick={ () => {this.selectedMovie(movie)} }>{ movie.title }</a>
        );
    });
    return (
        <div className="col-md-4">
          <div className="list-group">
            {mappedMovie}
          </div>
        </div>
    );
  }


  render(){
    const { isFetched } = this.props.movies;
    if(isFetched){
        return this.renderMovies()
    }
    else
    {
        return this.renderLoading()
    }
  }
}

export default MovieContainer;
