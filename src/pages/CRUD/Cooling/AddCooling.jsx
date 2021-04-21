import React, { useState } from 'react';
import coolingService from '../../../services/coolingService';
import { CoolingCRUDWrapper } from './Cooling.style';

const AddCooling = () => {

    const initialCoolingState = {
        id: null,
        bruit: '',
        format: '',
        marque: '',
        matériaux: '',
        description: '',
        nom: '',
        published: false,
        socket: '',
        type: '',
        image: ''
    }

    const [Cooling, setCooling] = useState(initialCoolingState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCooling({ ...Cooling, [name]: value });
    }

    const saveCooling = () => {
        let data = {
            bruit: Cooling.bruit,
            format: Cooling.format,
            marque: Cooling.marque,
            matériaux: Cooling.matériaux,
            description: Cooling.description,
            nom: Cooling.nom,
            socket: Cooling.socket,
            type: Cooling.type,
            image: Cooling.image
        }
        
       coolingService.create(data)
            .then(res => {
                setCooling({
                    id: res.data.id,
                    bruit: res.data.bruit,
                    format: res.data.format,
                    marque: res.data.marque
                })
            })

    }

    return (
        <CoolingCRUDWrapper>
            
        </CoolingCRUDWrapper>
    )
}

export default AddCooling
