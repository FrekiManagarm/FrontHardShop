import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
import './tailwind.output.css';

ReactDOM.render(
    <Provider store={}>
        <App />
    </Provider>
    ,
    document.getElementById('root'));
