import axios from 'axios';
import { useHistory } from 'react-router-dom';
import cookie from "js-cookie";
import React, { useState } from 'react';
import { Button, CustomInput, CustomLabel, Field, RegisterWrapper, Title } from './Register.style';

const Register = () => {

    const initialLoginState = {
        Name: '',
        email: '',
        password: '',
        password_confirmation: '',
        errors: {}
    }

    const history = useHistory();
    const [Login, setLogin] = useState(initialLoginState)

    const handleForm = (e) => {
        e.preventDefault();
        const data = { Name, email, password, password_confirmation }

        axios.post('http://localhost:8000/api/auth/register', data)
        .then(
            res => {
                cookie.set("token", res.data.access_token);
                cookie.set("user", res.data.user)
                history.push('/');
            }
        ).catch(e => setErrors(e.response.data.errors))
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setLogin({ ...Login, [name]: value });
    }
  


    return (
        <RegisterWrapper>
            <Title>Je m'enregistre</Title>
            <div className="other">
                <div className="another">
                    <form className="the-form" onSubmit={handleForm}>
                        <Field>
                            <CustomLabel>Votre Nom</CustomLabel>
                            <CustomInput type="text" name="Name" placeholder="Renseignez votre nom" className="first-input" onChange={handleInputChange} value={Login.Name} />
                        </Field>
                        <Field>
                            <CustomLabel>Email</CustomLabel>
                            <CustomInput type="email" name="email" placeholder="Renseignez votre email" className="first-input" onChange={handleInputChange} value={Login.email} />
                        </Field>
                        <Field>
                            <CustomLabel>Mot de passe</CustomLabel>
                            <CustomInput type="password" name="password" placeholder="Renseignez votre mot de passe" className="first-input" onChange={handleInputChange} />
                        </Field>
                        <Field>
                            <CustomLabel>Confirmez votre mot mot de passe</CustomLabel>
                            <CustomInput type="password" name="password_confirmation" placeholder="Confirmez votre mot de passe" className="first-input" onChange={handleInputChange} />
                        </Field>
                        <Button type="submit">S'enregistrer</Button>
                    </form>
                </div>
            </div>
        </RegisterWrapper>
    )
}

export default Register
