import React from 'react'
import AddSSD from '../../pages/CRUD/SSD/AddSSD';
import { Overlay, Wrapper } from './Modale.style';

const SSDModale = ({ revele, cache }) => revele ? (

    <React.Fragment>
        <Overlay />

        <Wrapper>
            <button type='button' className="close" onClick={cache}>
                &times;
            </button>
        <AddSSD onClose={cache} />
        </Wrapper>

    </React.Fragment>

) : null;

export const UpdateSSDModale = ({ revele, cache, state }) => revele ? (

    <React.Fragment>
        <Overlay />

        <Wrapper>
            <button type='button' className="close" onClick={cache}>
                &times;
            </button>
            
        </Wrapper>

    </React.Fragment>

) : null;

export default SSDModale