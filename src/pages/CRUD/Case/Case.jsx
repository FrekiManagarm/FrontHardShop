import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import { UpdateCaseWrapper } from './Case.style';
import PostAPIData from '../../../data/post_api_data';

const UpdateCase = ({ state, onClose }) => {

    const initialCaseState = {
        id: null,
        image: '',
        RGB: false,
        alim_inclus: false,
        couleur: '',
        facade_laterale: '',
        description: '',
        format: '',
        nom: '',
        ventilateur: '',
        published: false
    }

    const history = useHistory();
    const [currentCase, setCurrentCase] = useState(initialCaseState);

    const { image, RGB, alim_inclus, couleur, facade_laterale, description, format, nom, ventilateur, published} = state;

    const initialValues = {
        
    }
    
    return (
        <UpdateCaseWrapper>

        </UpdateCaseWrapper>
    )
}

export default UpdateCase
