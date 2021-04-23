import styled from 'styled-components';
import { Field } from 'formik';

export const LoginPageWrapper = styled.div`
    font-family: 'Nunito';
    display: flex;
    vertical-align: column;
    padding: 100px;
    justify-content: center;
`;

export const Title = styled.h1`
    font-family: 'Nunito';
`;

export const CustomField = styled(Field)`
    padding: 10px;
    font-size: 15px; 
`;

export const CustomInput = styled.input`
    font-size: 12px;
    font-size: max(16px, 1em);
    font-family: inherit;
    padding: 0.025rem 0.25rem;
    background-color: #ffffff;
    border: 2px solid var(--text);
    border-radius: 4px;
`;

export const CustomLabel = styled.label`
    padding-right: 10px;
`;

export const Button = styled.button`
    margin-top: 50px;
`;