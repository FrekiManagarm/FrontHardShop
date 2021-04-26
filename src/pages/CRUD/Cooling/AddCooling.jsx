import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Field } from 'formik';
import PostAPIData from '../../../data/post_api_data';
import { CoolingCRUDWrapper } from './Cooling.style';

const AddCooling = ({ onClose }) => {

    const initialCoolingState = {
        bruit: '',
        format: '',
        marque: '',
        matériaux: '',
        description: '',
        nom: '',
        socket: '',
        type: '',
        image: ''
    }

    const [Cooling, setCooling] = useState(initialCoolingState);
    const [submitted, setSubmitted] = useState(false);

    const initialValues = {
        bruit: Cooling.bruit ?? '',
        format: Cooling.format ?? '',
        marque: Cooling.marque ?? '',
        socket: Cooling.socket ?? '',
        matériaux: Cooling.matériaux ?? '',
        description: Cooling.description ?? '',
        nom: Cooling.nom ?? '',
        image: Cooling.image ?? '',
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
        socket: Yup.string()
            .required('Ce champ est requis !'),
        matériaux: Yup.string()
            .required('Ce champ est requis !'),
        image: Yup.string()
            .required('Ce champ est requis !'),
        socket: Yup.string()
            .required('Ce champ est requis !'),
        type: Yup.string()
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
                        <div>{errors.bruit && touched.bruit} </div>

                        <label>Format</label>
                        <Field name="format" type="text" placeholder="Renseignez la couleur"></Field>
                        <div>{errors.format && touched.format}</div>

                        <label>Marque</label>
                        <Field name="marque" type="text" placeholder="Renseignez la façade latérale"></Field>
                        <div className="form-error">{errors.marque && touched.marque}</div>

                        <label>Matériaux</label>
                        <Field name="matériaux" type='text' placeholder="Renseignez le format"></Field>
                        <div className="form--error">{errors.matériaux && touched.matériaux}</div>

                        <label>Socket</label>
                        <Field type="text" name="socket" ></Field>

                        <label>Type</label>
                        <Field name="type" type="text"></Field>
                        <div className="form--error">{errors.type && touched.type}</div>

                        <label>Description</label>
                        <Field name="description" type="text-area"></Field>
                        <div className="form--error">{errors.description && touched.description}</div>

                        <button type="submit">Envoyer</button>
                    </form>
                )}
            </Formik>
        </CoolingCRUDWrapper>
    )
}

export default AddCooling
