import React from 'react'
import AddCPU from '../../pages/CRUD/CPU/AddCPU';
import UpdateCPU from '../../pages/CRUD/CPU/CPU';
import { Overlay, Wrapper } from './Modale.style';

const CPUModale = ({ revele, cache }) => revele ? (

    <React.Fragment>
        <Overlay />

        <Wrapper>
            <button type='button' className="close" onClick={cache}>
                &times;
            </button>
            <AddCPU onClose={cache} />
        </Wrapper>

    </React.Fragment>

) : null;

export const UpdateCPUModale = ({ revele, cache, state }) => revele ? (

    <React.Fragment>
        <Overlay />

        <Wrapper>
            <button type='button' className="close" onClick={cache}>
                &times;
            </button>
            <UpdateCPU onClose={cache} state={state} />
        </Wrapper>

    </React.Fragment>

) : null;

export default CPUModale