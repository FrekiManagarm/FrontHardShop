import React, { useState, useEffect } from 'react';
import { Card } from '../../../components/Card/Card';
import GetAPIData from '../../../data/get_api_data';
import { CPUListPageWrapper } from './CPUList.style'

const CPUList = () => {

    const [CPUs, setCPUs] = useState([]);
    

    useEffect(async () => {
        const endpoint = 'CPUs'
        GetAPIData(endpoint).then(
            res => {
                setCPUs(res.data)
            }
        )
    }, [])

    console.log(CPUs);

    

    return (
        <CPUListPageWrapper>
            {CPUs && CPUs.map(CPU => 
                <Card>
                    <Card.Image src={CPU.image} alt="Image" />
                    <Card.Body>
                        <Card.Title>{CPU.nom}</Card.Title>
                        <Card.Text>Socket : {CPU.socket}</Card.Text>
                        <Card.Text>Coeurs/Threads : {CPU.nb_coeur} coeurs/{CPU.nb_threads} threads</Card.Text>
                        <Card.Text>Description : {CPU.description}</Card.Text>
                        <Card.Button>Cliquer</Card.Button>
                    </Card.Body>
                </Card>
            )}
        </CPUListPageWrapper>
    )
}

export default CPUList
