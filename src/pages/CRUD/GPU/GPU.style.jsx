import styled from 'styled-components';

export const GPUCRUDWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const InputWrapper = styled.ul`
    display: flex;
    flex-direction: column;
`;

export const CustomSticky = styled.div`
    z-index: 0;
    border-radius: 12px;
`;

export const Title = styled.h1`
    font-family: 'Nunito';
    font-size: 40px;
`;

export const Item = styled.li`
    padding-top: 20px;
    font-family: 'Nunito';
    cursor: pointer;

    .active {

    }
`;

export const ItemList = styled.ul`

`;

export const Button = styled.button`
    
`;

export const MiniCardWrapper = styled.div`
    width: 400px;
    height: 450px;
    font-family: 'Nunito';
    padding: 40px;
    color: black;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;