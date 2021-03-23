import styled from "styled-components";
import { Link } from "react-router-dom";

export const StartConfigPageWrapper = styled.div`
    padding: 100px 100px;
    text-align: center;
`;

export const BeginConfigLink = styled(Link)`
    color: var(--text);
    border: 1px solid yellowgreen;
    padding: 10px 10px 10px 10px;
    border-radius: 5px;
    font-size: 900;
    font-weight: bolder;
    &:hover {
        position: relative;
        transform: translateY(3px);
    }
`;