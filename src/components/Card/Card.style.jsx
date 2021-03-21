import styled from 'styled-components';

export const StyledContainer = styled.div`
    border: ${(props) => `1px solid ${props.theme.border.cool}`};
    padding: 25px 12px 18px;
    background: ${(props) => `linear-gradient(
        45deg, ${props.theme.primary.main},
        ${props.theme.secondary.main}
    )`}
`;

export const Title = styled.h2`
    color: #fff;
    font-weight: 300;
    @media (max-width: 500px) {
        font-size: 1rem;
    }
`;

export const Date = styled.div`
    color: #ccc;
    font-weight: 300;
    margin: 6px 0;
    @media (max-width: 500px) {
        font-size: 0.8rem;
    }
`;

export const Description = styled.p`
    color: #fff;
    font-weight: 300;
    @media (max-width: 500px) {
        font-size: 0.75rem;
    }
`;

export const Actions = styled.div`
    color: #333;
    display: flex;
    align-items: center;
    svg {
        transform: translateY(2px);
        margin-right: 5px;
    }
    @media (max-width: 500px) {
        flex-direction: column;
        & button {
            width: 100%;
            margin-bottom: 4px;
            font-size: 0.65rem;            
        }
    }
`;