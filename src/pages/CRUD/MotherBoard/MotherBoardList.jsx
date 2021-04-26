import React, { useState, useEffect } from 'react';
import { Drawer, Divider, Row, Col } from 'antd';
import GetAPIData from '../../../data/get_api_data';
import { Button, MotherBoardCRUDWrapper, CustomSticky, InputWrapper, Item, ItemList, MiniCardWrapper, Title } from './MotherBoard.style';
import MotherBoardModale from '../../../components/Modale/ModaleMotherBoard';

const MotherBoardList = () => {

    const [MotherBoard, setMotherBoard] = useState([]);
    const [visibleEdit, setVisibleEdit] = useState(false);
    const [visibleNew, setVisibleNew] = useState(false);
    const [currentMotherBoard, setCurrentMotherBoard] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

    const onCloseEdit = () => {
        setVisibleEdit(false)
    }

    const onCloseNew = () => {
        setVisibleNew(false)
    }

    useEffect(() => {
        const endpoint = `CarteMeres`;

        GetAPIData(endpoint).then(
            res => {
                setMotherBoard(res.data)
                console.log(res.data, 'data');
            }
        ).catch(e => console.log(e));
    }, []);

    const setActiveMB = (mb, index) => {
        setCurrentMotherBoard(mb);
        setCurrentIndex(index);
    }

    return (
        <MotherBoardCRUDWrapper>
            <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'center', marginBottom: "30px" }}>
                <Title style={{ paddingRight: "100px" }}>Liste des Carte Mères</Title>
                <Button onClick={() => setVisibleNew(true)}>
                    Nouveau
                </Button>
            </div>
                <div style={{ marginTop: 10, display: "flex", flexDirection: 'row', justifyContent: "space-between" }}>
                    <Col xl={12}>
                        <InputWrapper>
                            {MotherBoard && MotherBoard.map((mb, index) => (
                                <ItemList>
                                    <Item className={"list-items" + (index === currentIndex ? "active" : "")}
                                        onClick={() => setActiveMB(mb, index)}
                                        key={index}
                                    >
                                        {mb.nom}
                                    </Item>
                                </ItemList>
                            ))}
                        </InputWrapper>
                        <MotherBoardModale revele={visibleNew} cache={() => setVisibleNew(!visibleNew)} />
                    </Col>
                    <Col xl={12}>
                        <MiniCardWrapper style={{ borderRadius: "12px" }}>
                            {currentMotherBoard ? (
                                    <div>
                                        <div>
                                            <img src={currentMotherBoard.image} style={{ width: "150px", height: "150px" }} />
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Nom :</strong>
                                            </label>{" "}
                                            {currentMotherBoard.nom}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Image :</strong>
                                            </label>{" "}
                                            {currentMotherBoard.image}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>RGB :</strong>
                                            </label>{" "}
                                            {currentMotherBoard.RGB}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Alimentation Inclus :</strong>
                                            </label>{" "}
                                            {currentMotherBoard.alim_inclus}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Couleur :</strong>
                                            </label>{" "}
                                            {currentMotherBoard.couleur}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Façade Latérale :</strong>
                                            </label>{" "}
                                            {currentMotherBoard.facade_laterale}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Format :</strong>
                                            </label>{" "}
                                            {currentMotherBoard.format}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Ventilateur :</strong>
                                            </label>{" "}
                                            {currentMotherBoard.ventilateur}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Description :</strong>
                                            </label>{" "}
                                            {currentMotherBoard.description}
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
                                            <p>Cliquer sur un Boitier ...</p>
                                        </div>
                            )}
                        </MiniCardWrapper>
                    </Col>
            </div>
        </MotherBoardCRUDWrapper>
    )
}

export default MotherBoardList

