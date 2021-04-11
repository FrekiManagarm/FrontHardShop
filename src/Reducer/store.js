import { createStore } from '@reduxjs/toolkit';
import AllReducers from './AllReducers';

const initialStates = {
    auth: {
        loggedIn: false,
        user: {}
    }
}

const Store = createStore(
    AllReducers,
    initialStates,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default Store;