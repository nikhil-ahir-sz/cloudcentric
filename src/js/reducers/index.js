import {combineReducers} from 'redux';
import {routerStateReducer} from 'redux-router';
import auth from './auth';
import profile from './profile';

export default combineReducers({
    auth,
    profile,
    router: routerStateReducer
});
