import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Comments } from "./comments";
import { Leaders } from './leaders';
import { InitialFeedback } from './forms';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { createForms } from 'react-redux-form';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            comments: Comments,
            leaders: Leaders,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware( thunk, logger )
    );

    return store;
}