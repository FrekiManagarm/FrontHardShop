import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import cookie from "js-cookie"
import Store from './Reducer/store';
import App from './App';
import jwt from 'jsonwebtoken'
import axios from 'axios';

const jwt_secret = 'D1uVJqc94fBMBWRJzf8gRFQr5E8cxHY91R7l0Mg0AIyNS3XLaId3S7bsUDou6Sbe';

let token = cookie.get("token")
if (token) {
    jwt.verify(token, jwt_secret, (err, decoded) => {
        if (err) {
            cookie.remove("token")
            token = null
        } else {
            if (decoded.iss !== "http://localhost:8000/api/login") {
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
    axios.get(`http://localhost:8000/api/me?token=${token}`).then(res => {
        Store.dispatch({ type: "SET_LOGIN", payload: res.data })
        render();
    })
} else {
    render();
}
