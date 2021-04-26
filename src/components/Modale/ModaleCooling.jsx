import React from 'react'
import AddCooling from '../../pages/CRUD/Cooling/AddCooling';
import UpdateCooling from '../../pages/CRUD/Cooling/Cooling';
import { Overlay, Wrapper } from './Modale.style';

const ModaleCooling = ({revele, cache}) => revele ? (

    <React.Fragment>
        <Overlay />

        <Wrapper>
            <button type='button' className="close" onClick={cache}>
                &times;
            </button>
            <AddCooling onClose={cache} />
        </Wrapper>
    </React.Fragment>
) : null

export const ModaleUpdateCooling = ({ revele, cache, state }) => revele ? (
    <React.Fragment>
        <Overlay />

        <Wrapper>
            <button type='button' onClick={cache}>
                &times;
            </button>
            <UpdateCooling onClose={cache} state={state} />
        </Wrapper>
    </React.Fragment>
) : null

export default ModaleCooling
