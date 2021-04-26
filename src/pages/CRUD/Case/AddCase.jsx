import React, { useState } from 'react';
import * as Yup from 'yup';
import { Field, Formik } from 'formik';
import PostAPIData from '../../../data/post_api_data';
import { CaseCRUDWrapper } from './Case.style';

const AddCase = ({ onClose }) => {

    const initialCaseState = {
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

    const [Case, setCase] = useState(initialCaseState);
    const [submitted, setSubmitted] = useState(false);
    const [RGB, setRGB] = useState(false);
    const [alim, setAlim] = useState(false);

   const initialValues = {
        image: Case.image ?? '',
        RGB: Case.RGB ?? '',
        alim_inclus: Case.alim_inclus ?? '',
        couleur: Case.couleur ?? '',
        facade_laterale: Case.facade_laterale ?? '',
        description: Case.description ?? '',
        format: Case.format ?? '',
        nom: Case.nom ?? '',
        ventilateur: Case.ventilateur ?? '',
        published: Case.published ?? ''
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

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCase({ ...Case, [name]: value })
    }

    return (
        <CaseCRUDWrapper>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={LegalSchema}
                        onSubmit={async (values) => {
                            console.log(values, 'values')
                            const endpoint = `Boitier`;
                            console.log(JSON.stringify(values), 'values')

                            const response = await PostAPIData(endpoint, values).then(
                                setSubmitted(true)
                            ).catch(e => {
                                console.log(e)
                            })
                            console.log(response, 'response');
                            onClose()
                        }}
                    >
                        {({
                            errors,
                            touched,
                            handleSubmit
                        }) => (
                            <form onChange={handleInputChange} onSubmit={handleSubmit}>
                                <label>Nom</label>
                                <Field name="nom" type="text" placeholder="Renseignez le nom" className="first-input"></Field>
                                <div className="form--error">{errors.nom && touched.nom}</div>

                                <label>Image</label>
                                <Field name="image" placeholder="Renseignez l'image"></Field>
                                <div>{errors.image && touched.image}</div>

                                <label>Couleur</label>
                                <Field name="couleur" type="text" placeholder="Renseignez la couleur"></Field>
                                <div>{errors.couleur && touched.couleur}</div>

                                <label>Façade Latérale</label>
                                <Field name="facade_laterale" type="text" placeholder="Renseignez la façade latérale"></Field>
                                <div className="form-error">{errors.facade_laterale && touched.facade_laterale}</div>

                                <label>Format</label>
                                <Field name="format" type='text' placeholder="Renseignez le format"></Field>
                                <div></div>

                                <label>Ventilateur</label>
                                <Field name="ventilateur" type="text"></Field>
                                <div className="form--error">{errors.ventilateur && touched.ventilateur}</div>

                                <label>Description</label>
                                <Field name="description" type="text-area"></Field>
                                <div className="form--error"> {errors.description && touched.description}</div>

                                <label>Publier</label>
                                <Field type="checkbox" name="published"></Field>
                                <div className="form--error">{errors.published && touched.published}</div>

                                <label>RGB</label>
                                <Field name='RGB' type="checkbox"></Field>
                                <div className="form--error">{errors.RGB && touched.RGB}</div>

                                <button type="submit">Envoyer</button>
                            </form>
                        )}
                    </Formik>
        </CaseCRUDWrapper>
    ) 
}

export default AddCase
