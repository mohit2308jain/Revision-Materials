import _ from 'lodash';
import { CREATE_STREAM, FETCH_STREAM, UPDATE_STREAM,
    DELETE_STREAM, FETCH_STREAMS } from './Actions';

export const streamReducer = (state={}, action) => {
    switch(action.type){
        case FETCH_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case CREATE_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case UPDATE_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case DELETE_STREAM:
            //omit is from lodash
            return _.omit(state, action.payload);
        case FETCH_STREAMS:
            //mapKeys is from lodash
            return {...state, ..._.mapKeys(action.payload, 'id')};
        default:
            return state;
    }
}