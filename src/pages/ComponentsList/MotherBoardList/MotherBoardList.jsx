import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MotherBoardListPageWrapper } from './MotherBoardList.style'

const MotherBoardList = () => {

    const [data, setData] = useState([]);

    useEffect(async () => {
        const { data } = await axios.get('')
        setData(data)
    })

    return (
        <MotherBoardListPageWrapper>
            
        </MotherBoardListPageWrapper>
    )
}

export default MotherBoardList
