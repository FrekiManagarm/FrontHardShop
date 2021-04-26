import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';


// --------------------------------------------------------------

import { chooseCPU } from '../rootSlice';
import { ComponentsListWrapper, Step1PageWrapper, Title } from './Step1.style'; 
import { Card } from '../../../components/Card/Card';
import GetAPIData from '../../../data/get_api_data';


const Step1 = () => {

    const [cpus, setCpus] = useState([])
    const dispatch = useDispatch();
    const history = useHistory();
    const token = localStorage.getItem("token")
    const CPU = useSelector(state => state.CPU);
    const state = useSelector(state => state.config)
    const { register, handleSubmit } = useForm({
        defaultValues: { CPU }
    })

    useEffect(() => {
        const endpoint = 'CPUs';
        GetAPIData(endpoint).then(
            res => {
                setCpus(res.data)
            }
        ) 
    }, [])

    console.log(cpus);

    return (
        <Step1PageWrapper>
            <Title style={{ paddingTop: "100px"}} >Etape 1/9 : Le processeur</Title>
                <p style={{ paddingTop: "12px" }}>Celui-ci va déterminer quelle utilisation vous faites de votre machine, le "Processeur" est le "Cerveau" du PC</p>
                <p style={{ paddingTop: "12px" }}>Etes vous plutôt Multi-tâches ou Jeux ?</p>
            {token ? 
                <ComponentsListWrapper>
                    {cpus && cpus.map(cpu => 
                        <Card>
                            <Card.Image src={cpu.image} alt="Image" />
                            <Card.Body>
                                <Card.Title>{cpu.nom}</Card.Title>
                                <Card.Text>{cpu.description}</Card.Text>
                                <Card.Button onClick={() => {
                                    dispatch(chooseCPU(cpu))
                                    history.push("/Configurator/Step2")
                                }}>Choisir</Card.Button>
                            </Card.Body>
                        </Card>    
                    )}
                </ComponentsListWrapper>
            :
                <Redirect to="/" />
            }
        </Step1PageWrapper>
    )
}

export default Step1
