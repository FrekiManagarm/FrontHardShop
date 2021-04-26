import React from 'react'
import AddGPU from '../../pages/CRUD/GPU/AddGPU';
import UpdateGPU from '../../pages/CRUD/GPU/GPU';
import { Overlay, Wrapper } from './Modale.style';

const GPUModale = ({ revele, cache }) => revele ? (

    <React.Fragment>
        <Overlay />

        <Wrapper>
            <button type='button' className="close" onClick={cache}>
                &times;
            </button>
           <AddGPU onClose={cache} />
        </Wrapper>

    </React.Fragment>

) : null;

export const UpdateGPUModale = ({ revele, cache, state }) => revele ? (

    <React.Fragment>
        <Overlay />

        <Wrapper>
            <button type='button' className="close" onClick={cache}>
                &times;
            </button>
            <UpdateGPU />
        </Wrapper>

    </React.Fragment>

) : null;

export default GPUModale