import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 570px;
    word-wrap: break-word;
    background-color: var(--bg);
    background-clip: border-box;
    border: 1px solid var(--text);
    border-radius: 0.25rem;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    overflow: hidden;

    /* @media (max-width: 860px){
        width: ; 
        height: ;
    } */
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem;
`;

export const Title = styled.h1`
    font-family: 'Nunito';
    font-size: 1.25rem;
    font-weight: bold;
    margin: 0;
`;

export const Text = styled.p`
    font-family: 'Nunito';
    line-height: 20px;
    color: #6c757d;
`;

export const Image = styled.img`
    width: 100%;
`;

export const Button = styled.button`
    -webkit-appearance: none;
            appearance: none;
    -webkit-filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.1));
            filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.1));
    -webkit-transition: all .5s ease;
            filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.1));
    -webkit-transition: all .5s ease;
            transition: all .5s ease;
    cursor: pointer;
    margin-top: auto;
    width: 100%;
    color: black;
    background: #FDD800;
    border-radius: 30px;
    display: block;
    font-weight: bold;
    text-align: center;
    vertical-align: center;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    
    &:hover {
        color: #FFFFFF;
        background: #222222;
        -webkit-filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.2));
            filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.2));
    }
`;