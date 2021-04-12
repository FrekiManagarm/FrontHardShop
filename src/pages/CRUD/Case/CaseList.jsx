import React, { useState, useEffect } from 'react';
import caseService from '../../../services/caseService';
import { Link } from "react-router-dom";

const CaseList = () => {

    const [Case, setCase] = useState([]);
    const [currentCase, setCurrentCase] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchTitle, setSearchTitle] = useState("");

    useEffect(() => {
        retrieveCase();
    }, []);

    const retrieveCase = () => {
        caseService.getAll()
            .then(res => {
                setCase(res.data);
                console.log(res.data, 'data');
            })
        .catch(e => {
            console.log(e);
        })
    }

    const onChangeSearchTitle = (e) => {
        const searchTitle = e.target.value;
        setSearchTitle(searchTitle);
    }

    const refreshList = () => {
        retrieveCase();
        setCurrentCase(null);
        setCurrentIndex(-1);
    }

    const setActiveCase = (boitier, index) => {
        setCurrentCase(boitier);
        setCurrentIndex(index);
    }

    return (
        <div>
            <div>
                <h4>Liste des Boitiers</h4>
                <ul>
                    {Case && Case.map((boitier, index) => (
                        <li className={"list-items" + (index === currentIndex ? "active" : "")}
                            onClick={() => setActiveCase(boitier, index)}
                            key={index}
                        >
                            {boitier.nom}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                {currentCase ? (
                    <div>
                        <h4>Boitier</h4>
                        <div>
                            <label>
                                <strong>Nom :</strong>
                            </label>{" "}
                            {currentCase.nom}
                        </div>
                        <div>
                            <label>
                                <strong>Image :</strong>
                            </label>{" "}
                            {currentCase.image}
                        </div>
                        <div>
                            <label>
                                <strong>RGB :</strong>
                            </label>{" "}
                            {currentCase.RGB}
                        </div>
                        <div>
                            <label>
                                <strong>Alimentation Inclus :</strong>
                            </label>{" "}
                            {currentCase.alim_inclus}
                        </div>
                        <div>
                            <label>
                                <strong>Couleur :</strong>
                            </label>{" "}
                            {currentCase.couleur}
                        </div>
                        <div>
                            <label>
                                <strong>Façade Latérale :</strong>
                            </label>{" "}
                            {currentCase.facade_laterale}
                        </div>
                        <div>
                            <label>
                                <strong>Format :</strong>
                            </label>{" "}
                            {currentCase.format}
                        </div>
                        <div>
                            <label>
                                <strong>Ventilateur :</strong>
                            </label>{" "}
                            {currentCase.ventilateur}
                        </div>
                        <div>
                            <label>
                                <strong>Description :</strong>
                            </label>{" "}
                            {currentCase.description}
                        </div>
                        <div>
                            <label>
                                <strong>Status :</strong>
                            </label>{" "}
                            {currentCase.published ? "Published" : "Pending"}
                        </div>

                        <Link
                            to={"/Case/" + currentCase.id}
                            className="badge"
                        >
                            Edit
                        </Link>
                    </div>
                ) : (
                        <div>
                            <br />
                            <p>Cliquer sur un Tutorial ...</p>
                        </div>
                )}
            </div>
        </div>
    )
}

export default CaseList
