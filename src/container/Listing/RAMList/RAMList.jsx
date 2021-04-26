import React, { useEffect, useState } from 'react'
import GetAPIData from '../../../data/get_api_data';
import { RAMListPageWrapper } from './RAMList.style'
import { Card } from '../../../components/Card/Card';

const RAMList = () => {

    const [RAMs, setRAMs] = useState([]);

    useEffect( () => {
        const endpoint = 'RAMs';
        GetAPIData(endpoint).then(
            res => {
                console.log(res.data)
                setRAMs(res.data)
            }
        )
    }, []);

    console.log(RAMs);

    return (
        <RAMListPageWrapper>
            {RAMs && RAMs.map(ram => 
                <Card>
                    <Card.Image src={ram.image} />
                    <Card.Body>
                        <Card.Title>{ram.nom}</Card.Title>
                        <Card.Text style={{ paddingTop: "10px"}}>Marque : {ram.marque}</Card.Text>
                        <Card.Text>Capacité : {ram.capacité}</Card.Text>
                        <Card.Text>Interface : {ram.interface}</Card.Text>
                        <Card.Text>Latence : {ram.latence}</Card.Text>
                        <Card.Text>Quantité : {ram.quantité}</Card.Text>
                        <Card.Text>Description : {ram.description} </Card.Text>
                        <Card.Button>Plus</Card.Button>
                    </Card.Body>
                </Card>
            )}
        </RAMListPageWrapper>
    )
}

export default RAMList
