import React from 'react'
import { LoginPageWrapper } from './Login.style'

const Login = () => {
    return (
        <LoginPageWrapper>
            <div className="other">
                <div className="another">
                    <form className="the-form">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Renseignez votre email" className="first-input" />
                        <label>Mot de passe</label>
                        <input type="password" name="password" placeholder="Renseignez votre mot de passe" className="first-input" 
                         />
                    </form>
                </div>
            </div>
        </LoginPageWrapper>
    )
}

export default Login
