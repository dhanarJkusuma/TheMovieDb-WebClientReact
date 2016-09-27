import {combineReducers} from 'redux';
import userReducer from './user-reducer';
import movieReducer from './movie-reducer';
import movieSelect from './movie-select-reducer';

const allReducer = combineReducers({
    'users' : userReducer,
    'movies' : movieReducer,
    'selectedMovie' : movieSelect
});

export default allReducer;
