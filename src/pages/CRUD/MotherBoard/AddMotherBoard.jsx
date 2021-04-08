import React, { useState } from 'react';
import mbService from '../../../services/mbService';
import { Container, CustomInput, CustomLabel, MotherBoardCRUDWrapper } from './MotherBoard.style';

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
                    <form method="POST">
                        <Container className="form-group">
                            <CustomLabel htmlFor="nom">Nom</CustomLabel>
                            <CustomInput
                                type="text"
                                className="form-control"
                                id="nom"
                                required
                                value={motherBoard.nom}
                                onChange={handleInputChange}
                                name="nom"
                            />
                        </Container>

                        <Container className="form-group">
                            <CustomLabel htmlFor="image">Image</CustomLabel>
                            <CustomInput
                                type="text"
                                className="form-control"
                                id="image"
                                required
                                value={motherBoard.image}
                                onChange={handleInputChange}
                                name="image"
                            />
                        </Container>

                        <Container className="form-group">
                            <CustomLabel htmlFor="chipset">Chipset</CustomLabel>
                            <CustomInput 
                                type="text"
                                className="form-control"
                                id="chipset"
                                required
                                value={motherBoard.chipset}
                                onChange={handleInputChange}
                                name="chipset"
                            />
                        </Container>

                        <Container className="form-group">
                            <CustomLabel htmlFor="constructeur">Constructeur</CustomLabel>
                            <CustomInput
                                type="text"
                                className="form-control"
                                id="constructeur"
                                required
                                value={motherBoard.constructeur}
                                onChange={handleInputChange}
                                name="constructeur"
                            />
                        </Container>

                        <Container className="form-group">
                            <CustomLabel htmlFor="format">Format</CustomLabel>
                            <CustomInput 
                                type="text"
                                className="form-control"
                                id="format"
                                required
                                value={motherBoard.format}
                                onChange={handleInputChange}
                                name="format"
                            />
                        </Container>

                        <Container className="form-group">
                            <CustomLabel htmlFor="proco_compatible">Processeur Compatible</CustomLabel>
                            <CustomInput 
                                type="text"
                                className="form-control"
                                id="proco_compatible"
                                required
                                value={motherBoard.proco_compatible}
                                onChange={handleInputChange}
                                name="proco_compatible"
                            />
                        </Container>

                        <Container className="form-group">
                            <CustomLabel htmlFor="socket">Socket</CustomLabel>
                            <CustomInput 
                                type="text"
                                className="form-control"
                                id="socket"
                                value={motherBoard.socket}
                                onChange={handleInputChange}
                                name="socket"
                            />
                        </Container>

                        <Container className="form-group">
                            <CustomLabel htmlFor="description">Description</CustomLabel>
                            <textarea 
                                placeholder="Description"
                                className="form-control"
                                id="description"
                                value={motherBoard.description}
                                onChange={handleInputChange}
                                name="description"
                            />
                        </Container>
                    </form>
                </div>
            )}
        </MotherBoardCRUDWrapper>
    )
}

export default AddMotherBoard;
