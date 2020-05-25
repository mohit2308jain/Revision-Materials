import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

//Reducers example taking state and action as arguments and updating the state with value changes due to action
export const Comments = (state = COMMENTS, action) => {
    switch(action.type){
        case ActionTypes.ADD_COMMENT:
            let comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            return state.concat(comment);
        
        default: return state;
    }
}