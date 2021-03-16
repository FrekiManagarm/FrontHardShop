import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { chooseMotherBoard } from '../rootSlice';
import { CustomForm, Step2PageWrapper } from './Step2.style'

const Step2 = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const MotherBoard = useSelector(state => state.MotherBoard);
    const { register, handleSubmit } = useForm({
        defaultValues: { MotherBoard }
    })

    const onSubmit = (data) => {
        dispatch(chooseMotherBoard(data.MotherBoard));
        history.push('/Configurator/Step3');
    }

    return (
        <Step2PageWrapper>
            <CustomForm onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="MotherBoard">Choisissez votre Carte Mère: </label>
                <select id="MotherBoard" name="MotherBoard" className="motherboard-select" ref={register}>
                    <option value="Asus">Asus</option>
                    <option value="Gigabyte">Gigabyte</option>
                    <option value="MSI">MSI</option>
                    <option value="NZXT">NZXT</option>
                </select>
                <button>Mémoire Vive</button>
            </CustomForm>
        </Step2PageWrapper>
    )
}

export default Step2
