import React, { useState } from 'react'
import './AccountSettings.css';
import MyConfigs from './MyConfigs';
import PersonalInfos from './PersonalInfos';

const AccountSettings = () => {

    const [stateOnglets, setStateOnglets] = useState(1);

    const goPersonalInfos = () => {
        setStateOnglets(1)
    }

    const myConfigs = () => {
        setStateOnglets(2)
    }

    return (
        <div>
            <div className="contBtn">
                <div className={`onglets ${stateOnglets === 1 ? 'active' : ''}`} onClick={goPersonalInfos}>Infos Personnelles</div>
                <div className={`onglets ${stateOnglets === 2 ? 'active' : ''}`} onClick={myConfigs}>Mes Configurations</div>
            </div>
            <div className="container" >
                {stateOnglets === 1 ? 
                    <div className="contenu">
                        <PersonalInfos />
                    </div>
                : stateOnglets === 2 ?
                    <div className="contenu">
                        <MyConfigs />
                    </div>
                 : null }
            </div>
        </div>
    )
}

export default AccountSettings
