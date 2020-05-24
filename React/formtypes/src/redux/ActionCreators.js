import * as ActionTypes from './ActionTypes';

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