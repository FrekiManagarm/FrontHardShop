import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { chooseHDD } from '../rootSlice';
import { CustomForm, Step7PageWrapper } from './Step7.style'

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
            <CustomForm onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="HDD">Choisissez votre Disque Dur : </label>
                <select id="HDD" name="HDD" ref={register}>
                    <option value="Crucial">Crucial</option>
                    <option value="Samsung">Seagate</option>
                    <option value="Western Digital">Western Digital</option>
                    <option value="Fujitsu">Fujitsu</option>
                    <option value="Toshiba">Toshiba</option>
                    <option value="Lenovo">Lenovo</option>
                    <option value="Dell">Dell</option>
                </select>
                <button>Alimentation</button>
            </CustomForm>
        </Step7PageWrapper>
    )
}

export default Step7
