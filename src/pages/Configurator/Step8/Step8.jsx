import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { choosePSU } from '../rootSlice';
import { CustomForm, Step8PageWrapper } from './Step8.style';

const Step8 = () => {


    const [psu, setPsu] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory();
    const PSU = useSelector(state => state.PSU);
    const { register, handleSubmit } = useForm({
        defaultValues: { PSU }
    });

    useEffect(async () => {
        const { data } = await axios.get('');
        setPsu(data);
    });

    const onSubmit = (data) => {
        dispatch(choosePSU(data.PSU));
        history.push('/Configurator/Step9');
    }

    console.log(psu);

    return (
        <Step8PageWrapper>
            <CustomForm onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="PSU">Choisissez bien votre alimentation, elle vous garantira la longévité de votre configuration : </label>
                <select id="PSU" name="PSU" ref={register}>
                    <option value="Seasonic">Seasonic</option>
                    <option value="Corsair">Corsair</option>
                    <option value="EVGA">EVGA</option>
                    <option value="Cooler Master">Cooler Master</option>
                    <option value="Be Quiet !">Be Quiet !</option>
                    <option value="Enermax">Enermax</option>
                    <option value="Asus">Asus</option>
                    <option value="AORUS">AORUS</option>
                    <option value="Antec">Antec</option>
                    <option value="NZXT">NZXT</option>
                    <option value="Thermaltake">Thermaltake</option>
                </select>
                <button>Boîtier</button>
            </CustomForm>
        </Step8PageWrapper>
    )
}

export default Step8
