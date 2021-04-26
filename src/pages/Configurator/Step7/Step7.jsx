import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { chooseHDD } from '../rootSlice';
import { ComponentsListWrapper, CustomForm, Step7PageWrapper } from './Step7.style'

const Step7 = () => {

    const [hdd, setHdd] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory();
    const HDD = useSelector(state => state.HDD);
    const { register, handleSubmit } = useForm({
        defaultValues: { HDD }
    });

    useEffect(async () => {
        const { data } = await axios.get('');
        setHdd(data);
    });

    const onSubmit = (data) => {
        dispatch(chooseHDD(data.HDD));
        history.push('/Configurator/Step8');
    }


    return (
        <Step7PageWrapper>
            <ComponentsListWrapper>
                
            </ComponentsListWrapper>
        </Step7PageWrapper>
    )
}

export default Step7
