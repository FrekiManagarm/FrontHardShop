import React from 'react'
import AddCooling from '../../pages/CRUD/Cooling/AddCooling';
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

export const MdoaleUpdate = ({ revele, cache }) => revele ? (
    <React.Fragment>
        <Overlay />

        <Wrapper>
            <button type='button' onClick={cache}>
                &times;
            </button>
            
        </Wrapper>
    </React.Fragment>
) : null

export default ModaleCooling
