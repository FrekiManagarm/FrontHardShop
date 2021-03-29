import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { CPUListPageWrapper } from './CPUList.style'

const CPUList = () => {

    const [data, setData] = useState();

    useEffect(async () => {
        const result = await axios.get(`http://jsonplaceholder.typicode.com/users`);
        setData(result.data);
    }, [])

    console.log(data);

    return (
        <CPUListPageWrapper>
            
        </CPUListPageWrapper>
    )
}

export default CPUList
