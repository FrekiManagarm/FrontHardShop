import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Card } from '../../../components/Card/Card';
import GetAPIData from '../../../data/get_api_data';
import { choosePSU } from '../rootSlice';
import { ComponentsListWrapper, Step8PageWrapper, Title } from './Step8.style';

const Step8 = () => {


    const [PSU, setPSU] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory();
    const Psu = useSelector(state => state.PSU);

    useEffect(() => {
        const endpoint = 'PSUs'
        GetAPIData(endpoint).then(
            res => {
                setPSU(res.data)
            }
        )
    });

    const onSubmit = (data) => {
        dispatch(choosePSU(data.PSU));
        history.push('/Configurator/Step9');
    }

    console.log(PSU);

    return (
        <Step8PageWrapper>
            <Title>Etape 8/9 : L'Alimentation</Title>
            <p style={{ paddingTop: "12px" }}>L'alimentation est là pour fournir l'électricité dont vos composants ont besoin !</p>
            <p style={{ paddingTop: "12px" }}> Attention ! Il faut tout de même la choisir au préalable car,<br /> si votre Wattage n'est pas assez suffisant vous risquez d'avoir un baisse de performance</p>
            <ComponentsListWrapper>
                {PSU && PSU.map ? (psu => 
                    <Card>
                        <Card.Image src={psu.image} />
                        <Card.Body>
                            <Card.Title>{psu.nom} </Card.Title>
                            <Card.Text> {psu.description} </Card.Text>
                            <Card.Button onClick={() => {
                                dispatch(choosePSU(psu))
                                history.push('/Configurator/Step9')
                            }}></Card.Button>
                        </Card.Body>
                    </Card>
                ) : 
                    <div>
                        <p style={{paddingBottom: "12px"}}>Oups...  un incident s'est produit</p>
                        <button onClick={() => history.push('/Configurator/Step9')}>Passer</button>
                    </div>
                }
            </ComponentsListWrapper>
        </Step8PageWrapper>
    )
}

export default Step8
