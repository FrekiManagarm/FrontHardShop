import React, { useEffect, useState } from 'react'
import GetAPIData from '../../../data/get_api_data';
import { HDDListPageWrapper } from './HDDList.style'
import { Card } from '../../../components/Card/Card';

const HDDList = () => {

    const [HDDs, setHDDs] = useState([]);

    useEffect( () => {
        const endpoint = 'HDDs'
        GetAPIData(endpoint).then(
            res => {
                console.log(res.data)
                setHDDs(res.data)
            }
        )
    }, []);

    console.log(HDDs);

    return (
        <HDDListPageWrapper>
            {HDDs && HDDs.map(hdd => 
                <Card>
                    <Card.Image src={hdd.image} alt="Image" />
                    <Card.Body>
                        <Card.Title>{hdd.nom}</Card.Title>
                        <Card.Text>Capacité : {hdd.capacité} </Card.Text>
                        <Card.Text>RPM : {hdd.RPM} </Card.Text>
                        <Card.Text>Description : {hdd.description}</Card.Text>
                        <Card.Button>Plus</Card.Button>
                    </Card.Body>
                </Card>
            )}
        </HDDListPageWrapper>
    )
}

export default HDDList
