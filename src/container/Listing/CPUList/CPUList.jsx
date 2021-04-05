import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { CPUListPageWrapper } from './CPUList.style'

const CPUList = () => {

    const [data, setData] = useState([]);

    useEffect(async () => {
        const { data } = await axios.get(`http://jsonplaceholder.typicode.com/users`);
        setData(data);
    }, [])

    console.log(data, 'data');

    return (
        <CPUListPageWrapper>
            
        </CPUListPageWrapper>
    )
}

export default CPUList
