import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

// ---------------------------------------------------------------

import { chooseRAM } from '../rootSlice';
import { CustomForm, Step3PageWrapper } from './Step3.style';

const Step3 = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const RAM = useSelector(state => state.RAM);
    const {register, handleSubmit } = useForm({
        defaultValues: { RAM }
    })

    const onSubmit = (data) => {
        dispatch(chooseRAM(data.RAM));
        history.push('/Configurator/Step4');
    }

    return (
        <Step3PageWrapper>
            <CustomForm onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="RAM">Choisissez votre kit de Mémoire Vive :</label>
                <select id="RAM" name="RAM" ref={register}>
                    <option value="Corsair">Corsair</option>
                    <option value="Crucial">Crucial</option>
                    <option value="Trident Z">Trident Z</option>
                </select>
                <button>Refroidissement</button>
            </CustomForm>
        </Step3PageWrapper>
    )
}

export default Step3
