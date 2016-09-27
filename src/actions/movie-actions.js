import axios from 'axios';

export function fetchMovie(){
  return {
    type : "FETCH_MOVIES",
    payload : axios.get('https://api.themoviedb.org/3/movie/popular?api_key=e147b957c1437e384cd6546d5b44a48e&language=en-US')
  }
}

export function selectMovie(movie){
  return {
    type : "SELECT_MOVIE",
    payload : movie
  }
}
