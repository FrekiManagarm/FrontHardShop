import React, { useState } from 'react'
import caseService from '../../../services/caseService';
import { CaseCRUDWrapper } from './Case.style'

const AddCase = () => {

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
        ventilateur: ''
    }

    const [Case, setCase] = useState(initialCaseState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCase({ ...Case, [name]: value });
    }

    const saveCase = () => {
        let data = {
            image: Case.image,
            RGB: Case.RGB,
            alim_inclus: Case.alim_inclus,
            couleur: Case.couleur,
            facade_laterale: Case.facade_laterale,
            description: Case.description,
            format: Case.format,
            nom: Case.nom,
            ventilateur: Case.ventilateur
        }

        caseService.create(data)
            .then(res => {
                setCase({
                    id: res.data.id,
                    RGB: res.data.RGB,
                    alim_inclus: res.data.alim_inclus,
                    couleur: res.data.couleur,
                    facade_laterale: res.data.facade_laterale,
                    description: res.data.description,
                    format: res.data.format,
                    nom: res.data.nom,
                    ventilateur: res.data.ventilateur
                });
                setSubmitted(true);
                console.log(res.data);
            })
            .catch(e => {
                console.log(e);
        });
    }

    const newCase = () => {
        setCase(initialCaseState);
        setSubmitted(false);
    }

    return (
        <CaseCRUDWrapper>
            {submitted ? (
                <div>
                    <h4>Les données ont été envoyées avec succès !</h4>
                    <button onClick={newCase}>Ajouter</button>
                </div>
            ) : (
                <div>
                    <form method="POST">
                        <div className="form-group">
                            <label htmlFor="nom">Nom</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nom"
                                required
                                value={Case.nom}
                                onChange={handleInputChange}
                                name="nom"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="couleur">Couleur</label>
                            <input 
                                type="text"
                                className="form-control"
                                id="couleur"
                                required
                                value={Case.couleur}
                                onChange={handleInputChange}
                                name="couleur"
                            />
                        </div>

                        <div className="form-group">
                            <label>Façade Latérale</label>
                            <input 
                                type="text"
                                className="form-control"
                                id="facade_laterale"
                                required
                                value={Case.facade_laterale}
                                onChange={handleInputChange}
                                name="facade_laterale"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="format">Format</label>
                            <input 
                                type="text"
                                className="form-control"
                                id="format"
                                required
                                value={Case.format}
                                onChange={handleInputChange}
                                name="format"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="ventilateur">Ventilateur</label>
                            <input 
                                type="text"
                                className="form-control"
                                id="ventilateur"
                                required
                                value={Case.ventilateur}
                                onChange={handleInputChange}
                                name="ventilateur"
                            />
                        </div>

                        <div className="form-group">
                            <label className="switch" htmlFor="RGB">
                                <input 
                                    type="checkbox"
                                    className="form-control"
                                    id="RGB"
                                    required
                                    value={Case.RGB}
                                    onChange={handleInputChange}
                                    name="RGB"
                                />
                                <span className="slider"></span>
                            </label>
                        </div>

                        <div className="form-group">
                            <label className="switch" htmlFor="alim_inclus">
                                <input 
                                    type="checkbox"
                                    className="form-control"
                                    id="alim_inclus"
                                    required
                                    value={Case.alim_inclus}
                                    onChange={handleInputChange}
                                    name="alim_inclus"
                                />
                            </label>
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea
                                className="form-control"
                                id="description"
                                value={Case.description}
                                onChange={handleInputChange}
                                name="description"
                            />
                        </div>
                        <button onClick={saveCase} className="btn-save">Ajouter</button>
                    </form>
                </div>
                
            )}
        </CaseCRUDWrapper>
    )
}

export default AddCase
