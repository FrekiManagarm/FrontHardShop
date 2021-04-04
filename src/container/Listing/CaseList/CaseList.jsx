import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { CaseListPageWrapper } from './CaseList.style'

const CaseList = () => {

    const [data, setData] = useState([]);

    useEffect(async () => {
        const { data } = await axios.get('');
        setData(data);
    }, [])

    console.log(data, 'data');

    return (
        <CaseListPageWrapper>
            
        </CaseListPageWrapper>
    )
}

export default CaseList
