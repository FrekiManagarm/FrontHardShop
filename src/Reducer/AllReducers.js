import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import { reducer } from '../pages/Configurator/rootSlice';

const AllReducers = combineReducers({
    auth: AuthReducer,
    config: reducer
})

export default AllReducers;