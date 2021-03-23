import React from 'react'
import { FinalPageWrapper } from './Final.style';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Final = () => {

    const state = useSelector(state => state);

    return (
        <FinalPageWrapper>
            <pre>{JSON.stringify(state, null, 2)} </pre>
            <Link to="/">Start Over</Link>
        </FinalPageWrapper>
    )
}

export default Final
