import styled from 'styled-components';

export const StyledContainer = styled.div`
    margin: 100px;
    border: 1px solid var(--text);
    border-radius: 15px;
    box-shadow: 10px 10px 1px 1px rgba(0, 0, 0, 0.2);
    width: 25%;
    padding: 25px 12px 18px;
    background-image: linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%);
    &:hover {

    }
`;

export const Title = styled.h2`
    color: var(--text);
    font-weight: bold;
    @media (max-width: 500px) {
        font-size: 1rem;
    }
`;

export const Date = styled.div`
    color: var(--text);
    font-weight: bold;
    margin: 6px 0;
    @media (max-width: 500px) {
        font-size: 0.8rem;
    }
`;

export const Description = styled.p`
    color: var(--text);
    font-weight: bold;
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

export const Action = styled.button`
    margin: 0 5px;
    padding: 8px 14px;
    background: rgba(155, 155, 155, 0.2);
    color: var(--bg);
    cursor: pointer;
    border: 1px solid #fff;
    outline: 0;
    font-weight: 300;
    :hover {
        opacity: 0.8;
    }
    :active {
        background: var(--bg);
    }
`;

export const StyledPhoto = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 1px solid var(--bg);
`;