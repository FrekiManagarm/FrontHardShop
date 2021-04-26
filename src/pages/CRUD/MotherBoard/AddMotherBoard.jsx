import React, { useState } from 'react';
import * as Yup from 'yup'
import PostAPIData from '../../../data/post_api_data';
import { Field, Formik } from 'formik'
import { CaseCRUDWrapper } from '../Case/Case.style';

const AddMotherBoard = ({ onClose }) => {

    const initialMBState = {
        image: '',
        chipset: '',
        constructeur: '',
        format: '',
        fréquence_mémoire: '',
        description: '',
        nom: '',
        proco_compatible: '',
        socket: ''
    }

    const [MB, setMB] = useState(initialMBState);
    const [submitted, setSubmitted] = useState(false);

    const initialValues = {
        image: MB.image ?? '',
        chipset: MB.chipset ?? '',
        constructeur: MB.constructeur ?? '',
        format: MB.format ?? '',
        fréquence_mémoire: MB.fréquence_mémoire ?? '',
        description: MB.description ?? '',
        nom: MB.nom ?? '',
        proco_compatible: MB.proco_compatible ?? '',
        socket: MB.socket ?? '',
    }

    const LegalSchema = Yup.object().shape({
        image: Yup.string()
            .required("Ce champ est requis !"),
        chipset: Yup.string()
            .required('Ce champ est requis !'),
        constructeur: Yup.string()
            .required('Ce champ est requis !'),
        format: Yup.string()
            .required('Ce champ est requis !'),
        fréquence_mémoire: Yup.string()
            .required('Ce champ est requis !'),
        description: Yup.string()
            .required('Ce champ est requis !'),
        nom: Yup.string()
            .required('Ce champ est requis !'),
        proco_compatible: Yup.string()
            .required('Ce champ est requis !'),
        socket: Yup.string()
            .required('Ce champ est requis !'),
    })

    console.log(initialValues);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMB({ ...MB, [name]: value })
    }

    return (
        <CaseCRUDWrapper>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={LegalSchema}
                        onSubmit={async (values) => {
                            console.log(values, 'values')
                            const endpoint = `CarteMere`;
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
                                <label>Image</label>
                                <Field name="image" type="text" placeholder="Renseignez l'image" className="first-input"></Field>
                                <div className="form--error">{errors.image && touched.image}</div>

                                <label>Chipset</label>
                                <Field name="chipset" placeholder="Renseignez le chipset"></Field>
                                <div>{errors.chipset && touched.chipset}</div>

                                <label>Constructeur</label>
                                <Field name="constructeur" type="text" placeholder="Renseignez le constructeur"></Field>
                                <div>{errors.constructeur && touched.constructeur}</div>

                                <label>Format</label>
                                <Field name="format" type="text" placeholder="Renseignez le format"></Field>
                                <div>{errors.format && touched.format}</div>

                                <label>Fréquence Mémoire</label>
                                <Field name="fréquence_mémoire" type='text' placeholder="Renseignez la fréquence de la mémoire"></Field>
                                <div>{errors.format && touched.format}</div>

                                <label>Description</label>
                                <Field name="description" type="text"></Field>
                                <div className="form--error">{errors.description && touched.description}</div>

                                <label>Nom</label>
                                <Field name="nom" type="text"></Field>
                                <div className="form--error"> {errors.nom && touched.nom}</div>

                                <label>Proco Compa</label>
                                <Field type="text" name="proco_compatible"></Field>
                                <div className="form--error">{errors.proco_compatible && touched.proco_compatible}</div>

                                <label>Socket</label>
                                <Field name='socket' type="text"></Field>
                                <div className="form--error">{errors.socket && touched.socket}</div>

                                <button type="submit">Envoyer</button>
                            </form>
                        )}
                    </Formik>
        </CaseCRUDWrapper>
    ) 
}

export default AddMotherBoard
