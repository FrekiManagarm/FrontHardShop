import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import cookie from "js-cookie"
import Store from './Reducer/store';
import App from './App';
import jwt from 'jsonwebtoken'
import axios from 'axios';

const jwt_secret = 'rAoBwZnusXA2C28PEIQRsS2t2JPTiBt6e1ioxqpGZs7xRacQ7grAvclhtjnfC0Ef';

let token = cookie.get("token")
if (token) {
    jwt.verify(token, jwt_secret, (err, decoded) => {
        if (err) {
            cookie.remove("token")
            token = null
        } else {
            if (decoded.iss !== "http://localhost:8000/api/auth/login") {
                cookie.remove("token")
                token = null
            }
        }
    })
}

const render = () => {
    ReactDOM.render(
        <Provider store={Store}>
            <App />
        </Provider>,
        document.getElementById("root")
    )
}

if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios.post("http://localhost:8000/api/auth/user-profile").then(res => {
        Store.dispatch({ type: "SET_LOGIN", payload: res.data })
        render();
    })
} else {
    render();
}
