import React, { useState } from 'react';
import { Formik } from 'formik'
import * as Yup from 'yup';
import { useHistory } from 'react-router';
import { CustomField, LoginPageWrapper, CustomLabel, Title, Button } from './Login.style';
import fetchData from '../../data/fetchData';
import Store from '../../Reducer/store';

const Login = () => {

    const initialLoginState = {
        email: '',
        password: ''
    }

    const history = useHistory();
    const [Login, setLogin] = useState(initialLoginState);

    const handleChangeForm = (event) => {
        const { name, value } = event.target;
        setLogin({ ...Login, [name]: value});
    }

    const initialValues = {
        email: Login.email ?? '',
        password: Login.password ?? ''
    }

    const LegalSchema = Yup.object().shape({
        email: Yup.string()
            .required('Votre email est requis pour vous connecter !'),
        password: Yup.string()
            .required('Votre mot de passe est requis pour vous connecter !')
    })

    console.log(initialValues);

    return (
        <LoginPageWrapper>
            <Title>Je me Connecte </Title>
            <div className="other">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={LegalSchema}
                        onSubmit={async (values) => {
                            console.log(values, 'values');
                            const endpoint = 'login';
                            console.log(JSON.stringify(values), 'values');

                            const response = await fetchData(endpoint, values).then(
                                res => {
                                    console.log(res)
                                    localStorage.setItem("token", res.access_token);
                                    Store.dispatch({ type: "SET_LOGIN", payload: res.user})
                                    history.push('/')
                                }
                            ).catch(e => console.log(e))
                            console.log(response, 'response');
                        }}
                    >
                        {({
                            errors,
                            touched,
                            handleSubmit,
                        }) => (
                            <form onChange={handleChangeForm} onSubmit={handleSubmit}>
                                <CustomLabel>Votre Email</CustomLabel>
                                <CustomField name="email"></CustomField>
                                <div className="form--error">{errors.email && touched.email}</div>

                                <CustomLabel>Votre mot de passe</CustomLabel>
                                <CustomField name="password" type="password"></CustomField>
                                <div className="form--error">{errors.password && touched.password}</div>
                                <br />

                                <div>
                                    <Button type="submit">Connexion</Button>
                                </div>
                            </form>
                        )}
                    </Formik>
            </div>
        </LoginPageWrapper>
    )
}

export default Login
