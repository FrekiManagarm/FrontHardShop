import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { appReducer } from './appReducer';
import { userReducer } from './userReducer';

export const Store = createStore(
    combineReducers({
        app: appReducer,
        user: userReducer,
    }),
    applyMiddleware(thunk)
);