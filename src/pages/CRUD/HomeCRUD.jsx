import React, { useState } from 'react'
import { Redirect } from 'react-router';
import './HomeCRUD.css';
import CaseList from './Case/CaseList';
import CoolingList from './Cooling/CoolingList';
import SSDList from './SSD/SSDList';
import HDDList from './HDD/HDDList';
import PSUList from './PSU/PSUList';
import MotherBoardList from './MotherBoard/MotherBoardList';
import RAMList from './RAM/RAMList';
import CPUList from './CPU/CPUList';
import GPUList from './GPU/GPUList';


const CRUD = () => {

    const [stateOnglets, setStateOnglets] = useState(1);
    const token = localStorage.getItem("token")

    const goCase = () => {
        setStateOnglets(1)
    }

    const goCooling = () => {
        setStateOnglets(2)
    }

    const goCPU = () => {
        setStateOnglets(3)
    }

    const goGPU = () => {
        setStateOnglets(4)
    }

    const goHDD = () => {
        setStateOnglets(5)
    }

    const goSSD = () => {
        setStateOnglets(6)
    }

    const goMB = () => {
        setStateOnglets(7)
    }

    const goRAM = () => {
        setStateOnglets(8)
    }

    const goPSU = () => {
        setStateOnglets(9)
    }

    return (
        <div className="HomeCRUDWrapper">
            {token ? 
                <div>
                    <div className="contBtn">
                        <div className={`onglets ${stateOnglets === 1 ? 'active' : ''}`} onClick={goCase}>Boitiers</div>
                        <div className={`onglets ${stateOnglets === 2 ? 'active' : ''}`} onClick={goCooling}>Refroidissement</div>
                        <div className={`onglets ${stateOnglets === 3 ? 'active' : ''}`} onClick={goCPU}>Processeur</div>
                        <div className={`onglets ${stateOnglets === 4 ? 'active' : ''}`} onClick={goGPU}>Carte Graphique</div>
                        <div className={`onglets ${stateOnglets === 5 ? 'active' : ''}`} onClick={goHDD}>Disque Dur</div>
                        <div className={`onglets ${stateOnglets === 6 ? 'active' : ''}`} onClick={goSSD} >Disque SSD</div>
                        <div className={`onglets ${stateOnglets === 7 ? 'active' : ''}`} onClick={goMB}>Carte Mère</div>
                        <div className={`onglets ${stateOnglets === 8 ? 'active' : ''}`} onClick={goRAM}>Mémoire Vive</div>
                        <div className={`onglets ${stateOnglets === 9 ? 'active' : ''}`} onClick={goPSU}>Alimentation</div>
                    </div>
                    <div className="container">
                        {stateOnglets === 1 ? 
                            <div className="contenu">
                                <CaseList />
                            </div>
                        : stateOnglets === 2 ?
                            <div className="contenu">
                                <CoolingList />
                            </div>
                        : stateOnglets === 3 ?
                            <div className="contenu">
                                <CPUList />
                            </div>
                        : stateOnglets === 4 ?
                            <div className="contenu">
                                <GPUList />
                            </div>
                        : stateOnglets === 5 ? 
                            <div className="contenu">
                                <HDDList />
                            </div>
                        : stateOnglets === 6 ?
                            <div className="contenu">
                                <SSDList />
                            </div>
                        : stateOnglets === 7 ?
                            <div className="contenu">
                                <MotherBoardList />
                            </div>
                        : stateOnglets === 8 ?
                            <div className="contenu">
                                <RAMList />
                            </div>
                        : stateOnglets === 9 ? 
                            <div className="contenu">
                                <PSUList />
                            </div>
                        : null
                        }
                    </div>
                </div>
            : <Redirect to="/" />}
        </div>
    )
}

export default CRUD
