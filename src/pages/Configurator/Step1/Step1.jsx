import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { chooseCPU } from '../rootSlice';
import { Step1PageWrapper } from './Step1.style'; 

const Step1 = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const CPU = useSelector(state => state.CPU);
    const { register, handleSubmit } = useForm({
        defaultValues: { CPU }
    })

    const onSubmit = (data) => {
        dispatch(chooseCPU(data.CPU));
        history.push('/Configurator/Step2');
    }

    return (
        <Step1PageWrapper>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="CPU">Choisissez votre processeur :</label>
                <select id="CPU" name="CPU" ref={register}>
                    <option value="Intel">Intel</option>
                    <option value="AMD">AMD</option>
                </select>
                <button>Carte Mère</button>
            </form>
        </Step1PageWrapper>
    )
}

export default Step1
