import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Field } from 'formik';
import PostAPIData from '../../../data/post_api_data';
import { CoolingCRUDWrapper } from './Cooling.style';
import { string } from 'yup';

const AddCooling = ({ onClose }) => {

    const initialCoolingState = {
        bruit: '',
        format: '',
        marque: '',
        matériaux: '',
        description: '',
        nom: '',
        published: false,
        socket: '',
        type: '',
        image: ''
    }

    const [Cooling, setCooling] = useState(initialCoolingState);
    const [submitted, setSubmitted] = useState(false);
    const endpoint = 'api/Cooling';

    const initialValues = {
        bruit: Cooling.bruit ?? '',
        format: Cooling.format ?? '',
        marque: Cooling.marque ?? '',
        matériaux: Cooling.matériaux ?? '',
        description: Cooling.description ?? '',
        nom: Cooling.nom ?? '',
        image: Cooling.image ?? '',
        published: Cooling.published ?? '',
        socket: Cooling.socket ?? '',
        type: Cooling.type ?? '',
    }

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCooling({ ...Cooling, [name]: value });
    }

    const LegalSchema = Yup.object().shape({
        nom: Yup.string()
            .required('Ce champ est requis !'),
        bruit: Yup.string()
            .required('Ce champ est requis !'),
        format: Yup.string()
            .required('Ce champ est requis !'),
        marque: Yup.string()
            .required('Ce champ est requis !'),
        matériaux: Yup.string()
            .required('Ce champ est requis !'),
        socket: Yup.string()
            .required('Ce champ est requis !'),
        type: Yup.string()
            .required('Ce champ est requis !'),
        published: Yup.string()
            .required('Ce champ est requis !'),
        description: Yup.string()
            .required('ce champ est requis !')
    })

    console.log(initialValues);

    return (
        <CoolingCRUDWrapper>
            <Formik
                initialValues={initialValues}
                validationSchema={LegalSchema}
                onSubmit={async values => {
                    const endpoint = 'Cooling'
                    console.log(JSON.stringify(values), values)

                    const response = await PostAPIData(endpoint, values).then(
                        res => {
                            setSubmitted(true);
                            console.log(res)
                        }
                    )
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
                        <Field name="image" type='text' placeholder="Renseignez l'image"></Field>
                        <div>{errors.image && touched.image}</div>

                        <label>Bruit</label>
                        <Field name="bruit" type="text" placeholder="Renseignez le niveau de bruit"></Field>

                        <label>Format</label>
                        <Field name="couleur" type="text" placeholder="Renseignez la couleur"></Field>
                        <div>{errors.couleur && touched.couleur}</div>

                        <label>Marque</label>
                        <Field name="facade_laterale" type="text" placeholder="Renseignez la façade latérale"></Field>
                        <div className="form-error">{errors.facade_laterale && touched.facade_laterale}</div>

                        <label>Matériaux</label>
                        <Field name="matériaux" type='text' placeholder="Renseignez le format"></Field>
                        <div></div>

                        <label>Type</label>
                        <Field name="ventilateur" type="text"></Field>
                        <div className="form--error">{errors.ventilateur && touched.ventilateur}</div>

                        <label>Description</label>
                        <Field name="description" type="text-area"></Field>
                        <div className="form--error"> {errors.description && touched.description}</div>

                        <label>Publier</label>
                        <Field type="checkbox" name="published"></Field>
                        <div className="form--error">{errors.published && touched.published}</div>

                        <button type="submit">Envoyer</button>
                    </form>
                )}
            </Formik>
        </CoolingCRUDWrapper>
    )
}

export default AddCooling
