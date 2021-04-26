import React, { useState, useEffect } from 'react';
import { Drawer, Divider, Row, Col } from 'antd';
import DeleteAPIData from '../../../data/delete_api_data';
import GetAPIData from '../../../data/get_api_data';
import { Button, HDDCRUDWrapper, CustomSticky, InputWrapper, Item, ItemList, MiniCardWrapper, Title } from './HDD.style';
import HDDModale from '../../../components/Modale/ModaleHDD';

const HDDList = () => {

    const [HDD, setHDD] = useState([]);
    const [visibleEdit, setVisibleEdit] = useState(false);
    const [visibleNew, setVisibleNew] = useState(false);
    const [currentHDD, setCurrentHDD] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

    const onCloseEdit = () => {
        setVisibleEdit(false)
    }

    const onCloseNew = () => {
        setVisibleNew(false)
    }

    useEffect(() => {
        const endpoint = `HDDs`;

        GetAPIData(endpoint).then(
            res => {
                setHDD(res.data)
                console.log(res.data, 'data');
            }
        ).catch(e => console.log(e));
    }, []);

    const setActiveHDD = (hdd, index) => {
        setCurrentHDD(hdd);
        setCurrentIndex(index);
    }

    return (
        <HDDCRUDWrapper>
            <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'center', marginBottom: "30px" }}>
                <Title style={{ paddingRight: "100px" }}>Liste des Disques Durs</Title>
                <Button onClick={() => setVisibleNew(true)}>
                    Nouveau
                </Button>
            </div>
                <div style={{ marginTop: 10, display: "flex", flexDirection: 'row', justifyContent: "space-between" }}>
                    <Col xl={12}>
                        <InputWrapper>
                            {HDD && HDD.map((hdd, index) => (
                                <ItemList>
                                    <Item className={"list-items" + (index === currentIndex ? "active" : "")}
                                        onClick={() => setActiveHDD(hdd, index)}
                                        key={index}
                                    >
                                        {hdd.nom}
                                    </Item>
                                </ItemList>
                            ))}
                        </InputWrapper>
                        <HDDModale revele={visibleNew} cache={() => setVisibleNew(!visibleNew)} />
                    </Col>
                    <Col xl={12}>
                        <MiniCardWrapper style={{ borderRadius: "12px" }}>
                            {currentHDD ? (
                                    <div>
                                        <div>
                                            <img src={currentHDD.image} style={{ width: "150px", height: "150px" }} />
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Image :</strong>
                                            </label>{" "}
                                            {currentHDD.image}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>RPM :</strong>
                                            </label>{" "}
                                            {currentHDD.RPM}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Capacité :</strong>
                                            </label>{" "}
                                            {currentHDD.RGB}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Interface :</strong>
                                            </label>{" "}
                                            {currentHDD.interface}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Marque :</strong>
                                            </label>{" "}
                                            {currentHDD.marque}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Mémoire Cache :</strong>
                                            </label>{" "}
                                            {currentHDD.mémoire_cache}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Nom :</strong>
                                            </label>{" "}
                                            {currentHDD.nom}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Transfert :</strong>
                                            </label>{" "}
                                            {currentHDD.transfert}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Description :</strong>
                                            </label>{" "}
                                            {currentHDD.description}
                                        </div>
                                    <div style={{ justifyContent: "center", paddingTop: "10px" }}>
                                        <Button onClick={() => setVisibleEdit(true)}>
                                            Editer
                                        </Button>
                                        <Button onClick={async () => {
                                            const endpoint = `HDDs/${currentHDD.id}`
                                            DeleteAPIData(endpoint).then(
                                                res => {
                                                    console.log(res)
                                                }
                                            )
                                        }}>
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
        </HDDCRUDWrapper>
    )
}

export default HDDList
