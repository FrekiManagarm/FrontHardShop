import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { choosePSU } from '../rootSlice';
import { ComponentsListWrapper, CustomForm, Step8PageWrapper } from './Step8.style';

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
            <ComponentsListWrapper>
                
            </ComponentsListWrapper>
        </Step8PageWrapper>
    )
}

export default Step8
