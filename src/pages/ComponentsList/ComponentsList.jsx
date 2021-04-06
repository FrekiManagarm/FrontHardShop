import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ComponentsListPageWrapper } from './ComponentsList.style';

const ComponentsList = () => {
    return (
        <ComponentsListPageWrapper >
            <Tabs>
                <TabList>
                    <Tab>Processeur</Tab>
                    <Tab>Carte Graphique</Tab>
                    <Tab>SSD</Tab>
                    <Tab>HDD</Tab>
                    <Tab></Tab>
                </TabList>
            // The Panels of components
                <TabPanel>
                    
                </TabPanel>
                <TabPanel>

                </TabPanel>
            </Tabs>
        </ComponentsListPageWrapper >
    )
}

export default ComponentsList