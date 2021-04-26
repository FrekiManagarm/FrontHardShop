import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import { chooseSSD } from '../rootSlice';
import { ComponentsListWrapper, CustomForm, Step6PageWrapper } from './Step6.style'

const Step6 = () => {

    const [ssd, setSsd] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory();
    const SSD = useSelector(state => state.SSD);
    const { register, handleSubmit } = useForm({
        defaultValues: { SSD }
    });

    useEffect(async () => {
        const { data } = await axios.get('');
        setSsd(data);
    })

    const onSubmit = (data) => {
        dispatch(chooseSSD(data.SSD));
        history.push('/Configurator/Step7');
    }

    console.log(ssd);


    return (
        <Step6PageWrapper>
            <ComponentsListWrapper>
                
            </ComponentsListWrapper>
        </Step6PageWrapper>
    )
}

export default Step6
