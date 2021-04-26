import React from 'react'
import AddCase from '../../pages/CRUD/Case/AddCase'
import UpdateCase from '../../pages/CRUD/Case/Case';
import AddPSU from '../../pages/CRUD/PSU/AddPSU';
import { Overlay, Wrapper } from './Modale.style';

const PSUModale = ({ revele, cache }) => revele ? (

    <React.Fragment>
        <Overlay />

        <Wrapper>
            <button type='button' className="close" onClick={cache}>
                &times;
            </button>
            <AddPSU onClose={cache} />
        </Wrapper>

    </React.Fragment>

) : null;

export const UpdatePSUModale = ({ revele, cache, state }) => revele ? (

    <React.Fragment>
        <Overlay />

        <Wrapper>
            <button type='button' className="close" onClick={cache}>
                &times;
            </button>
            
        </Wrapper>

    </React.Fragment>

) : null;

export default PSUModale