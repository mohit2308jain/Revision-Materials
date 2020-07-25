import baseURL from '../apis/streams';
import History from '../History';
import { SIGN_IN, SIGN_OUT, CREATE_STREAM, FETCH_STREAM,
    UPDATE_STREAM, DELETE_STREAM, FETCH_STREAMS } from './Actions';

export const signIn = (userId) => {
    return{
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return{
        type: SIGN_OUT
    }
}

export const fetchStreams = () => {
    return async(dispatch) => {
        const resp = await baseURL.get('/streams');

        dispatch({
            type: FETCH_STREAMS,
            payload: resp.data
        })
    }
}

export const fetchStream = (id) => {
    return async(dispatch) => {
        const resp = await baseURL.get(`/streams/${id}`);

        dispatch({
            type: FETCH_STREAM,
            payload: resp.data
        })
    }
}

export const createStream = (formValues) => {
    return async(dispatch, getState) => {
        const { userId } = getState().auth;
        const resp = await baseURL.post('/streams', {...formValues, userId: userId});  
        
        dispatch({
            type: CREATE_STREAM,
            payload: resp.data
        })

        //navigates to '/' route when stream is created uing the Custom History
        // Object created. 
        History.push('/');
    }
}

export const updateStream = (formValues, id) => {
    return async(dispatch, getState) => {
        const resp = await baseURL.patch(`/streams/${id}`, formValues);

        dispatch({
            type: UPDATE_STREAM,
            payload: resp.data
        })
        History.push('/');
    }
}

export const deleteStream = (id) => {
    return async(dispatch) => {
        await baseURL.delete(`/streams/${id}`);

        dispatch({
            type: DELETE_STREAM,
            payload: id
        })
        History.push('/');
    }
}