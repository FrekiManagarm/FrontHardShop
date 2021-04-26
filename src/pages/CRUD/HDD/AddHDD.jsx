import React, { useState } from 'react';
import * as Yup from 'yup';
import PostAPIData from '../../../data/post_api_data';
import { Formik, Field } from 'formik';
import { CaseCRUDWrapper } from '../Case/Case.style';

const AddHDD = ({ onClose }) => {

    const initialHDDState = {
        image: '',
        RPM: 0,
        capacité: '',
        format: "",
        interface: "",
        description: "",
        marque: "",
        mémoire_cache: "",
        nom: "",
        transfert: ""
    }

    const [HDD, setHDD] = useState(initialHDDState);
    const [submitted, setSubmitted] = useState(false);

    const initialValues = {
        image: HDD.image ?? '',
        RPM: HDD.RPM ?? '',
        capacité: HDD.capacité ?? '',
        format: HDD.format ?? '',
        interface: HDD.interface ?? '',
        description: HDD.description ?? '',
        marque: HDD.marque ?? '',
        mémoire_cache: HDD.mémoire_cache ?? '',
        nom: HDD.nom ?? '',
        transfert: HDD.transfert ?? ''
    }

    const LegalSchema = Yup.object().shape({
        image: Yup.string()
            .required("Ce champ est requis !"),
        RPM: Yup.number()
            .required('Ce champ est requis !'),
        capacité: Yup.string()
            .required('Ce champ est requis !'),
        format: Yup.string()
            .required('Ce champ est requis !'),
        interface: Yup.string()
            .required('Ce champ est requis !'),
        description: Yup.string()
            .required('Ce champ est requis !'),
        marque: Yup.string()
            .required('Ce champ est requis !'),
        mémoire_cache: Yup.string()
            .required('Ce champ est requis !'),
        nom: Yup.string()
            .required('Ce champ est requis !'),
        transfert: Yup.string()
            .required('Ce champ est requis !')
    })

    console.log(initialValues);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setHDD({ ...HDD, [name]: value })
    }

    return (
        <CaseCRUDWrapper>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={LegalSchema}
                        onSubmit={async (values) => {
                            console.log(values, 'values')
                            const endpoint = `HDD`;
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
                                <Field name="nom" type="text" placeholder="Renseignez le nom"></Field>
                                <div>{errors.nom && touched.nom}</div>

                                <label>Image</label>
                                <Field name="image" type="text" placeholder="Renseignez l'image" className="first-input"></Field>
                                <div className="form--error">{errors.image && touched.image}</div>

                                <label>RPM</label>
                                <Field name="RPM" type="number" placeholder="Renseignez les RPM"></Field>
                                <div>{errors.RPM && touched.RPM}</div>

                                <label>Capacité</label>
                                <Field name="capacité" type="text" placeholder="Renseignez la capacité"></Field>
                                <div>{errors.capacité && touched.capacité}</div>

                                <label>Format</label>
                                <Field name="format" type="text" placeholder="Renseignez le format"></Field>
                                <div className="form-error">{errors.format && touched.format}</div>

                                <label>Interface</label>
                                <Field name="interface" type='text' placeholder="Renseignez l'interface"></Field>
                                <div></div>

                                <label>Marque</label>
                                <Field name="marque" type="text" placeholder="Renseignez la marque"></Field>
                                <div className="form--error">{errors.ventilateur && touched.ventilateur}</div>

                                <label>Mémoire Cache</label>
                                <Field name="mémoire_cache" type="text-area"></Field>
                                <div className="form--error"> {errors.description && touched.description}</div>

                                <label>Transfert</label>
                                <Field type="text" name="transfert"></Field>
                                <div className="form--error">{errors.transfert && touched.transfert}</div>

                                <label>Description</label>
                                <Field name='description' type="text-area"></Field>
                                <div className="form--error">{errors.description && touched.description}</div>

                                <button type="submit">Envoyer</button>
                            </form>
                        )}
                    </Formik>
        </CaseCRUDWrapper>
    ) 
}

export default AddHDD