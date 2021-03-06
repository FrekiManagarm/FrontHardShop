import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Card } from '../../../components/Card/Card';
import GetAPIData from '../../../data/get_api_data';
import { chooseGPU } from '../rootSlice';
import { ComponentsListWrapper, CustomForm, Step5PageWrapper, Title } from './Step5.style';

const Step5 = () => {

    const [GPU, setGPU] = useState([])
    const dispatch = useDispatch();
    const history = useHistory();
    const Gpu = useSelector(state => state.GPU);

    useEffect(() => {
        const endpoint = 'GPUs'
        GetAPIData(endpoint).then(
            res => {
                setGPU(res.data)
            }
        )
    }, [])

    return (
        <Step5PageWrapper>
            <Title>Etape 5/9 : La Carte Graphique</Title>
            <p style={{ paddingTop: "12px" }}>La Carte Graphique est l'un des éléments dont votre PC peut se passer</p>
            <p style={{ paddingTop: "12px" }}>Seulement, si vous souhaitez faire du jeu ou des tâches lourdes comme le montage vidéo il est conseillé d'en mettre une !</p>
            <ComponentsListWrapper>
                {GPU.map(gpu => 
                    <Card>
                        <Card.Image src={gpu.image} />
                        <Card.Body>
                            <Card.Title> {gpu.nom} </Card.Title>
                            <Card.Text> {gpu.description} </Card.Text>
                            <Card.Button onClick={() => {
                                dispatch(chooseGPU(gpu))
                                history.push('/Configurator/Step6')
                            }} >Choisir</Card.Button>
                        </Card.Body>
                    </Card>    
                )}
            </ComponentsListWrapper>
        </Step5PageWrapper>
    )
}

export default Step5
