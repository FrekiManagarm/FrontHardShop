import React, { useState } from 'react';
import * as Yup from 'yup'
import PostAPIData from '../../../data/post_api_data'
import { Field, Formik } from 'formik'
import { CaseCRUDWrapper } from '../Case/Case.style';

const AddPSU = ({ onClose }) => {

    const initialPSUState = {
        certif: '',
        format: '',
        image: '',
        marque: '',
        modulaire: false,
        nom: '',
        puissance: '',
        description: ''
    }

    const [PSU, setPSU] = useState(initialPSUState);
    const [submitted, setSubmitted] = useState(false);

    const initialValues = {
        certif: PSU.certif ?? '',
        format: PSU.format ?? '',
        image: PSU.image ?? '',
        marque: PSU.marque ?? '',
        modulaire: PSU.modulaire ?? '',
        nom: PSU.nom ?? '',
        puissance: PSU.puissance ?? '',
        description: PSU.description ?? ''
    }

    const LegalSchema = Yup.object().shape({
        certif: Yup.string()
            .required("Ce champ est requis !"),
        format: Yup.string()
            .required('Cette option est requise !'),
        image: Yup.string()
            .required('Cette option est requise !'),
        marque: Yup.string()
            .required('Ce champ est requis !'),
        modulaire: Yup.boolean()
            .required('Ce champ est requis !'),
        nom: Yup.string()
            .required('Ce champ est requis !'),
        puissance: Yup.string()
            .required('Ce champ est requis !'),
        description: Yup.string()
            .required('Ce champ est requis !')
    })

    console.log(initialValues);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPSU({ ...PSU, [name]: value })
    }

    return (
        <CaseCRUDWrapper>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={LegalSchema}
                        onSubmit={async (values) => {
                            console.log(values, 'values')
                            const endpoint = `PSU`;
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
                                <label>Certif</label>
                                <Field style={{ marginBottom: "10px" }} name="certif" type="text" placeholder="Renseignez le nom" className="first-input"></Field>
                                <div className="form--error">{errors.certif && touched.certif}</div>

                                <label>Format</label>
                                <Field style={{ marginBottom: "10px" }} name="format" type="text" placeholder="Renseignez l'image"></Field>
                                <div>{errors.format && touched.format}</div>

                                <label>Image</label>
                                <Field style={{ marginBottom: "10px" }} name="image" type="text" placeholder="Renseignez la couleur"></Field>
                                <div>{errors.image && touched.image}</div>

                                <label>Marque</label>
                                <Field style={{ marginBottom: "10px" }} name="marque" type="text" placeholder="Renseignez la façade latérale"></Field>
                                <div className="form-error">{errors.marque && touched.marque}</div>

                                <label>Modulaire</label>
                                <Field style={{ marginBottom: "10px" }} name="modulaire" type='checkbox' placeholder="Renseignez le format"></Field>
                                <div style={{ color: 'red'}}>{errors.modulaire && touched.modulaire}</div>

                                <label>Nom</label>
                                <Field style={{ marginBottom: "10px" }} name="nom" type="text"></Field>
                                <div className="form--error" style={{ color: "red" }}>{errors.nom && touched.nom}</div>

                                <label>Puissance</label>
                                <Field style={{ marginBottom: "10px" }} name="puissance" type="text"></Field>
                                <div className="form--error" style={{ color: "red" }}> {errors.puissance && touched.puissance}</div>

                                <label>Description</label>
                                <Field style={{ marginBottom: "10px" }} name="description" type="text-area" ></Field>
                                <div style={{ color: "red" }}>{errors.description && touched.description} </div>

                                <button type="submit">Envoyer</button>
                            </form>
                        )}
                    </Formik>
        </CaseCRUDWrapper>
    ) 
}

export default AddPSU
