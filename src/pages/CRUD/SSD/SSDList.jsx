import React, { useState, useEffect } from 'react';
import { Drawer, Divider, Row, Col } from 'antd';
import GetAPIData from '../../../data/get_api_data';
import { Button, SSDCRUDWrapper, InputWrapper, Item, ItemList, MiniCardWrapper, Title } from './SSD.style';
import SSDModale from '../../../components/Modale/ModaleSSD';

const SSDList = () => {

    const [SSD, setSSD] = useState([]);
    const [visibleEdit, setVisibleEdit] = useState(false);
    const [visibleNew, setVisibleNew] = useState(false);
    const [currentSSD, setCurrentSSD] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

    const onCloseEdit = () => {
        setVisibleEdit(false)
    }

    const onCloseNew = () => {
        setVisibleNew(false)
    }

    useEffect(() => {
        const endpoint = `SSDs`;

        GetAPIData(endpoint).then(
            res => {
                setSSD(res.data)
                console.log(res.data, 'data');
            }
        ).catch(e => console.log(e));
    }, []);

    const setActiveSSD = (ssd, index) => {
        setCurrentSSD(ssd);
        setCurrentIndex(index);
    }

    return (
        <SSDCRUDWrapper>
            <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'center', marginBottom: "30px" }}>
                <Title style={{ paddingRight: "100px" }}>Liste des SSD</Title>
                <Button onClick={() => setVisibleNew(true)}>
                    Nouveau
                </Button>
            </div>
                <div style={{ marginTop: 10, display: "flex", flexDirection: 'row', justifyContent: "space-between" }}>
                    <Col xl={12}>
                        <InputWrapper>
                            {SSD && SSD.map((ssd, index) => (
                                <ItemList>
                                    <Item className={"list-items" + (index === currentIndex ? "active" : "")}
                                        onClick={() => setActiveSSD(ssd, index)}
                                        key={index}
                                    >
                                        {ssd.nom}
                                    </Item>
                                </ItemList>
                            ))}
                        </InputWrapper>
                        <SSDModale revele={visibleNew} cache={() => setVisibleNew(!visibleNew)} /> 
                    </Col>
                    <Col xl={12}>
                        <MiniCardWrapper style={{ borderRadius: "12px" }}>
                            {currentSSD ? (
                                    <div>
                                        <div>
                                            <img src={currentSSD.image} style={{ width: "150px", height: "150px" }} />
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Image :</strong>
                                            </label>{" "}
                                            {currentSSD.image}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Capacité :</strong>
                                            </label>{" "}
                                            {currentSSD.capacité}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Connectique :</strong>
                                            </label>{" "}
                                            {currentSSD.connectique}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Format :</strong>
                                            </label>{" "}
                                            {currentSSD.format}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Interface :</strong>
                                            </label>{" "}
                                            {currentSSD.interface}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Lecture :</strong>
                                            </label>{" "}
                                            {currentSSD.lecture}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Nom :</strong>
                                            </label>{" "}
                                            {currentSSD.nom}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Ecriture :</strong>
                                            </label>{" "}
                                            {currentSSD.ecriture}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Marque :</strong>
                                            </label>{" "}
                                            {currentSSD.marque}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Description :</strong>
                                            </label>{" "}
                                            {currentSSD.description}
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
                                            <p>Cliquer sur un SSD ...</p>
                                        </div>
                            )}
                        </MiniCardWrapper>
                    </Col>
            </div>
        </SSDCRUDWrapper>
    )
}

export default SSDList
