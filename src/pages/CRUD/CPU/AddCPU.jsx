import React, { useState } from 'react';
import * as Yup from 'yup';
import { Field, Formik } from 'formik';
import PostAPIData from '../../../data/post_api_data';
import { CPUCRUDWrapper } from './CPU.style';

const AddCPU = ({ onClose }) => {

    const initialCPUState = {
        image: '',
        architecture: '',
        cache: '',
        chipset: '',
        chipset_graphique: '',
        frequence: '',
        frequence_boost: '',
        nb_coeur: 0,
        nb_threads: 0,
        description: '',
        nom: '',
        overclocking: false,
        socket: '',
        type: ''
    }

    const [CPU, setCPU] = useState(initialCPUState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCPU({ ...CPU, [name]: value });
    }

    const initialValues = {
        image: CPU.image ?? '',
        nom: CPU.nom ?? '',
        architecture: CPU.architecture ?? '',
        cache: CPU.cache ?? '',
        chipset: CPU.chipset ?? '',
        chipset_graphique: CPU.chipset_graphique ?? '',
        fréquence: CPU.frequence ?? '',
        nb_coeur: CPU.nb_coeur ?? '',
        nb_threads: CPU.nb_threads ?? '',
        description: CPU.description ?? '',
        overclocking: CPU.overclocking ?? '',
        socket: CPU.socket ?? '',
        type: CPU.type ?? ''
    }

    const LegalSchema = Yup.object().shape({
        image: Yup.string()
            .required('Ce champ est requis !'),
        nom: Yup.string()
            .required('Ce champ est requis !'),
        architecture: Yup.string()
            .required('Ce champ est requis !'),
        cache: Yup.string()
            .required('Ce champ est requis !'),
        chipset: Yup.string()
            .required('Ce champ est requis !'),
        chipset_graphique: Yup.string()
            .required('Ce champ est requis'),
        frequence: Yup.string()
            .required('Ce champ est requis !'),
        frequence_boost: Yup.string()
            .required('Ce champ est requis'),
        nb_coeur: Yup.number()
            .required('Ce champ est requis !'),
        nb_threads: Yup.number()
            .required('Ce champ est requis !'),
        description: Yup.string()
            .required('Ce champ est requis !'),
        overclocking: Yup.boolean()
            .required('Cette option est requise !'),
    })

    console.log(initialValues);
    

    return (
        <CPUCRUDWrapper>
            <Formik
                initialValues={initialValues}
                validationSchema={LegalSchema}
                onSubmit={async values => {
                    const endpoint = "CPU"
                    console.log(JSON.stringify(values), 'values')

                    const response = await PostAPIData(endpoint, values).then(
                        res => {
                            setSubmitted(true)
                            console.log(res)
                        }
                    )
                    console.log(response);
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

                        <label>Architecture</label>
                        <Field name="architecture" type="text" placeholder="Renseignez l'architecture"></Field>

                        <label>Cache</label>
                        <Field name="cache" type="text" placeholder="Renseignez le cache"></Field>
                        <div>{errors.couleur && touched.couleur}</div>

                        <label>Socket</label>
                        <Field name="socket" type="text" ></Field>
                        <div>{errors.socket && touched.socket}</div>

                        <label>Chipset</label>
                        <Field name="chipset" type="text" placeholder="Renseignez le chipset"></Field>
                        <div className="form-error">{errors.facade_laterale && touched.facade_laterale}</div>

                        <label>Chipset graphique</label>
                        <Field name="chipset_graphique" type='text' placeholder="Renseignez le chipset graphique"></Field>
                        <div className="form--error">{errors.matériaux && touched.matériaux}</div>

                        <label>Fréquence</label>
                        <Field name="frequence" type="text" placeholder="Renseignez la fréquence"></Field>
                        <div className="form--error">{errors.type && touched.type}</div>

                        <label>Fréquence Boost</label>
                        <Field name="frequence_boost" type="text" placeholder="Renseignez la fréquence boost"></Field>
                        <div className="form--error">{errors.frequence_boost && touched.frequence_boost}</div>

                        <label>Coeurs </label>
                        <Field name="nb_coeur" type="number"></Field>
                        <div className="form--error">{errors.description && touched.description}</div>

                        <label>Threads</label>
                        <Field name="nb_threads" type="number"></Field>
                        <div className="form--error">{errors.description && touched.description}</div>

                        <label>Description</label>
                        <Field type="text" name='description'></Field>
                        <div>{errors.description && touched.description} </div>

                        <label>Type</label>
                        <Field name="type" type="text"></Field>
                        <div> {errors.type && touched.type} </div>

                        <button type="submit">Envoyer</button>
                    </form>
                )}
            </Formik>
        </CPUCRUDWrapper>
    )
}

export default AddCPU
