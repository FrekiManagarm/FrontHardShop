import React, { useState, useEffect } from 'react';
import { Card } from '../../../components/Card/Card';
import GetAPIData from '../../../data/get_api_data';
import { CaseListPageWrapper, CustomCardImage } from './CaseList.style';

const CaseList = () => {

    const [Cases, setCases] = useState([]);

    const endpoint = 'Boitiers'

    useEffect(() => {
        GetAPIData(endpoint).then(
            res => {
                console.log(res.data)
                setCases(res.data)
            }
        )
    }, [])

    console.log(Cases)

    return (
        <CaseListPageWrapper>
                {Cases && Cases.map(Case => 
                            <Card>
                                <CustomCardImage src={Case.image} alt="Image" />
                                <Card.Body>
                                    <Card.Title>{Case.nom}</Card.Title>
                                    <Card.Text>Format : {Case.couleur} </Card.Text>
                                    <Card.Text>Un texte</Card.Text>
                                    <Card.Button>Cliquer</Card.Button>
                                </Card.Body>
                            </Card>
                )}
        
        </CaseListPageWrapper>
    )
}

export default CaseList
