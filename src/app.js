import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';
import { applyMiddleware, createStore } from 'redux';
import axios from 'axios';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import allReducer from './reducer/';
import userReducer from './reducer/user-reducer';
import {Provider} from 'react-redux';

const app = document.getElementById('app');

const middleware = applyMiddleware(promise(),thunk);
const store = createStore(allReducer,middleware);

//thunk
//
// store.dispatch((dispatch)=>{
//   dispatch({type : "AMBIL_USER"})
//   axios.get("http://rest.learncode.academy/api/wstern/users")
//     .then((response)=>{
//       dispatch({type : "AMBIL_SUKSES", payload:response.data})
//     })
//     .catch((error)=>{
//       dispatch({ type: "AMBIL_GAGAL", payload:error })
//     });
// });
//thunk


//promise
// store.dispatch({
//     type : "FETCH_USERS",
//     payload : axios.get("http://rest.learncode.academy/api/wstern/users")
// });
//promise

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  app
);
