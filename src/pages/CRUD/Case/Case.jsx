import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import DeleteAPIData from '../../../data/delete_api_data';
import GetAPIData from '../../../data/get_api_data';
import PatchAPIData from '../../../data/patch_api_data';
import PostAPIData from '../../../data/post_api_data';

const Case = (props) => {

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
    const [Message, setMessage] = useState("");

    const getCase = id => {
        const endpoint = `/Boitiers/${id}`;

        GetAPIData(endpoint)
            .then(res => {
                setCurrentCase(res.data);
                console.log(res.data)
            })
            .catch(e => {
                console.log(e);
            });
    }

    useEffect(() => {
        getCase(props.match.params.id)
    }, [props.match.params.id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCurrentCase({ ...Case, [name]: value });
    }

    const updatePublished = (status) => {
        let data = {
            id: currentCase.id,
            image: currentCase.image,
            RGB: currentCase.RGB,
            alim_inclus: currentCase.alim_inclus,
            couleur: currentCase.couleur,
            facade_laterale: currentCase.facade_laterale,
            description: currentCase.description,
            format: currentCase.format,
            nom: currentCase.nom,
            ventilateur: currentCase.ventilateur,
            published: status
        }
   
        const endpoint = `/Boitiers/${currentCase.id}`;

        PatchAPIData(endpoint, JSON.stringify(data)).then(
            res => {
                setCurrentCase({ ...currentCase, published: status });
                console.log(res.data)
            }
        ).catch(e => console.log(e)); 
        
        
    }

    const updateCase = () => {

        const endpoint = `/Boitiers/${currentCase.id}`;

        PatchAPIData(endpoint, ).then(
            res => {
                console.log(res.data)
                setMessage('Ce Boitier à été mis à jour');
            }
        ).catch(e => console.log(e));
    }
    
    const deleteCase = () => {

        const endpoint = `/Boitiers/${currentCase.id}`;

        DeleteAPIData(endpoint).then(
            res => {
                console.log(res.data)
                history.push('')
            }
        ).catch(e => console.log(e));
    }

    return (
        <div>
            {currentCase ? (
                <div className="edit-form">
                    <h4>Boitier</h4>
                    <form>  
                        <div className="form-group">
                            <label htmlFor="nom">Nom</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nom"
                                name="nom"
                                value={currentCase.nom}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="image">Image</label>
                            <input
                                type="text"
                                className="form-control"
                                id="image"
                                name="image"
                                value={currentCase.image}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="RGB" className="switch">
                                <input
                                    type="checkbox"
                                    className="form-control"
                                    id="RGB"
                                    name="RGB"
                                    value={currentCase.RGB}
                                    onChange={handleInputChange}
                                />
                            </label>
                        </div>

                        <div className="form-group">
                            <label htmlFor="alim_inclus" className="switch">
                                <input
                                    type="checkbox"
                                    className="form-control"
                                    id="alim_inclus"
                                    name="alim_inclus"
                                    value={currentCase.alim_inclus}
                                    onChange={handleInputChange}
                                />
                             </label>
                        </div>

                        <div className="form-group">
                            <label htmlFor="couleur">Couleur</label>
                            <input
                                type="text"
                                className="form-control"
                                id="couleur"
                                name="couleur"
                                value={currentCase.couleur}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="facade_laterale">Façade Latérale</label>
                            <input
                                type="text"
                                className="form-control"
                                id="facade_laterale"
                                name="facade_laterale"
                                value={currentCase.facade_laterale}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="format">Format</label>
                            <input
                                type="text"
                                className="form-control"
                                id="format"
                                name="format"
                                value={currentCase.format}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="ventilateur">Ventilateur</label>
                            <input
                                type="text"
                                className="form-control"
                                id="ventilateur"
                                name="ventilateur"
                                value={currentCase.ventilateur}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>
                                <strong>Status:</strong>
                            </label>
                            {currentCase.published ? "Published" : "Pending"}
                        </div>
                    </form>

                    {currentCase.published ? (
                        <button className="button" onClick={() => updatePublished(false)}>
                            UnPublish
                        </button>
                    ) : (
                            <button className="publish-button" onClick={() => updatePublished(true)}>
                                Publish
                            </button>
                    )}

                    <button className="delete-button" onClick={deleteCase}>
                        Delete  
                    </button>

                    <button
                        type="submit"
                        className="button-success"
                        onClick={updateCase}
                    >
                        Update
                    </button>
                    <p>{Message}</p>
                </div>
            ) : (
                    <div>
                        <br />
                        <p>Cliquer sur un Boitier ...</p>
                    </div>
            )}
        </div>
    )
}

export default Case
