import React from 'react'
import { PersonalInfosWrapper } from './PersonalInfos.style'
import { useSelector } from 'react-redux'

const PersonalInfos = () => {

    const state = useSelector(state => state.auth)

    console.log(state)

    return (
        <PersonalInfos>
            <p> {state} </p>
        </PersonalInfos>
    )
}

export default PersonalInfos
