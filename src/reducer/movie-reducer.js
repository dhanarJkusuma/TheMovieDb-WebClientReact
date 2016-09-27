const initialState = {
  fetching: false,
  isFetched: false,
  error: null,
  movies:[]
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES_PENDING":
      return {
        ...state,
        fetching : true
      }
      break;

    case "FETCH_MOVIES_FULFILLED":
      return {
        ...state,
        isFetched : true,
        fetching : false,
        movies : action.payload.data.results
      }
      break;

    case "FETCH_MOVIES_REJECTED":
      return {
        ...state,
        isFetched : false,
        fetching : false
      }
      break;

    default:

  }
  return state;
};

export default movieReducer;
