import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router';
import GetAPIData from '../../../data/get_api_data';

// ---------------------------------------------------------------

import { chooseRAM } from '../rootSlice';
import { Card } from '../../../components/Card/Card';
import { ComponentsListWrapper, CustomForm, Step3PageWrapper, Title } from './Step3.style';

const Step3 = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const [RAMs, setRAMs] = useState([])
    const token = localStorage.getItem("token")
    const RAM = useSelector(state => state.RAM);
    const {register, handleSubmit } = useForm({
        defaultValues: { RAM }
    })

    useEffect(() => {
        const endpoint = 'RAMs'
        GetAPIData(endpoint).then(
            res => {
                setRAMs(res.data)
            }
        )
    }, [])

    console.log(RAMs)

    return (
        <Step3PageWrapper>
            <Title>Etape 3/9: les Barrettes de Mémoire Vive</Title>
            <p style={{ paddingTop: "12px" }}>La Mémoire Vive confert au PC une rapidité et une fluidité dans l'exécution de différentes tâches.</p>
            <p style={{ paddingTop: "12px"}}>Choisissez votre lot de barrettes mémoire : </p>
            {token ? 
            <ComponentsListWrapper>
                {RAMs.map(ram => 
                    <Card>
                        <Card.Image src={ram.image} alt="Image" />
                        <Card.Body>
                            <Card.Title>{ram.nom}</Card.Title>
                            <Card.Text>Description : {ram.description}</Card.Text>
                            <Card.Button onClick={() => {
                                dispatch(chooseRAM(ram))
                                history.push('/Configurator/Step4')
                            }}>Choisir</Card.Button>
                        </Card.Body>
                    </Card>
                )}
            </ComponentsListWrapper>
             : <Redirect to="/" />}
        </Step3PageWrapper>
    )
}

export default Step3
