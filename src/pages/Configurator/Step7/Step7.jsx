import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Card } from '../../../components/Card/Card';
import GetAPIData from '../../../data/get_api_data';
import { chooseHDD } from '../rootSlice';
import { ComponentsListWrapper, CustomForm, Step7PageWrapper, Title } from './Step7.style'

const Step7 = () => {

    const [HDD, setHDD] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory();
    const Hdd = useSelector(state => state.HDD);

    useEffect(() => {
        const endpoint = 'HDDs'
        GetAPIData(endpoint).then(
            res => {
                setHDD(res.data)
            }
        )
    }, []);

    const onSubmit = (data) => {
        dispatch(chooseHDD(data.HDD));
        history.push('/Configurator/Step8');
    }


    return (
        <Step7PageWrapper>
            <Title>Etape 7/9 : le Disque Dur</Title>
            <p style={{paddingTop: "12px"}}></p>
            <p style={{paddingTop: "12px"}}></p>
            <ComponentsListWrapper>
                {HDD && HDD.map(hdd => 
                    <Card>
                        <Card.Image src={hdd.image} />
                        <Card.Body>
                            <Card.Title>{hdd.nom}</Card.Title>
                            <Card.Text>{hdd.description} </Card.Text>
                            <Card.Button
                                onClick={() => {
                                    dispatch(chooseHDD(hdd))
                                    history.push('/Configurator/Step8')
                                }}
                            >Choisir</Card.Button>
                        </Card.Body>
                    </Card>
                )}
            </ComponentsListWrapper>
        </Step7PageWrapper>
    )
}

export default Step7
