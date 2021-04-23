import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import Store from './Reducer/store';
import App from './App';
import fetchUser from './data/fetchUser';

let token = localStorage.getItem("token")

const render = () => {
    ReactDOM.render(
        <Provider store={Store}>
            <App />
        </Provider>,
        document.getElementById("root")
    )
}

if (token) {
    const endpoint = 'api/me';
    fetchUser(endpoint, token).then(
        res => {
            console.log(res)
            Store.dispatch({ type: "SET_LOGIN", payload: res })
        }
    ).catch(e => console.log(e, 'event'))
    render();
} else {
    render();
}
