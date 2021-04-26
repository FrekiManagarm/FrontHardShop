import styled from 'styled-components';

export const GPUListPageWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;

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
    flex-direction: row;
    font-family: 'Nunito';
    justify-content: center;
    align-items: center;
    height: 550px;
    width: 750px;
    background: rgb(214, 105, 127);
    top: 50%;
    left: 30%;
    border-radius: 12px;
    transform: translate(25%, -25%);

    .onClose {
        position: absolute;
        right: 15px;
        top: 15px;
    }

`;

export const Image = styled.img`
    width: 150px;
    height: 150px;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
`;