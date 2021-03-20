import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { chooseGPU } from '../rootSlice';
import { CustomForm, Step5PageWrapper } from './Step5.style';

const Step5 = () => {

    const [gpu, setGpu] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory();
    const GPU = useSelector(state => state.GPU);
    const { register, handleSubmit } = useForm({
        defaultValues: { GPU }
    });

    const onSubmit = (data) => {
        dispatch(chooseGPU(data.GPU));
        history.push('/Configurator/Step6');
    }

    useEffect(async () => {
        await axios.get('').then(
            res => {
                const gpus = res.data
                console.log(gpus);
                setGpu(gpus);
            }
        )
    }, []);

    return (
        <Step5PageWrapper>
            <CustomForm onSubmit={handleSubmit(onSubmit)}>  
                <label htmlFor="Carte Graphique">Choisissez votre Carte Graphique : </label>
                <select id="GPU" name="GPU" ref={register}>
                    <option value="MSI">MSI</option>
                    <option value="EVGA">EVGA</option>
                    <option value="Gainward">Gainward</option>
                    <option value="Gigabyte">Gigabyte</option>
                </select>
                <button>Alimentation</button>
            </CustomForm>
        </Step5PageWrapper>
    )
}

export default Step5
