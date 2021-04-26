import React from 'react'
import UpdateCase from '../../pages/CRUD/Case/Case';
import AddMotherBoard from '../../pages/CRUD/MotherBoard/AddMotherBoard';
import { Overlay, Wrapper } from './Modale.style';

const MotherBoardModale = ({ revele, cache }) => revele ? (

    <React.Fragment>
        <Overlay />

        <Wrapper>
            <button type='button' className="close" onClick={cache}>
                &times;
            </button>
            <AddMotherBoard onClose={cache} />
        </Wrapper>

    </React.Fragment>

) : null;

export const UpdateMotherBoardModale = ({ revele, cache, state }) => revele ? (

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

export default MotherBoardModale