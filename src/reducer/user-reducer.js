

const initialState = {
    loading:false,
    sukses:false,
    users:[],
    error:null
};

const userReducer = (state=initialState,action) => {
  switch (action.type) {
    case "FETCH_USERS_PENDING":
      return {
        ...state,
        loading:true
      }
      break;

    case "FETCH_USERS_FULFILLED":
      return {
        ...state,
        sukses:true,
        loading:false,
        users:action.payload.data
      }
      break;

    case "FETCH_USERS_REJECTED" :
      return {
        ...state,
        sukses:false,
        loading:false,
        error:action.payload
      }
      break;
  }
  return state;
}
export default userReducer;
