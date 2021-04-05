import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { CoolingListPageWrapper } from './CoolingList.style';

const CoolingList = () => {

    const [data, setData] = useState([]);

    useEffect(async () => {
        const { data } = await axios.get('');
        setData(data);
    }, []);

    console.log(data, 'data');

    return (
        <CoolingListPageWrapper>
            
        </CoolingListPageWrapper>
    )
}

export default CoolingList
