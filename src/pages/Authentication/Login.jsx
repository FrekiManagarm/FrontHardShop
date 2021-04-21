import axios from 'axios';
import React, { useState } from 'react';
import cookie from 'js-cookie';
import { useHistory } from 'react-router';
import { LoginPageWrapper } from './Login.style';

const Login = () => {

    const initialLoginState = {

    }

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleForm = (e) => {
        e.preventDefault();
        const data = { email, password }
        axios.post('http://loclahost:8000/api/login', data).then(
            res => {
                cookie.set("token", res.data.access_token);
                
            }
        )
        history.push('/');
    }

    const handleInput = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setEmail({[name]: value});
        setPassword({[name]: value});
        setErrors({[name]: value});
    }

    return (
        <LoginPageWrapper>
            <div className="other">
                <div className="another">
                    <form className="the-form" onSubmit={handleForm}> 
                        <div>
                            <label>Email</label>
                            <input type="email" name="email" placeholder="Renseignez votre email" className="first-input" onChange={handleInput()} />
                        </div>
                        <div style={{ marginTop: "1rem" }}>
                            <label>Mot de passe</label>
                            <input type="password" name="password" placeholder="Renseignez votre mot de passe" className="first-input" onChange={handleInput()} />
                        </div>
                        {errors ? (
                            <p style={{ color: "red", marginTop: "10px" }}>{errors}</p>
                        ) : (
                            ""
                        )}
                        <button type="submit">Se connecter</button>
                    </form>
                </div>
            </div>
        </LoginPageWrapper>
    )
}

export default Login
