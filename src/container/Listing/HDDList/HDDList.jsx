import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { HDDListPageWrapper } from './HDDList.style'

const HDDList = () => {

    const [data, setData] = useState([]);

    useEffect(async () => {
        const { data } = await axios.get('')
        setData(data);
    }, []);

    console.log(data, 'data');

    return (
        <HDDListPageWrapper>
            
        </HDDListPageWrapper>
    )
}

export default HDDList
