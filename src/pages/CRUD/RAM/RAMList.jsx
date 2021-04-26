import React, { useState, useEffect } from 'react';
import { Drawer, Divider, Row, Col } from 'antd';
import GetAPIData from '../../../data/get_api_data';
import { Button, RAMCRUDWrapper, InputWrapper, Item, ItemList, MiniCardWrapper, Title } from './RAM.style';
import RAMModale from '../../../components/Modale/ModaleRAM';

const RAMList = () => {

    const [RAM, setRAM] = useState([]);
    const [visibleEdit, setVisibleEdit] = useState(false);
    const [visibleNew, setVisibleNew] = useState(false);
    const [currentRAM, setCurrentRAM] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

    const onCloseEdit = () => {
        setVisibleEdit(false)
    }

    const onCloseNew = () => {
        setVisibleNew(false)
    }

    useEffect(() => {
        const endpoint = `RAMs`;

        GetAPIData(endpoint).then(
            res => {
                setRAM(res.data)
                console.log(res.data, 'data');
            }
        ).catch(e => console.log(e));
    }, []);

    const setActiveRAM = (ram, index) => {
        setCurrentRAM(ram);
        setCurrentIndex(index);
    }

    return (
        <RAMCRUDWrapper>
            <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'center', marginBottom: "30px" }}>
                <Title style={{ paddingRight: "100px" }}>Liste des RAM</Title>
                <Button onClick={() => setVisibleNew(true)}>
                    Nouveau
                </Button>
            </div>
                <div style={{ marginTop: 10, display: "flex", flexDirection: 'row', justifyContent: "space-between" }}>
                    <Col xl={12}>
                        <InputWrapper>
                            {RAM && RAM.map((ram, index) => (
                                <ItemList>
                                    <Item className={"list-items" + (index === currentIndex ? "active" : "")}
                                        onClick={() => setActiveRAM(ram, index)}
                                        key={index}
                                    >
                                        {ram.nom}
                                    </Item>
                                </ItemList>
                            ))}
                        </InputWrapper>
                        <RAMModale revele={visibleNew} cache={() => setVisibleNew(!visibleNew)} />
                    </Col>
                    <Col xl={12}>
                        <MiniCardWrapper style={{ borderRadius: "12px" }}>
                            {currentRAM ? (
                                    <div>
                                        <div>
                                            <img src={currentRAM.image} style={{ width: "150px", height: "150px" }} />
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Capacité :</strong>
                                            </label>{" "}
                                            {currentRAM.capacité}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Fréquence :</strong>
                                            </label>{" "}
                                            {currentRAM.fréquence}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Image :</strong>
                                            </label>{" "}
                                            {currentRAM.image}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Interface :</strong>
                                            </label>{" "}
                                            {currentRAM.interface}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Latence :</strong>
                                            </label>{" "}
                                            {currentRAM.latence}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Marque :</strong>
                                            </label>{" "}
                                            {currentRAM.marque}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Nom :</strong>
                                            </label>{" "}
                                            {currentRAM.nom}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Quantité :</strong>
                                            </label>{" "}
                                            {currentRAM.quantité}
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
        </RAMCRUDWrapper>
    )
}

export default RAMList

