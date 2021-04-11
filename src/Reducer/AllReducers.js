import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import { rootSlice } from '../pages/Configurator/rootSlice';

const AllReducers = combineReducers({
    auth: AuthReducer,
    config: rootSlice
})

export default AllReducers;