import styled from 'styled-components';
import { Card } from '../../../components/Card/Card'

export const CaseListPageWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;



export const CustomCardImage = styled(Card.Image)`
    object-fit: cover;
    height: 350px;
`;