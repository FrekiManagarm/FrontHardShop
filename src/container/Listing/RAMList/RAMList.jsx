import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { RAMListPageWrapper } from './RAMList.style'

const RAMList = () => {

    const [data, setData] = useState([]);

    useEffect(async () => {
        const { data } = await axios.get('');
        setData(data);
    }, []);

    console.log(data, 'data');

    return (
        <RAMListPageWrapper>
            
        </RAMListPageWrapper>
    )
}

export default RAMList
