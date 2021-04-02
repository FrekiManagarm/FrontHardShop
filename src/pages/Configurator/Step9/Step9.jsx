import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { chooseCase } from '../rootSlice';
import { CustomForm, Step9PageWrapper } from './Step9.style'

const Step9 = () => {

    const [Case, setCase] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory();
    const Boitier = useSelector(state => state.Case);
    const { register, handleSubmit } = useForm({
        defaultValues: { Boitier }
    });

    useEffect(async () => {
        const { data } = await axios.get('');
        setCase(data);
    })

    const onSubmit = (data) => {
        dispatch(chooseCase(data.Case));
        history.push('/Configurator/Resume')
    }

    return (
        <Step9PageWrapper>
            <CustomForm onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="Case">Choisissez votre Boîtier, attention aux dimensions ! : </label>
                <select id="Case" name="Case" >
                    <option value="NZXT">NZXT</option>
                    <option value="ThermalTake">ThermalTake</option>
                    <option value="MSI">MSI</option>
                    <option value="AORUS">AORUS</option>
                    <option value="Cooler Master">Cooler Master</option>
                    <option value="Corsair">Corsair</option>
                    <option value="DeepCool">DeepCool</option>
                    <option value="Gigabyte">Gigabyte</option>
                    <option value="IN WIN">IN WIN</option>
                    <option value="Lian Li">Lian Li</option>
                    <option value="Phanteks">Phanteks</option>
                    <option value="Spirit of Gamer">Spirit of Gamer</option>
                    <option value="Zalman">Zalman</option>
                </select>
                <button>Voir ma Config</button>
            </CustomForm>
        </Step9PageWrapper>
    )
}

export default Step9
