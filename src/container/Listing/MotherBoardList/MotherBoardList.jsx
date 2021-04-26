import React, { useEffect, useState } from 'react'
import { Card } from '../../../components/Card/Card'
import GetAPIData from '../../../data/get_api_data';
import { MotherBoardListPageWrapper } from './MotherBoardList.style'

const MotherBoardList = () => {

    const [MBs, setMBs] = useState([]);

    useEffect(() => {
        const endpoint = 'CarteMeres'
        GetAPIData(endpoint).then(
            res => {
                setMBs(res.data)
                console.log(res.data)
            }
        )
    }, []);

    console.log(MBs)

    return (
        <MotherBoardListPageWrapper>
            {MBs && MBs.map(mb => 
                <Card>
                    <Card.Image src={mb.image} />
                    <Card.Body>
                        <Card.Title>{mb.nom}</Card.Title>
                        <Card.Text style={{ paddingTop: "10px" }}>Format : {mb.format}</Card.Text>
                        <Card.Text>Compatibilté : {mb.proco_compatible} </Card.Text>
                        <Card.Text>Socket : {mb.socket}</Card.Text>
                        <Card.Text>Fréquence max mémoire : {mb.fréquence_mémoire} </Card.Text>
                        <Card.Text>Description : {mb.description}</Card.Text>
                        <Card.Button>Plus</Card.Button>
                    </Card.Body>
                </Card>
            )}
        </MotherBoardListPageWrapper>
    )
}

export default MotherBoardList
