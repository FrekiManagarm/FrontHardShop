import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { PSUListPageWrapper } from './PSUList.style'

const PSUList = () => {

    const [data, setData] = useState([]);

    useEffect(async () => {
        const { data } = await axios.get('');
        setData(data);
    })

    return (
        <PSUListPageWrapper>
            
        </PSUListPageWrapper>
    )
}

export default PSUList
