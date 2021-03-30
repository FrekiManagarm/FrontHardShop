import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { LoginPageWrapper } from './Login.style'

const Login = () => {


    const history = useHistory();
    const [login, setLogin] = useState({
        email: '',
        password: '',
        errors: {}
    })

    const handleForm = (e) => {
        e.preventDefault();
        history.push('/');
    }

    const handleInput = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setLogin({[name]: value})
    }

    return (
        <LoginPageWrapper>
            <div className="other">
                <div className="another">
                    <form className="the-form" onSubmit={handleForm}> 
                        <div>
                            <label>Email</label>
                            <input type="email" name="email" placeholder="Renseignez votre email" className="first-input" onChange={handleInput} />
                        </div>
                        <div style={{ marginTop: "1rem" }}>
                            <label>Mot de passe</label>
                            <input type="password" name="password" placeholder="Renseignez votre mot de passe" className="first-input" onChange={handleInput} />
                        </div>

                    </form>
                </div>
            </div>
        </LoginPageWrapper>
    )
}

export default Login
