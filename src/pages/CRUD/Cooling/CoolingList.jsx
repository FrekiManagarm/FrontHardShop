import React, { useState, useEffect } from 'react';
import { Drawer, Divider, Row, Col } from 'antd';
import GetAPIData from '../../../data/get_api_data';
import Modale, { UpdateCaseModale } from '../../../components/Modale/Modale';
import { CoolingCRUDWrapper, MiniCardWrapper, Title, InputWrapper, Item, ItemList, Button } from './Cooling.style';
import ModaleCooling from '../../../components/Modale/ModaleCooling';

const CoolingList = () => {

    const [Cooling, setCooling] = useState([]);
    const [visibleEdit, setVisibleEdit] = useState(false);
    const [visibleNew, setVisibleNew] = useState(false);
    const [currentCooling, setCurrentCooling] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

    const onCloseEdit = () => {
        setVisibleEdit(false)
    }

    const onCloseNew = () => {
        setVisibleNew(false)
    }

    useEffect(() => {
        const endpoint = `Coolings`;

        GetAPIData(endpoint).then(
            res => {
                setCooling(res.data)
                console.log(res.data, 'data');
            }
        ).catch(e => console.log(e));
    }, []);

    const setActiveCooling = (cooling, index) => {
        setCurrentCooling(cooling);
        setCurrentIndex(index);
    }

    return (
        <CoolingCRUDWrapper>
            <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'center', marginBottom: "30px" }}>
                <Title style={{ paddingRight: "100px" }}>Liste des Refroidissements</Title>
                <Button onClick={() => setVisibleNew(true)}>
                    Nouveau
                </Button>
            </div>
                <div style={{ marginTop: 10, display: "flex", flexDirection: 'row', justifyContent: "space-between" }}>
                    <Col xl={12}>
                        <InputWrapper>
                            {Cooling && Cooling.map((cooling, index) => (
                                <ItemList>
                                    <Item className={"list-items" + (index === currentIndex ? "active" : "")}
                                        onClick={() => setActiveCooling(cooling, index)}
                                        key={index}
                                    >
                                        {cooling.nom}
                                    </Item>
                                </ItemList>
                            ))}
                        </InputWrapper>
                        <ModaleCooling revele={visibleNew} cache={() => setVisibleNew(!visibleNew)} />
                    </Col>
                    <Col xl={12}>
                        <MiniCardWrapper style={{ borderRadius: "12px" }}>
                            {currentCooling ? (
                                    <div>
                                        <div>
                                            <img src={currentCooling.image} style={{ width: "150px", height: "150px" }} />
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Bruit :</strong>
                                            </label>{" "}
                                            {currentCooling.bruit}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Format :</strong>
                                            </label>{" "}
                                            {currentCooling.format}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Image :</strong>
                                            </label>{" "}
                                            {currentCooling.image}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Marque:</strong>
                                            </label>{" "}
                                            {currentCooling.marque}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Matériaux :</strong>
                                            </label>{" "}
                                            {currentCooling.matériaux}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Nom :</strong>
                                            </label>{" "}
                                            {currentCooling.nom}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Socket :</strong>
                                            </label>{" "}
                                            {currentCooling.socket}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Type :</strong>
                                            </label>{" "}
                                            {currentCooling.type}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Description :</strong>
                                            </label>{" "}
                                            {currentCooling.description}
                                        </div>
                                    <div style={{ justifyContent: "center", paddingTop: "10px" }}>
                                        <Button onClick={() => setVisibleEdit(true)}>
                                            Editer
                                        </Button>
                                        <Button>
                                            Supprimer
                                        </Button>
                                    </div>
                                    </div>
                                ) : (
                                        <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center'}}>
                                            <br />
                                            <p>Cliquer sur un Refroidissement ...</p>
                                        </div>
                            )}
                        </MiniCardWrapper>
                    </Col>
            </div>
        </CoolingCRUDWrapper>
    )
}

export default CoolingList
