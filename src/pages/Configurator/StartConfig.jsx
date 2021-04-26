import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router';
import { BeginConfigLink, StartConfigPageWrapper } from './StartConfig.style'

const StartConfig = () => {

    const token = localStorage.getItem("token");

    return (
        <StartConfigPageWrapper>
            {token ? 
                <BeginConfigLink to="/Configurator/Step1" >
                    Commencer une configuration
                </BeginConfigLink>
            : 
                <Redirect to="/" />
            }
        </StartConfigPageWrapper>
    )
}

export default StartConfig
