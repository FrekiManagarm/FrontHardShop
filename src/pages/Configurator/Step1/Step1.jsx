import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';


// --------------------------------------------------------------

import { chooseCPU } from '../rootSlice';
import { ComponentsListWrapper, Step1PageWrapper } from './Step1.style'; 
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
