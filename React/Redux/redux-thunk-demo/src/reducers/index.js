import { combineReducers } from 'redux';
import postsReducer from './postReducers';
import userReducer from './userReducer';

export default combineReducers({
    posts: postsReducer,
    users: userReducer
});