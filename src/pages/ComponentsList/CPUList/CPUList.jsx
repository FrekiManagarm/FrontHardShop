import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { CPUListPageWrapper } from './CPUList.style'

const CPUList = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`http://jsonplaceholder.typicode.com/users`).then(res => {
            const users = res.data;
            setData(users);
        })
    }, [])

    console.log(data);

    return (
        <CPUListPageWrapper>
            
        </CPUListPageWrapper>
    )
}

export default CPUList
