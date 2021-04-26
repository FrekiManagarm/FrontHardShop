import React from 'react'
import { Card } from '../../../components/Card/Card';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import GetAPIData from '../../../data/get_api_data';
import { chooseMotherBoard } from '../rootSlice';
import { ComponentsListWrapper, Step2PageWrapper, Title } from './Step2.style'

const Step2 = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const MotherBoard = useSelector(state => state.MotherBoard);
    const [MBs, setMBs] = useState([]);
    const [MBIntels, setMBIntels] = useState([]);
    const [MBAMDs, setMBAMDs] = useState([]);
    const token = localStorage.getItem("token");
    const state = useSelector(state => state.config);

    console.log(state.CPU?.type)

    useEffect(() => {
        const endpoint = 'MBAMD'
        GetAPIData(endpoint).then(
            res => {
                setMBAMDs(res.data)
            }
        )
    }, [])

    useEffect(() => {
        const url = 'MBIntel'
        GetAPIData(url).then(
            res => {
                setMBIntels(res.data)
            }
        )
    }, [])

    console.log(MBs)



    return(
        <Step2PageWrapper>
            <Title>Etape 2/9 : la Carte Mère</Title>
            <p style={{ paddingTop: "12px" }}>Cette dernière vous permettra de choisir le format de votre Boitier</p>
            <p style={{ paddingTop: "12px" }}>Elle permet aussi d'assurer la liaison entre chaque Composant ainsi que leur coordination</p>
            {state.CPU?.type === 'Intel' ? 
                <ComponentsListWrapper>
                    {MBIntels.map(MBIntel => 
                        <Card>
                            <Card.Image src={MBIntel.image} alt="Image" />
                            <Card.Body>
                                <Card.Title>{MBIntel.nom}</Card.Title>
                                <Card.Text>{MBIntel.description}</Card.Text>
                                <Card.Button onClick={() => {
                                    dispatch(chooseMotherBoard(MBIntel))
                                    history.push('/Configurator/Step3')
                                }}>Choisir</Card.Button>
                            </Card.Body>
                        </Card> 
                    )}
                </ComponentsListWrapper> 
            : 
                <ComponentsListWrapper>
                    {MBAMDs.map(MBAMD => 
                        <Card>
                            <Card.Image src={MBAMD.image} alt="Image" />
                            <Card.Body>
                                <Card.Title>{MBAMD.nom}</Card.Title>
                                <Card.Text>{MBAMD.description}</Card.Text>
                                <Card.Button onClick={() => {
                                    dispatch(chooseMotherBoard(MBAMD))
                                    history.push('/Configurator/Step3')
                                }}>Choisir</Card.Button>
                            </Card.Body>
                        </Card> 
                    )}
                </ComponentsListWrapper>
            }
            </Step2PageWrapper>
    )
}

export default Step2
