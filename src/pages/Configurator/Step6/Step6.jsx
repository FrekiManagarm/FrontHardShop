import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import { Card } from '../../../components/Card/Card';
import GetAPIData from '../../../data/get_api_data';
import { chooseSSD } from '../rootSlice';
import { ComponentsListWrapper, CustomForm, Step6PageWrapper, Title } from './Step6.style'

const Step6 = () => {

    const [SSD, setSSD] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory();
    const Ssd = useSelector(state => state.SSD);
    const { register, handleSubmit } = useForm({
        defaultValues: { SSD }
    });

    useEffect(() => {
        const endpoint = 'SSDs'
        GetAPIData(endpoint).then(
            res => {
                setSSD(res.data)
            }
        )
    }, [])

    const onSubmit = (data) => {
        dispatch(chooseSSD(data.SSD));
        history.push('/Configurator/Step7');
    }

    console.log(SSD);


    return (
        <Step6PageWrapper>
            <Title>Etape 6/9: Le Disque SSD</Title>
            <p style={{ paddingTop: "12px" }}>Le SSD ou Solid State Drive est un moyen de stockage pour les données bien plus rapide que Disque Dur classique</p>
            <p style={{ paddingTop: "12px" }}>Il est utile dans le cas où, vos logiciels ou jeux ont besoin des ressources stockéées le plus rapidement possible</p>
            <ComponentsListWrapper>
                {SSD && SSD.map(ssd => 
                    <Card>
                        <Card.Image src={ssd.image} alt="Image" />
                        <Card.Body>
                            <Card.Title>{ssd.nom}</Card.Title>
                            <Card.Text>{ssd.description}</Card.Text>
                            <Card.Button onClick={() => {
                                dispatch(chooseSSD(ssd))
                                history.push('/Configurator/Step7')
                            }}>Choisir</Card.Button>
                        </Card.Body>
                    </Card>    
                )}
            </ComponentsListWrapper>
        </Step6PageWrapper>
    )
}

export default Step6
