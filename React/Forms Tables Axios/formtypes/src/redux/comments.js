import * as ActionTypes from './ActionTypes';

export const Comments = (state = { isLoading: true,
            errMess: null, 
            comments:[]
        }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return {...state, isLoading: false, errMess: null, comments: action.payload};

    case ActionTypes.COMMENTS_FAILED:
      return {...state, isLoading: false, errMess: action.payload};

    case ActionTypes.COMMENTS_LOADING:
      return {...state, isLoading: true, errMess: null, comments: []}

    case ActionTypes.ADD_COMMENT:
        let comment = action.payload;
        return { ...state, isLoading: false, comments: state.comments.concat(comment)};

    default:
      return state;
  }
};