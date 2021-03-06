import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Card } from '../../../components/Card/Card';
import GetAPIData from '../../../data/get_api_data';
import { chooseCase } from '../rootSlice';
import { ComponentsListWrapper, CustomForm, Step9PageWrapper, Title } from './Step9.style'

const Step9 = () => {

    const [CaseATX, setCaseATX] = useState([]);
    const [CaseMini, setCaseMini] = useState();
    const dispatch = useDispatch();
    const history = useHistory();
    const state = useSelector(state => state.config)
    const Boitier = useSelector(state => state.Case);
    const { register, handleSubmit } = useForm({
        defaultValues: { Boitier }
    });

    useEffect(() => {
        const endpoint = 'MiniTour'
        GetAPIData(endpoint).then(
            res => {
                setCaseMini(res.data)
            }
        );
    })

    useEffect( () => {
        const endpoint = 'MoyenTour'
        GetAPIData(endpoint).then(
            res => {
                setCaseATX(res.data)
                console.log(res.data)
            }
        )
    }, [])

    return (
        <Step9PageWrapper>
            <Title>Etape 9/9 : </Title>
            <p style={{ paddingTop: "12px" }}>En Deuxième étape vous avez choisi votre Carte Mère et son format à donc déterminé le format de votre boitier</p>
            <p style={{ paddingTop: "12px" }}>Le Boitier est un élément essentiel du PC.<br /> Il permet d'isoler la configuration de tout évènement extérieur, mais participe aussi à l'isolation phonique de celle-ci.</p>
            {state.MotherBoard?.format === "ATX" ? 
                <ComponentsListWrapper>
                    {CaseATX && CaseATX.map(boitier => 
                        <Card>
                            <Card.Image src={boitier.image} />
                            <Card.Body>
                                <Card.Title>{boitier.nom} </Card.Title>
                                <Card.Text>{boitier.description}</Card.Text>
                                <Card.Button onClick={() => {
                                    dispatch(chooseCase(boitier))
                                    history.push('/Configurator/Resume')
                                }}>Choisir</Card.Button>
                            </Card.Body>
                        </Card>
                    )}
                </ComponentsListWrapper>
            : 
                <ComponentsListWrapper>
                    {CaseMini & CaseMini.map(casemini => 
                        <Card>
                            <Card.Image src={casemini.image} />
                            <Card.Body>
                                <Card.Title>{casemini.nom}</Card.Title>
                                <Card.Text>{casemini.description}</Card.Text>
                                <Card.Button onClick={() => {
                                    dispatch(chooseCase(casemini))
                                    history.push('/Configurator/Resume')
                                }}></Card.Button>
                            </Card.Body>
                        </Card>
                    )}
                </ComponentsListWrapper>
            }
        </Step9PageWrapper>
    )
}

export default Step9
