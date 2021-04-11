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
            
        </div>
    )
}

export default CaseList
