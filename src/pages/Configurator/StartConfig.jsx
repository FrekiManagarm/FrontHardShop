import React from 'react'
import { BeginConfigLink, StartConfigPageWrapper } from './StartConfig.style'

const StartConfig = () => {
    return (
        <StartConfigPageWrapper>
            <BeginConfigLink href="/Configurator/Step1">
                Commencer une configuration
            </BeginConfigLink>
        </StartConfigPageWrapper>
    )
}

export default StartConfig
