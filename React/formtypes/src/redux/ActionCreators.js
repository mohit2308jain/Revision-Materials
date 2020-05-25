import * as ActionTypes from './ActionTypes';

//Method used to define what the action will do
export const addComment = (rating, author, comment) => {
    return ({
        type: ActionTypes.ADD_COMMENT,
        payload: {
            dishId: 0,
            rating: rating,
            author: author,
            comment: comment
        }
    });
}