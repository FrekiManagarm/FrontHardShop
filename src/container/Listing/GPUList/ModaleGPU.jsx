import React from 'react'
import { Overlay, Wrapper, Image, Description } from './GPUList.style'

const ModaleGPU = ({ revele, cache, state }) => revele ? (
    <React.Fragment>
        <Overlay />

        <Wrapper>
            <button className="onClose" onClick={cache}>
                &times;
            </button>
            <div>
                <Image src={state.image} />
                <Description>
                    <p>Nom : {state.nom} </p>
                    <p>Fréquence : {state.frequence} </p>
                </Description>
            </div>
        </Wrapper>
    </React.Fragment>
) : null;

export default ModaleGPU
