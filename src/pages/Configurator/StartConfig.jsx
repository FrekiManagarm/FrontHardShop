import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { BeginConfigLink, StartConfigPageWrapper } from './StartConfig.style'

const StartConfig = () => {
    return (
        <StartConfigPageWrapper>
            <Navbar />
            <BeginConfigLink>
                <a href="/Configurator/Step1">Commencer une configuration</a>
            </BeginConfigLink>
        </StartConfigPageWrapper>
    )
}

export default StartConfig
