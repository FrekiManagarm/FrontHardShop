import React, { useState } from 'react';
import * as Yup from 'yup';
import { Field, Formik } from 'formik';
import PostAPIData from '../../../data/post_api_data';
import { CaseCRUDWrapper } from './Case.style';
import { Input } from 'antd';

const AddCase = () => {

    const initialCaseState = {
        
    }

    const [Case, setCase] = useState();
    const [submitted, setSubmitted] = useState(false);

   const initialValues = {
        image: '',
        RGB: false,
        alim_inclus: false,
        couleur: '',
        facade_laterale: '',
        description: '',
        format: '',
        nom: '',
        ventilateur: '',
        published: false
   }

    const LegalSchema = Yup.object().shape({
        image: Yup.string()
            .required("Ce champ est requis !"),
        RGB: Yup.boolean()
            .required('Cette option est requise !'),
        alim_inclus: Yup.boolean()
            .required('Cette option est requise !'),
        couleur: Yup.string()
            .required('Ce champ est requis !'),
        facade_laterale: Yup.string()
            .required('Ce champ est requis !'),
        description: Yup.string()
            .required('Ce champ est requis !'),
        format: Yup.string()
            .required('Ce champ est requis !'),
        nom: Yup.string()
            .required('Ce champ est requis !'),
        ventilateur: Yup.string()
            .required('Ce champ est requis !'),
    })

    console.log(initialValues);

    const newCase = () => {
        setCase(initialCaseState);
        setSubmitted(false);
    }

    return (
        <CaseCRUDWrapper>
            {submitted ? (
                <div>
                    <h4>Les données ont été envoyées avec succès !</h4>
                    <button onClick={newCase}>Ajouter</button>
                </div>
            ) : (
                <div>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={LegalSchema}
                        onSubmit={async (values) => {
                            console.log(values, 'values')
                            const endpoint = `/Boitier`;
                            console.log(JSON.stringify(values), 'values')

                            const response = await PostAPIData(endpoint, values).then(
                                setSubmitted(true)
                            ).catch(e => {
                                console.log(e)
                            })
                            console.log(response, 'response');
                        }}
                    >
                        {({
                            errors,
                            touched,
                            handleSubmit,
                            handleChange
                        }) => (
                            <form onChange={handleChange} onSubmit={handleSubmit}>
                                <label>Nom</label>
                                <Field component={Input} name="nom" type="text" placeholder="Renseignez le nom" className="first-input"></Field>
                                <div className="form--error">{errors.nom && touched.nom}</div>

                                <label>Image</label>
                                <Field></Field>
                                <div></div>

                                <label>Couleur</label>
                                <Field></Field>
                                <div></div>

                                <label>Façade Latérale</label>
                                <Field></Field>
                                <div></div>

                                <label>Format</label>
                                <Field></Field>
                                <div></div>

                                <label>Ventilateur</label>
                                <Field></Field>
                                <div></div>

                                <label>Description</label>
                                <Field></Field>
                                <div></div>

                                <label></label>
                                <Field></Field>
                                <div></div>
                            </form>
                        )}
                    </Formik>
                </div>
                
            )}
        </CaseCRUDWrapper>
    )
}

export default AddCase
