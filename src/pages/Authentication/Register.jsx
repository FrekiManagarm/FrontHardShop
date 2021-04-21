import axios from 'axios';
import { AntInput } from '../../AntInputWithFormik';
import { useHistory } from 'react-router-dom';
import cookie from "js-cookie";
import * as Yup from 'yup';
import { Field, Formik } from 'formik';
import React, { useRef, useState, useEffect } from 'react';
import { Button, CustomInput, CustomLabel, RegisterWrapper, Title } from './Register.style';
import PostAPIData from '../../post_api_data';
import Store from '../../Reducer/store';


const Register = () => {

    

    const initialLoginState = {
        Name: '',
        email: '',
        password: '',
        password_confirmation: ''
    }

    const [Login, setLogin] = useState(initialLoginState);

    const initialValues = {
        Name: Login.Name ?? '',
        email: Login.email ?? '',
        password: Login.password ?? '',
        password_confirmation: Login.password_confirmation ?? ''
    }

    const handleChangeForm = (event) => {
        const { name, value } = event.target;
        setLogin({ ...Login, [name]: value });
    } 

    const history = useHistory();

    const LegalSchema = Yup.object().shape({
        Name: Yup.string()
            .min(2, 'Ce champs doit contenir plus de 2 caractères')
            .max(50, 'Ce champs doit contenir moins de 50 caractères')
            .required('Veuillez remplir ce champ !'),
        email: Yup.string()
            .min(2, 'Ce champs doit contenir plus de 2 caractères')
            .max(50, 'Ce champs doit contenir moins de 50 caractères')
            .required('Veuillez remplir ce champ !'),
        password: Yup.string()
            .min(5, 'Ce champs doit contenir plus de 5 caractères')
            .max(255, 'Ce champs doit contenir moins de 255 caractères')
            .required('Veuillez remplir ce champ !'),
        password_confirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Les champs ne correspondent pas !')
            .required('La confirmation du mot de passe est requise')
    })

    console.log(initialValues)
  


    return (
        <RegisterWrapper>
            <Title>Je m'enregistre</Title>
            <div className="other">
                <div className="another">
                    <br />
                    <Formik
                        initialValues={initialValues}
                        validationSchema={LegalSchema}
                        onSubmit={async (values) => {
                            console.log(values, 'values')
                            const endpoint = `api/register`;
                            console.log(JSON.stringify(values), 'values');


                            const response = await PostAPIData(endpoint, values).then(
                                res => {
                                    console.log(res)
                                    cookie.set("token", res?.access_token);
                                    cookie.set("user", res?.user)
                                    Store.dispatch({ type: "SET_LOGIN", payload: res?.user })
                                    history.push('/');
                                }
                            ).catch(e => console.log(e));
                            console.log(response, 'response');

                        }}
                    >
                        {({
                            errors,
                            touched,
                            handleSubmit,
                        }) => (
                            <form onChange={handleChangeForm} onSubmit={handleSubmit}>
                                <CustomLabel>Votre Nom</CustomLabel>
                                <Field name="Name"></Field>
                                <div className="form--error">{errors.Name && touched.Name}</div>

                                <CustomLabel>Email</CustomLabel>
                                <Field name="email"></Field>
                                <div className="form--error">{errors.email && touched.email}</div>

                                <CustomLabel>Mot de Passe</CustomLabel>
                                <Field name="password" type="password"></Field>
                                <div className="form--error">{errors.password && touched.password}</div>

                                <CustomLabel>Confirmation du mot de passe</CustomLabel>
                                <Field name="password_confirmation" type="password"></Field>
                                <div className="form--error">{errors.password_confirmation && touched.password_confirmation}</div>
                                <br />

                                <div>
                                    <button type="submit">S'Enregistrer</button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </RegisterWrapper>
    )
}

export default Register
