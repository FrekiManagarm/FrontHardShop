import React from 'react'
import AddHDD from '../../pages/CRUD/HDD/AddHDD';
import { Overlay, Wrapper } from './Modale.style';

const HDDModale = ({ revele, cache }) => revele ? (

    <React.Fragment>
        <Overlay />

        <Wrapper>
            <button type='button' className="close" onClick={cache}>
                &times;
            </button>
            <AddHDD onClose={cache} />
        </Wrapper>

    </React.Fragment>

) : null;

export const UpdateHDDModale = ({ revele, cache, state }) => revele ? (

    <React.Fragment>
        <Overlay />

        <Wrapper>
            <button type='button' className="close" onClick={cache}>
                &times;
            </button>

        </Wrapper>

    </React.Fragment>

) : null;

export default HDDModale