import React, { useState } from 'react';
import mbService from '../../../services/mbService';
import { MotherBoardCRUDWrapper } from './MotherBoard.style';

const AddMotherBoard = () => {

    const initialMBState = {
        id: null,
        image: '',
        chipset: '',
        constructeur: '',
        format: '',
        description: '',
        nom: '',
        proco_compatible: '',
        socket: ''
    }

    const [motherBoard, setMotherBoard] = useState(initialMBState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setMotherBoard({ ...motherBoard, [name]: value });
    }

    const saveMotherBoard = () => {
        let data = {
            image: motherBoard.image,
            chipset: motherBoard.chipset,
            constructeur: motherBoard.constructeur,
            format: motherBoard.format,
            description: motherBoard.description,
            nom: motherBoard.nom,
            proco_compatible: motherBoard.proco_compatible,
            socket: motherBoard.socket
        }

        mbService.create(data)
            .then(res => {
                setMotherBoard({
                    id: res.data.id,
                    image: res.data.image,
                    chipset: res.data.chipset,
                    constructeur: res.data.constructeur,
                    format: res.data.format,
                    description: res.data.description,
                    nom: res.data.nom,
                    proco_compatible: res.data.proco_compatible,
                    socket: res.data.socket
                })
                setSubmitted(true);
                console.log(res.data);
            })
            .catch(e => {
                console.log(e);
        });
    }

    const newMotherBoard = () => {
        setMotherBoard(initialMBState);
        setSubmitted(false);
    }

    return (
        <MotherBoardCRUDWrapper>
            {submitted ? (
                <div>
                    <h4>Les données ont été envoyées avec succès !</h4>
                    <button onClick={newMotherBoard}>Ajouter</button>
                </div>
            ) : (
                <div>
                    
                </div>
            )}
        </MotherBoardCRUDWrapper>
    )
}

export default AddMotherBoard;
