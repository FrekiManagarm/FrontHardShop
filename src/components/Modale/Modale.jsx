import React from 'react'
import AddCase from '../../pages/CRUD/Case/AddCase'
import UpdateCase from '../../pages/CRUD/Case/Case';
import { Overlay, Wrapper } from './Modale.style';

const Modale = ({ revele, cache }) => revele ? (

    <React.Fragment>
        <Overlay />

        <Wrapper>
            <button type='button' className="close" onClick={cache}>
                &times;
            </button>
            <AddCase onClose={cache} />
        </Wrapper>

    </React.Fragment>

) : null;

export const UpdateCaseModale = ({ revele, cache, state }) => revele ? (

    <React.Fragment>
        <Overlay />

        <Wrapper>
            <button type='button' className="close" onClick={cache}>
                &times;
            </button>
            <UpdateCase onClose={cache} state={state} />
        </Wrapper>

    </React.Fragment>

) : null;

export default Modale
