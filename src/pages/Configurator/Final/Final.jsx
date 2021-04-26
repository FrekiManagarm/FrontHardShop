import React from 'react';
import { FinalPageWrapper } from './Final.style';
import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';


const Final = () => {

    const state = useSelector(state => state);
    console.log(state);
    const CPU = useSelector(state => state.config.CPU)
    const GPU = useSelector(state => state.config.GPU)
    const token = localStorage.getItem("token");

    return (
        <FinalPageWrapper>
            {token ? 
                <div>
                    <pre>{JSON.stringify(state, null, 2)}</pre>
                    <Link to="/">Start Over</Link>
                </div>
            : 
                <Redirect to="/" />
            }
        </FinalPageWrapper>
    )
}

export default Final
