import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addComment = (comment) => {
    return ({
        type: ActionTypes.ADD_COMMENT,
        payload: comment
    });
}

export const postComment = (rating, author, comment) => (dispatch) => {

    const newComment = {
        dishId: 0,
        rating: rating,
        author: author,
        comment: comment
    };
    newComment.date = new Date().toISOString();
    
    return fetch(baseUrl + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } 
        else {
          let error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
    },
    error => {
        throw error;
    })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => { 
        console.log('post comments', error.message); 
        alert('Your comment could not be posted\nError: '+error.message); 
    });
};

export const fetchComments = () => {
    return( 
        (dispatch) => {

            dispatch(commentsLoading());

            return (fetch(baseUrl + 'comments')
                .then(response => {
                    if (response.ok) {
                        return response;
                    }
                    else {
                        let error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        throw error;
                    }
                },
                error => {
                        let errmess = new Error(error.message);
                        throw errmess;
                    }
                )
                .then(response => response.json())
                .then(comments => dispatch(addComments(comments)))
                .catch(error => dispatch(commentsFailed(error.message)))
            )
        }
    )
}

export const commentsLoading = () => ({
    type: ActionTypes.COMMENTS_LOADING
});

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const postFeedback = (firstname, lastname, telnum, email, agree, contactType, message) => (dispatch) => {

    const newFeedback = {
        firstname: firstname,
        lastname: lastname,
        telnum: telnum,
        email: email,
        agree: agree,
        contactType: contactType,
        message: message
    };
    
    return fetch(baseUrl + 'feedback', {
        method: "POST",
        body: JSON.stringify(newFeedback),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } 
        else {
          let error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
    },
    error => {
        throw error;
    })
    .then(response => response.json())
    .then(response => {
        alert("Thank you for your feedback!" + JSON.stringify(response))
        console.log(response)
        }
    )
    .catch(error => { 
        console.log('post comments', error.message); 
        alert('Your comment could not be posted\nError: '+error.message); 
    });
};

export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading());

    return (fetch(baseUrl + 'leaders')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                let error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
                let errmess = new Error(error.message);
                throw errmess;
        })
        .then(response => response.json())
        .then(leaders => dispatch(addLeaders(leaders)))
        .catch(error => dispatch(leadersFailed(error.message)))
    )
}

export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
});

export const leadersFailed = (errmess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errmess
});

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});