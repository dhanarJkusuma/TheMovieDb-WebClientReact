import React from 'react';
import { connect } from 'react-redux';

@connect((store) => {
  return {
    movie : store.selectedMovie
  };
})
class ActiveMovieContainer extends React.Component{
  render(){
    if(!this.props.movie){
      return (<h4>Please select movie</h4>);
    }
    else{
      const { movie } = this.props;
      const baseUrlPoster = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/";
      const movieUrlPoster = baseUrlPoster.concat(movie.poster_path);
      return(
        <div className="col-md-6">
        <div className="page-header">
          <h3>{ movie.original_title }<small> { movie.vote_average } </small></h3>
        </div>
        <div className="panel panel-default">
          <div className="panel-body">
          <div className="col-md-4">
            <img src={ movieUrlPoster } alt=""/>
          </div>
          <div className="col-md-8">
            <p>Release Date : { movie.release_date }</p>
            <table className="table table-condensed">
              <tr>
                <td>{ movie.overview }</td>
              </tr>
            </table>
          </div>
          </div>
        </div>
        </div>

      );
    }
  }
}

export default ActiveMovieContainer;
