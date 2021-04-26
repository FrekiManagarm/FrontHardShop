import React, { useState, useEffect } from 'react';
import { Drawer, Divider, Row, Col } from 'antd';
import GetAPIData from '../../../data/get_api_data';
import { Button, PSUCRUDWrapper, CustomSticky, InputWrapper, Item, ItemList, MiniCardWrapper, Title } from './PSU.style';
import PSUModale from '../../../components/Modale/ModalePSU';

const PSUList = () => {

    const [PSU, setPSU] = useState([]);
    const [visibleEdit, setVisibleEdit] = useState(false);
    const [visibleNew, setVisibleNew] = useState(false);
    const [currentPSU, setCurrentPSU] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

    const onCloseEdit = () => {
        setVisibleEdit(false)
    }

    const onCloseNew = () => {
        setVisibleNew(false)
    }

    useEffect(() => {
        const endpoint = `PSUs`;

        GetAPIData(endpoint).then(
            res => {
                setPSU(res.data)
                console.log(res.data, 'data');
            }
        ).catch(e => console.log(e));
    }, []);

    const setActivePSU = (psu, index) => {
        setCurrentPSU(psu);
        setCurrentIndex(index);
    }

    return (
        <PSUCRUDWrapper>
            <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'center', marginBottom: "30px" }}>
                <Title style={{ paddingRight: "100px" }}>Liste des Alimentations</Title>
                <Button onClick={() => setVisibleNew(true)}>
                    Nouveau
                </Button>
            </div>
                <div style={{ marginTop: 10, display: "flex", flexDirection: 'row', justifyContent: "space-between" }}>
                    <Col xl={12}>
                        <InputWrapper>
                            {PSU && PSU.map((psu, index) => (
                                <ItemList>
                                    <Item className={"list-items" + (index === currentIndex ? "active" : "")}
                                        onClick={() => setActivePSU(psu, index)}
                                        key={index}
                                    >
                                        {psu.nom}
                                    </Item>
                                </ItemList>
                            ))}
                        </InputWrapper>
                        <PSUModale revele={visibleNew} cache={() => setVisibleNew(!visibleNew)} />
                    </Col>
                    <Col xl={12}>
                        <CustomSticky
                            innerZ={999}
                            className="sticky"
                            activeClass="isSticky"
                            top={202}
                            bottomBoundary="#reviewSection"
                        >
                            <MiniCardWrapper>
                            {currentPSU ? (
                                    <div>
                                        <div>
                                            <img src={currentPSU.image} style={{ width: "150px", height: "150px" }} />
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Nom :</strong>
                                            </label>{" "}
                                            {currentPSU.nom}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Image :</strong>
                                            </label>{" "}
                                            {currentPSU.image}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>RGB :</strong>
                                            </label>{" "}
                                            {currentPSU.RGB}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Alimentation Inclus :</strong>
                                            </label>{" "}
                                            {currentPSU.alim_inclus}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Couleur :</strong>
                                            </label>{" "}
                                            {currentPSU.couleur}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Façade Latérale :</strong>
                                            </label>{" "}
                                            {currentPSU.facade_laterale}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Format :</strong>
                                            </label>{" "}
                                            {currentPSU.format}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Ventilateur :</strong>
                                            </label>{" "}
                                            {currentPSU.ventilateur}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Description :</strong>
                                            </label>{" "}
                                            {currentPSU.description}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Status :</strong>
                                            </label>{" "}
                                            {currentPSU.published ? "Published" : "Pending"}
                                        </div>
                                    <div style={{ justifyContent: "center" }}>
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
                        </CustomSticky>
                    </Col>
            </div>
        </PSUCRUDWrapper>
    )
}

export default PSUList;

