import React, { useState } from 'react';
import cpuService from '../../../services/cpuService';
import { CPUCRUDWrapper } from './CPU.style';

const AddCPU = () => {

    const initialCPUState = {
        id: null,
        image: '',
        architecture: '',
        cache: '',
        chipset: '',
        chipset_graphique: '',
        fréquence: '',
        fréquence_boost: '',
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

    const saveCPU = () => {
        let data = {
            image: CPU.image,
            architecture: CPU.architecture,
            cache: CPU.cache,
            chipset: CPU.chipset,
            chipset_graphique: CPU.chipset_graphique,
            description: CPU.description,
            fréquence: CPU.fréquence,
            fréquence_boost: CPU.fréquence_boost,
            nb_coeur: CPU.nb_coeur,
            nb_threads: CPU.nb_threads,
            nom: CPU.nom,
            overclocking: CPU.overclocking,
            socket: CPU.socket,
            type: CPU.type
        }

        cpuService.create(data)
            .then(res => {
                setCPU({
                    id: res.data.id,
                    image: res.data.image,
                    architecture: res.data.architecture,
                    cache: res.data.cache,
                    chipset: res.data.chipset,
                    chipset_graphique: res.data.chipset_graphique,
                    description: res.data.description,
                    fréquence: res.data.fréquence,
                    fréquence_boost: res.data.fréquence_boost,
                    nb_coeur: res.data.nb_coeur,
                    nb_threads: res.data.nb_threads,
                    nom: res.data.nom,
                    overclocking: res.data.overclocking,
                    socket: res.data.socket,
                    type: res.data.type
                });
                setSubmitted(true);
                console.log(res.data)
            })
        .catch(e => {
            console.log(e);
        });
    }

    const newCPU = () => {
        setCPU(initialCPUState);
        setSubmitted(false);
    }
    

    return (
        <CPUCRUDWrapper>
            {submitted ? (
                <div>
                    <h4>Les données ont été envoyées avec succès !</h4>
                    <button onClick={newCPU}>Ajouter</button>
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
                                    value={CPU.nom}
                                    onChange={handleInputChange}
                                    name="nom"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="image">Image</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="image"
                                    required
                                    value={CPU.image}
                                    onChange={handleInputChange}
                                    name="image"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="nb_coeur">Nombre de coeurs</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="nb_coeur"
                                    required
                                    value={CPU.nb_coeur}
                                    onChange={handleInputChange}
                                    name="nb_coeur"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="nb_threads">Nombre de Threads</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="nb_threads"
                                    required
                                    value={CPU.nb_threads}
                                    onChange={handleInputChange}
                                    name="nb_threads"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="architecture">Architecture</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="architecture"
                                    required
                                    value={CPU.architecture}
                                    onChange={handleInputChange}
                                    name="architecture"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="cache">Cache</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cache"
                                    required
                                    value={CPU.cache}
                                    onChange={handleInputChange}
                                    name="cache"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="chipset">Chipset</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="chipset"
                                    placeholder="Chipset du processeur"
                                    required
                                    value={CPU.chipset}
                                    onChange={handleInputChange}
                                    name="chipset"
                                />
                            </div>

                            <div className="from-group">
                                <label htmlFor="chipset_graphique">Chipset Graphique</label>
                                <input
                                    type="text"
                                    className="from-control"
                                    id="chipset_graphique"
                                    required
                                    placeholder="Chipset graphique du processeur"
                                    value={CPU.chipset_graphique}
                                    onChange={handleInputChange}
                                    name="chipset_graphique"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="fréquence">Fréquence</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="fréquence"
                                    required
                                    placeholder="Fréquence du processeur"
                                    value={CPU.fréquence}
                                    onChange={handleInputChange}
                                    name="fréquence"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="fréquence_boost">Fréquence Boost</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="fréquence_boost"
                                    required
                                    placeholder="Fréquence Boost du processeur"
                                    value={CPU.fréquence_boost}
                                    onChange={handleInputChange}
                                    name="fréquence_boost"
                                />
                            </div>

                            <div className="form-group">
                                <h4>Overclocking</h4>
                                <label htmlFor="overclocking" className="switch">
                                    <input
                                        type="checkbox"
                                        className="form-control"
                                        id="overclocking"
                                        value={CPU.overclocking}
                                        onChange={handleInputChange}
                                        name=""
                                    />
                                </label>
                            </div>
                        </form>
                    </div>
            )}
        </CPUCRUDWrapper>
    )
}

export default AddCPU
