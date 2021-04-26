import React, { useState } from 'react';
import * as Yup from 'yup'
import PostAPIData from '../../../data/post_api_data'
import { Field, Formik } from 'formik'
import { CaseCRUDWrapper } from '../Case/Case.style';

const AddRAM = ({ onClose }) => {

    const initialRAMState = {
        capacité: "",
        fréquence: "",
        image: "",
        interface: "",
        latence: "",
        description: "",
        marque: "",
        nom: "",
        quantité: ""
    }

    const [RAM, setRAM] = useState(initialRAMState);
    const [submitted, setSubmitted] = useState(false);

    const initialValues = {
        capacité: RAM.capacité ?? '',
        fréquence: RAM.fréquence ?? '',
        image: RAM.image ?? '',
        interface: RAM.interface ?? '' ,
        latence: RAM.latence ?? '' ,
        description: RAM.description ?? '' ,
        marque: RAM.marque ?? '',
        nom: RAM.nom ?? '',
        quantité: RAM.quantité ?? '',
    }

    const LegalSchema = Yup.object().shape({
        capacité: Yup.string()
            .required("Ce champ est requis !"),
        fréquence: Yup.string()
            .required('Cette option est requise !'),
        image: Yup.string()
            .required('Cette option est requise !'),
        interface: Yup.string()
            .required('Ce champ est requis !'),
        latence: Yup.string()
            .required('Ce champ est requis !'),
        description: Yup.string()
            .required('Ce champ est requis !'),
        marque: Yup.string()
            .required('Ce champ est requis !'),
        nom: Yup.string()
            .required('Ce champ est requis !'),
        quantité: Yup.string()
            .required('Ce champ est requis !'),
    })

    console.log(initialValues);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setRAM({ ...RAM, [name]: value })
    }

    return (
        <CaseCRUDWrapper>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={LegalSchema}
                        onSubmit={async (values) => {
                            console.log(values, 'values')
                            const endpoint = `RAM`;
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
                                <label>Capacité</label>
                                <Field name="capacité" type="text" placeholder="Renseignez la capcité" className="first-input"></Field>
                                <div className="form--error">{errors.capacité && touched.capacité}</div>

                                <label>Fréquence</label>
                                <Field name="fréquence" placeholder="Renseignez la fréquence"></Field>
                                <div>{errors.fréquence && touched.fréquence}</div>

                                <label>Image</label>
                                <Field name="image" type="text" placeholder="Renseignez l'image"></Field>
                                <div className="form--error">{errors.image && touched.image}</div>

                                <label>Interface</label>
                                <Field name="interface" type="text" placeholder="Renseignez l'interface"></Field>
                                <div className="form-error">{errors.interface && touched.interface}</div>

                                <label>Latence</label>
                                <Field name="latence" type='text' placeholder="Renseignez le format"></Field>
                                <div className="form--error">{errors.latence && touched.latence}</div>

                                <label>Marque</label>
                                <Field name="marque" type="text"></Field>
                                <div className="form--error">{errors.marque && touched.marque}</div>

                                <label>Nom</label>
                                <Field name="nom" type="text"></Field>
                                <div className="form--error"> {errors.nom && touched.nom}</div>

                                <label>Quantité</label>
                                <Field type="text" name="quantité"></Field>
                                <div className="form--error">{errors.quantité && touched.quantité}</div>

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

export default AddRAM

