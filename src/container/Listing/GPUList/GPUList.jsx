import React, { useState, useEffect } from 'react';
import { Card } from '../../../components/Card/Card'
import GetAPIData from '../../../data/get_api_data';
import { GPUListPageWrapper } from './GPUList.style'
import ModaleGPU from './ModaleGPU';

const GPUList = () => {

    const [GPUs, setGPUs] = useState([]);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const endpoint = 'GPUs'
        GetAPIData(endpoint).then(
            res => {
                setGPUs(res.data)
                console.log(res.data)
            }
        )
    }, [])

    console.log(GPUs)

    return (
        <GPUListPageWrapper>
            {GPUs && GPUs.map(gpu => 
                <Card>
                    <Card.Image src={gpu.image} />
                    <Card.Body>
                        <Card.Title>{gpu.nom}</Card.Title>
                        <Card.Text>Coeurs : {gpu.nb_coeurs}</Card.Text>
                        <Card.Text>Fréquence : {gpu.frequence}</Card.Text>
                        <Card.Text>Description : {gpu.description} </Card.Text>
                        <Card.Button onClick={() => setVisible(true)}>Plus</Card.Button>
                    </Card.Body>
                </Card>    
            )}
            <ModaleGPU revele={visible} cache={() => setVisible(!visible)} state={GPUs}  />
        </GPUListPageWrapper>
    )
}

export default GPUList
