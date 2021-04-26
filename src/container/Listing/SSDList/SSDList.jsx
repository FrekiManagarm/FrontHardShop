import React, { useState, useEffect } from 'react';
import { Card } from '../../../components/Card/Card';
import { SSDListPageWrapper } from './SSDList.style'
import GetAPIData from '../../../data/get_api_data';

const SSDList = () => {

    const [SSDs, setSSDs] = useState([]);

    useEffect(() => {
        const endpoint = 'SSDs'
        GetAPIData(endpoint).then(
            res => {
                console.log(res.data)
                setSSDs(res.data)
            }
        )
    }, []);

    console.log(SSDs);

    return (
        <SSDListPageWrapper>
            {SSDs && SSDs.map(ssd => 
                <Card>
                    <Card.Image src={ssd.image} />
                    <Card.Body>
                        <Card.Title> {ssd.nom} </Card.Title>
                        <Card.Text style={{ paddingTop: "10px" }}></Card.Text>
                        <Card.Text>Lecture : {ssd.lecture} </Card.Text>
                        <Card.Text>Ecriture : {ssd.ecriture} </Card.Text>
                        <Card.Text>Capacité : {ssd.capacité} </Card.Text>
                        <Card.Text>Interface : {ssd.interface} </Card.Text>
                        <Card.Text>Connectique : {ssd.connectique} </Card.Text>
                        <Card.Text>Description : {ssd.description} </Card.Text>
                        <Card.Button>Plus</Card.Button>
                    </Card.Body>
                </Card>
            )}
        </SSDListPageWrapper>
    )
}

export default SSDList
