import axios from 'axios';
import { useHistory } from 'react-router-dom';
import cookie from "js-cookie";
import React, { useState } from 'react';
import { Button, CustomInput, CustomLabel, Field, RegisterWrapper, Title } from './Register.style';

const Register = () => {


    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Name, setName] = useState("");
    const [password_confirmation, setPassword_confirmation] = useState("");
    const [errors, setErrors] = useState({});

    const handleForm = (e) => {
        e.preventDefault();
        const data = { Name, email, password, password_confirmation }

        axios.post('', data)
        .then(
            res => {
                cookie.set("token", res.data.access_token);
                cookie.set("user", res.data.user)
                history.push('/');
            }
        ).catch(e => setErrors(e.response.data.errors))
    }

    const handleName = e => {
        e.preventDefault();
        setName({[e.target.name]: e.target.value});
    }

    const handleEmail = e => {
        e.preventDefault();
        setEmail({[e.target.name]: e.target.value});
    }

    const handlePassword = e => {
        e.preventDefault();
        setPassword({[e.target.name]: e.target.value});
    }

    const handleConfirmPassword = e => {
        e.preventDefault();
        setPassword_confirmation({[e.target.name]: e.target.value});
    }
  


    return (
        <RegisterWrapper>
            <Title>Je m'enregistre</Title>
            <div className="other">
                <div className="another">
                    <form className="the-form" onSubmit={handleForm}>
                        <Field>
                            <CustomLabel>Votre Nom</CustomLabel>
                            <CustomInput type="text" name="name" placeholder="Renseignez votre nom" className="first-input" onChange={handleName} />
                        </Field>
                        <Field>
                            <CustomLabel>Email</CustomLabel>
                            <CustomInput type="email" name="email" placeholder="Renseignez votre email" className="first-input" onChange={handleEmail} />
                        </Field>
                        <Field>
                            <CustomLabel>Mot de passe</CustomLabel>
                            <CustomInput type="password" name="password" placeholder="Renseignez votre mot de passe" className="first-input" onChange={handlePassword} />
                        </Field>
                        <Field>
                            <CustomLabel>Confirmez votre mot mot de passe</CustomLabel>
                            <CustomInput type="password" name="password_confirmation" placeholder="Confirmez votre mot de passe" className="first-input" onChange={handleConfirmPassword} />
                        </Field>
                        <Button type="submit">S'enregistrer</Button>
                    </form>
                </div>
            </div>
        </RegisterWrapper>
    )
}

export default Register
