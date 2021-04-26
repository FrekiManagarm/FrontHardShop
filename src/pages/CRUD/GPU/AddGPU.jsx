import * as Yup from 'yup';
import PostAPIData from '../../../data/post_api_data';
import { Formik, Field } from 'formik';
import React, { useState } from 'react';
import { CaseCRUDWrapper } from '../Case/Case.style';

const AddGPU = ({ onClose }) => {

    const initialGPUState = {
        image: '',
        nom: '',
        frequence: '',
        frequence_boost: '',
        nb_coeurs: '',
        nb_ventilateur: 0,
        nb_video_output: 0,
        description: '',
    }

    const [GPU, setGPU] = useState(initialGPUState);

    const initialValues = {
        image: GPU.image ?? '',
        nom: GPU.nom ?? '',
        frequence: GPU.frequence ?? '',
        frequence_boost: GPU.frequence_boost ?? '',
        nb_coeurs: GPU.nb_coeurs ?? '',
        nb_ventilateur: GPU.ventilateur ?? '',
        nb_video_output: GPU.nb_video_output ?? '',
        description: GPU.description ?? '',
    }

    const LegalSchema = Yup.object().shape({
        image: Yup.string()
            .required("Ce champ est requis !"),
        nom: Yup.string()
            .required('Ce champ est requis !'),
        frequence: Yup.string()
            .required('Ce champ est requis'),
        frequence_boost: Yup.string()
            .required('Ce champ est requis !'),
        nb_coeurs: Yup.string()
            .required('Ce champ est requis !'),
        nb_ventilateur: Yup.number()
            .required('Ce champ est requis !'),
        nb_video_output: Yup.number()
            .required('Ce champ est requis !'),
        description: Yup.string()
            .required('Ce champ est requis !'),
    })

    console.log(initialValues);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setGPU({ ...GPU, [name]: value })
    }

    return (
        <CaseCRUDWrapper>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={LegalSchema}
                        onSubmit={async (values) => {
                            console.log(values, 'values')
                            const endpoint = `GPU`;
                            console.log(JSON.stringify(values), 'values')

                            const response = await PostAPIData(endpoint, values).then(
                                res => {
                                    console.log(res);
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

                                <label>Image</label>
                                <Field name="image" placeholder="Renseignez l'image"></Field>
                                <div>{errors.image && touched.image}</div>

                                <label>Frequence</label>
                                <Field name="frequence" type="text" placeholder="Renseignez la couleur"></Field>
                                <div>{errors.frequence && touched.frequence}</div>

                                <label>Fréquence Boost</label>
                                <Field name="frequence_boost" type="text" placeholder="Renseignez la façade latérale"></Field>
                                <div className="form-error">{errors.frequence_boost && touched.frequence_boost}</div>

                                <label>Coeurs </label>
                                <Field name="nb_coeurs" type='text' placeholder="Renseignez le format"></Field>
                                <div>{errors.nb_coeurs && touched.nb_coeurs}</div>

                                <label>Ventilateur</label>
                                <Field name="nb_ventilateur" type="number"></Field>
                                <div className="form--error">{errors.nb_ventilateur && touched.nb_ventilateur}</div>

                                <label>Video Ouput </label>
                                <Field name="nb_video_output" type="number"></Field>
                                <div className="form--error"> {errors.nb_video_output && touched.nb_video_output}</div>

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

export default AddGPU
