import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { Field, Formik } from 'formik';
import React, { useState } from 'react';
import { Button, CustomField,  CustomInput, CustomLabel, RegisterWrapper, Title } from './Register.style';
import Store from '../../Reducer/store';
import fetchData from '../../data/fetchData';


const Register = () => {

    const initialRegisterState = {
        Name: '',
        email: '',
        password: '',
        password_confirmation: ''
    }

    const [Register, setRegister] = useState(initialRegisterState);

    const initialValues = {
        Name: Register.Name ?? '',
        email: Register.email ?? '',
        password: Register.password ?? '',
        password_confirmation: Register.password_confirmation ?? ''
    }

    const handleChangeForm = (event) => {
        const { name, value } = event.target;
        setRegister({ ...Register, [name]: value });
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
                            const endpoint = 'api/register';
                            console.log(JSON.stringify(values), 'values');


                            const response = await fetchData(endpoint, values).then(
                                res => {
                                    console.log(res)
                                    localStorage.setItem("token", res.access_token);
                                    Store.dispatch({ type: "SET_LOGIN", payload: res?.user })
                                    history.push('/')
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
                                <CustomField name="Name" type="text" className="field"></CustomField>
                                <div className="form--error">{errors.Name && touched.Name}</div>

                                <CustomLabel>Email</CustomLabel>
                                <CustomField name="email" type="text" className="field"></CustomField>
                                <div className="form--error">{errors.email && touched.email}</div>

                                <CustomLabel>Mot de Passe</CustomLabel>
                                <CustomField name="password" type="password" className="field"></CustomField>
                                <div className="form--error">{errors.password && touched.password}</div>

                                <CustomLabel>Confirmation du mot de passe</CustomLabel>
                                <CustomField name="password_confirmation" type="password" className="label"></CustomField>
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
