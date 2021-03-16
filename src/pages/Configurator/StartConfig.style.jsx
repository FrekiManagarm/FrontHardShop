import styled from "styled-components";
import { Link } from "react-router-dom";

export const StartConfigPageWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    padding: 100px 100px;
`;

export const BeginConfigLink = styled(Link)`
    padding-top: 20px;
    color: var(--text);
    font-size: 900;
    font-weight: bolder;
`;