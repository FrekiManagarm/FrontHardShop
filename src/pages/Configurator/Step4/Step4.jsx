import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { CustomForm, Step4PageWrapper } from './Step4.style'
import { chooseCooling } from '../rootSlice';
import axios from 'axios';

const Step4 = () => {

    const [cooling, setCooling] = useState([])
    const dispatch = useDispatch();
    const history = useHistory();
    const Refroidissement = useSelector(state => state.COOLING);
    const { register, handleSubmit } = useForm({
        defaultValues: { Refroidissement }
    })

    const onSubmit = (data) => {
        dispatch(chooseCooling(data.COOLING));
        history.push('/Configurator/Step5');
    }

    useEffect(async () => {
        await axios.get('').then(
            res => {
                const coolings = res.data
                console.log(coolings); 
                setCooling(coolings);
            }
        )
    }, [])


    return (
        <Step4PageWrapper>
            <CustomForm onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="Refroidissement">Choisissez votre refroidissement :</label>
                <select id="COOLING" name="COOLING" ref={register}>
                    <option value="Corsair">Corsair</option>
                    <option value="Thermaltake">Thermaltake</option>
                    <option value="NZXT">NZXT</option>
                </select>
                <button>Carte Graphique</button>
            </CustomForm>
        </Step4PageWrapper>
    )
}

export default Step4
