import { configureStore } from '@reduxjs/toolkit';
import { reducer } from '../pages/Configurator/rootSlice';

export const store = configureStore({
    reducer
});