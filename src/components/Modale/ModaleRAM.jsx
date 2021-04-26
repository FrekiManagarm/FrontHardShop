import React from 'react'
import AddRAM from '../../pages/CRUD/RAM/AddRAM';
import { Overlay, Wrapper } from './Modale.style';

const RAMModale = ({ revele, cache }) => revele ? (

    <React.Fragment>
        <Overlay />

        <Wrapper>
            <button type='button' className="close" onClick={cache}>
                &times;
            </button>
        <AddRAM onClose={cache} />
        </Wrapper>

    </React.Fragment>

) : null;

export const UpdateRAMModale = ({ revele, cache, state }) => revele ? (

    <React.Fragment>
        <Overlay />

        <Wrapper>
            <button type='button' className="close" onClick={cache}>
                &times;
            </button>
            
        </Wrapper>

    </React.Fragment>

) : null;

export default RAMModale