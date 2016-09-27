

const movieSelectReducer = (state={},action) => {
  switch (action.type) {
    case "SELECT_MOVIE":
        return action.payload;
      break;
    default:
  }
  return state;
};


export default movieSelectReducer;
