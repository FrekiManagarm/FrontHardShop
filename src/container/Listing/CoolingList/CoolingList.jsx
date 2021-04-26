import React, { useState, useEffect } from 'react';
import { Card } from '../../../components/Card/Card';
import GetAPIData from '../../../data/get_api_data';
import { CoolingListPageWrapper } from './CoolingList.style';

const CoolingList = () => {

    const [Coolings, setCoolings] = useState([]);
    const endpoint = 'Coolings'

    useEffect(() => {
        GetAPIData(endpoint).then(
            res => {
                console.log(res.data)
                setCoolings(res.data)
            }
        )
    }, [])

    return (
        <CoolingListPageWrapper>
            {Coolings && Coolings.map(Cooling => 
                <Card>
                    <Card.Image src={Cooling.image} alt="Image" />
                    <Card.Body>
                        <Card.Title>{Cooling.nom}</Card.Title>
                        <Card.Text>Format : {Cooling.format}</Card.Text>
                        <Card.Text>Type : {Cooling.type}</Card.Text>
                        <Card.Text> Description : {Cooling.description} </Card.Text>
                        <Card.Button>Cliquer</Card.Button>
                    </Card.Body>
                </Card>
            )}
        </CoolingListPageWrapper>
    )
}

export default CoolingList
