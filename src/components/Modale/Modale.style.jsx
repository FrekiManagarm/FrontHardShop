import styled from 'styled-components'

export const Overlay = styled.div`
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export const Wrapper = styled.div`
    display: flex;
    font-family: 'Nunito';
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 700px;
    background: rgb(214, 105, 127);
    top: 50%;
    left: 30%;
    border-radius: 12px;
    transform: translate(50%, -50%);

    .close {
        position: absolute;
        right: 15px;
        top: 15px;
    }
`; 