import React, { useState } from 'react';
import * as Yup from 'yup'
import PostAPIData from '../../../data/post_api_data';
import { Field, Formik } from 'formik'
import { CaseCRUDWrapper } from '../Case/Case.style';

const AddSSD = ({ onClose }) => {

    const initialSSDState = {
        capacité: '',
        connectique: '',
        format: '',
        image: '',
        interface: '',
        description: '',
        lecture: '',
        marque: '',
        nom: '',
        ecriture: ''
    }

    const [SSD, setSSD] = useState(initialSSDState);
    const [submitted, setSubmitted] = useState(false);

    const initialValues = {
        capacité: SSD.capacité ?? '',
        connectique: SSD.connectique ?? '',
        format: SSD.format ?? '',
        image: SSD.image ?? '',
        interface: SSD.interface ?? '',
        description: SSD.description ?? '',
        lecture: SSD.lecture ?? '',
        marque: SSD.marque ?? '',
        nom: SSD.nom ?? '',
        ecriture: SSD.ecriture ?? ''
    }

    const LegalSchema = Yup.object().shape({
        capacité: Yup.string()
            .required("Ce champ est requis !"),
        connectique: Yup.string()
            .required('Cette option est requise !'),
        format: Yup.string()
            .required('Cette option est requise !'),
        image: Yup.string()
            .required('Ce champ est requis !'),
        interface: Yup.string()
            .required('Ce champ est requis !'),
        description: Yup.string()
            .required('Ce champ est requis !'),
        lecture: Yup.string()
            .required('Ce champ est requis !'),
        marque: Yup.string()
            .required('Ce champ est requis !'),
        nom: Yup.string()
            .required('Ce champ est requis !'),
        ecriture: Yup.string()
            .required('Ce champ est requis !')
    })

    console.log(initialValues);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSSD({ ...SSD, [name]: value })
    }

    return (
        <CaseCRUDWrapper>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={LegalSchema}
                        onSubmit={async (values) => {
                            console.log(values, 'values')
                            const endpoint = `SSD`;
                            console.log(JSON.stringify(values), 'values')

                            const response = await PostAPIData(endpoint, values).then(
                                res => {
                                    console.log(res)
                                }
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

                                <label>Capacité</label>
                                <Field name="capacité" placeholder="Renseignez la capacité"></Field>
                                <div>{errors.capacité && touched.capacité}</div>

                                <label>Connectique</label>
                                <Field name="connectique" type="text" placeholder="Renseignez la connectique"></Field>
                                <div>{errors.connectique && touched.connectique}</div>

                                <label>Format</label>
                                <Field name="format" type="text" placeholder="Renseignez le format"></Field>
                                <div className="form-error">{errors.format && touched.format}</div>

                                <label>Image</label>
                                <Field name="image" type='text' placeholder="Renseignez l'image"></Field>
                                <div className="form--error">{errors.image && touched.image}</div>

                                <label>Interface</label>
                                <Field name="interface" type="text"></Field>
                                <div className="form--error">{errors.interface && touched.interface}</div>

                                <label>Lecture</label>
                                <Field name="lecture" type="text-area"></Field>
                                <div className="form--error"> {errors.lecture && touched.lecture}</div>

                                <label>Ecriture</label>
                                <Field type="text" name="ecriture"></Field>
                                <div className="form--error">{errors.écriture && touched.écriture}</div>

                                <label>Marque</label>
                                <Field name='marque' type="text"></Field>
                                <div className="form--error">{errors.marque && touched.marque}</div>

                                <label>Description</label>
                                <Field name="description" type="text" ></Field>
                                <div className="form--error">{errors.description && touched.description} </div>

                                <button type="submit">Envoyer</button>
                            </form>
                        )}
                    </Formik>
        </CaseCRUDWrapper>
    ) 
}

export default AddSSD

