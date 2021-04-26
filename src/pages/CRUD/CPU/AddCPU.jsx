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

    const newCPU = () => {
        setCPU(initialCPUState);
        setSubmitted(false);
    }
    

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

            </Formik>
        </CPUCRUDWrapper>
    )
}

export default AddCPU
