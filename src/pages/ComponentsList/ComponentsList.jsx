import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import CoolTabs from 'react-cool-tabs';
import { Card } from '../../components/Card/Card';
import { ComponentsListPageWrapper } from './ComponentsList.style';
import CaseList from '../../container/Listing/CaseList/CaseList';
import CoolingList from '../../container/Listing/CoolingList/CoolingList';
import GetAPIData from '../../data/get_api_data';
import Onglet from '../../components/Onglet/Onglet';

const ComponentsList = () => {

    const { TabPane } = Tabs;

    const [Case, setCase] = useState([]);

    useEffect(() => {
        const endpoint = 'Boitiers'
        GetAPIData(endpoint).then(
            res => {
                setCase(res.data)
                console.log(res.data)
            }
        )
    }, [])

    return (
        <ComponentsListPageWrapper>
            <Onglet />
        </ComponentsListPageWrapper >
    )
}

export default ComponentsList
