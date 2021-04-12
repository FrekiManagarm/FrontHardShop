import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import { Store } from './Reducer/store';
import App from './App';

ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>
,document.getElementById('root'));
