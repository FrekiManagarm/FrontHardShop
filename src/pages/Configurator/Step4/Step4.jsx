import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { Card } from '../../../components/Card/Card';
import { ComponentsListWrapper, CustomForm, Step4PageWrapper, Title } from './Step4.style'
import { chooseCooling } from '../rootSlice';
import GetAPIData from '../../../data/get_api_data';


const Step4 = () => {

    const [Cooling, setCooling] = useState([])
    const dispatch = useDispatch();
    const history = useHistory();
    const Refroidissement = useSelector(state => state.COOLING);


    useEffect( () => {
        const endpoint = 'Coolings'
        GetAPIData(endpoint).then(
            res => {
                setCooling(res.data)
            }
        )
    }, [])

    console.log(Cooling)


    return (
        <Step4PageWrapper>
            <Title>Etape 4/9 : le Refroidissement</Title>
            <p style={{ paddingTop: "12px" }}>Le Refroidissement va vous permettre d'extraire la chaleur émise par le Processeur et l'évacuer</p>
            <p style={{ paddingTop: "12px" }}> Attention ! Choisissez bien votre méthode de refroidissement sinon cela impactera vos performances</p>
            <ComponentsListWrapper>
                {Cooling.map(cooling => 
                    <Card>
                        <Card.Image src={cooling.image} alt="Image" />
                        <Card.Body>
                            <Card.Title>{cooling.nom}</Card.Title>
                            <Card.Text>{cooling.description}</Card.Text>
                            <Card.Button onClick={() => {
                                dispatch(chooseCooling(cooling))
                                history.push("/Configurator/Step5")
                            }}>Choisir</Card.Button>
                        </Card.Body>
                    </Card>
                )}
            </ComponentsListWrapper>
        </Step4PageWrapper>
    )
}

export default Step4
