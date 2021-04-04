import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SSDListPageWrapper } from './SSDList.style'

const SSDList = () => {

    const [data, setData] = useState([]);

    useEffect(async () => {
        const { data } = await axios.get('');
        setData(data);
    }, []);

    console.log(data, 'data');

    return (
        <SSDListPageWrapper>
            
        </SSDListPageWrapper>
    )
}

export default SSDList
