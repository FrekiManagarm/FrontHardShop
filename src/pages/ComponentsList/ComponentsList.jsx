import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const ComponentsList = () => {
    return (
        <Tabs>
            <TabList>
                <Tab>Processeur</Tab>
                <Tab>Carte Graphique</Tab>
            </TabList>
    // The Panels of components
            <TabPanel>
                
            </TabPanel>
            <TabPanel>

            </TabPanel>
        </Tabs>
    )
}

export default ComponentsList
