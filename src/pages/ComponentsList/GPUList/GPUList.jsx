import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { GPUListPageWrapper } from './GPUList.style'

const GPUList = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        const { data } = await axios.get('');
        setData(data);
    })

    return (
        <GPUListPageWrapper>
            <pre>{JSON.stringify(data)}</pre>
        </GPUListPageWrapper>
    )
}

export default GPUList
