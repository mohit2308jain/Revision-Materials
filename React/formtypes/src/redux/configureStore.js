import { createStore, combineReducers } from 'redux';
import { Comments } from "./comments";

//Configuring the store which conatins the reducers 
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            comments: Comments,
        })
    );

    return store;
}