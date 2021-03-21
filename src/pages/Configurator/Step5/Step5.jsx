import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { chooseGPU } from '../rootSlice';
import { CustomForm, Step5PageWrapper } from './Step5.style';

const Step5 = () => {

    const [ gpu, setGpu ] = useState([])
    const dispatch = useDispatch();
    const history = useHistory();
    const GPU = useSelector(state => state.GPU);
    const { register, handleSubmit } = useForm({
        defaultValues: { GPU }
    })

    useEffect(async () => {
        await axios.get('').then(
            res => {
                const gpus = res.data
                console.log(gpus);
                setGpu(gpus);
            }
        )
    })

    const onSubmit = (data) => {
        dispatch(chooseGPU(data.GPU));
        history.push('/Configurator/Step6');
    }

    return (
        <Step5PageWrapper>
            <CustomForm onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="GPU">Choisissez votre Carte Graphique : </label>
                <select id="GPU" name="GPU" ref={register}>
                    <option value="MSI">MSI</option>
                    <option value="Gigabyte">Gigabyte</option>
                    <option value="EVGA">EVGA</option>
                    <option value="Gainward">Gainward</option>
                    <option value="Asus">Asus</option>
                    <option value="KFA2">KFA2</option>
                    <option value="Zotac">Zotac</option>
                    <option value="Palit">Palit</option>
                </select>
                <button>SSD</button>
            </CustomForm>
        </Step5PageWrapper>
    )
}

export default Step5
