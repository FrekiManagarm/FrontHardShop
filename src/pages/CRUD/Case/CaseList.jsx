import React, { useState, useEffect } from 'react';
import { Drawer, Divider, Row, Col } from 'antd';
import Sticky from 'react-stickynode';
import PostAPIData from '../../../data/post_api_data';
import { Link } from "react-router-dom";
import GetAPIData from '../../../data/get_api_data';
import { Button, CaseCRUDWrapper, CustomSticky, InputWrapper, Item, ItemList, MiniCardWrapper, Title } from './Case.style';
import AddCase from './AddCase';
import UpdateCase from './Case';
import Modale from '../../../components/Modale/Modale';

const CaseList = () => {

    const [Case, setCase] = useState([]);
    const [visibleEdit, setVisibleEdit] = useState(false);
    const [visibleNew, setVisibleNew] = useState(false);
    const [currentCase, setCurrentCase] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchTitle, setSearchTitle] = useState("");

    const onCloseEdit = () => {
        setVisibleEdit(false)
    }

    const onCloseNew = () => {
        setVisibleNew(false)
    }

    useEffect(() => {
        const endpoint = `Boitiers`;

        GetAPIData(endpoint).then(
            res => {
                setCase(res.data)
                console.log(res.data, 'data');
            }
        ).catch(e => console.log(e));
    }, []);

    const onChangeSearchTitle = (e) => {
        const searchTitle = e.target.value;
        setSearchTitle(searchTitle);
    }

    const setActiveCase = (boitier, index) => {
        setCurrentCase(boitier);
        setCurrentIndex(index);
    }

    return (
        <CaseCRUDWrapper>
            <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'center', marginBottom: "30px" }}>
                <Title style={{ paddingRight: "100px" }}>Liste des Boitiers</Title>
                <Button onClick={() => setVisibleNew(true)}>
                    Nouveau
                </Button>
            </div>
                <div style={{ marginTop: 10, display: "flex", flexDirection: 'row', justifyContent: "space-between" }}>
                    <Col xl={12}>
                        <InputWrapper>
                            {Case && Case.map((boitier, index) => (
                                <ItemList>
                                    <Item className={"list-items" + (index === currentIndex ? "active" : "")}
                                        onClick={() => setActiveCase(boitier, index)}
                                        key={index}
                                    >
                                        {boitier.nom}
                                    </Item>
                                </ItemList>
                            ))}
                        </InputWrapper>
                        <Modale revele={visibleNew} cache={() => setVisibleNew(!visibleNew)} />
                        <Drawer
                            title={<h3>Mettre à jour un Boitier</h3>}
                            placement='right'
                            closable={false}
                            onClose={onCloseEdit}
                            visible={visibleEdit}
                            width={600}
                        >
                            <UpdateCase state={currentCase} onClose={onCloseEdit} />
                        </Drawer>
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
                            {currentCase ? (
                                    <div>
                                        <div>
                                            <img src={currentCase.image} style={{ width: "150px", height: "150px" }} />
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Nom :</strong>
                                            </label>{" "}
                                            {currentCase.nom}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Image :</strong>
                                            </label>{" "}
                                            {currentCase.image}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>RGB :</strong>
                                            </label>{" "}
                                            {currentCase.RGB}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Alimentation Inclus :</strong>
                                            </label>{" "}
                                            {currentCase.alim_inclus}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Couleur :</strong>
                                            </label>{" "}
                                            {currentCase.couleur}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Façade Latérale :</strong>
                                            </label>{" "}
                                            {currentCase.facade_laterale}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Format :</strong>
                                            </label>{" "}
                                            {currentCase.format}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Ventilateur :</strong>
                                            </label>{" "}
                                            {currentCase.ventilateur}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Description :</strong>
                                            </label>{" "}
                                            {currentCase.description}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Status :</strong>
                                            </label>{" "}
                                            {currentCase.published ? "Published" : "Pending"}
                                        </div>
                                    <div style={{ justifyContent: "center" }}>
                                        <Button onClick={() => setVisibleEdit(true)}>
                                            Edit
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
            {/* <div>
                <Sticky>
                {currentCase ? (
                    <div>
                        <h4>Boitier</h4>
                        <div>
                            <label>
                                <strong>Nom :</strong>
                            </label>{" "}
                            {currentCase.nom}
                        </div>
                        <div>
                            <label>
                                <strong>Image :</strong>
                            </label>{" "}
                            {currentCase.image}
                        </div>
                        <div>
                            <label>
                                <strong>RGB :</strong>
                            </label>{" "}
                            {currentCase.RGB}
                        </div>
                        <div>
                            <label>
                                <strong>Alimentation Inclus :</strong>
                            </label>{" "}
                            {currentCase.alim_inclus}
                        </div>
                        <div>
                            <label>
                                <strong>Couleur :</strong>
                            </label>{" "}
                            {currentCase.couleur}
                        </div>
                        <div>
                            <label>
                                <strong>Façade Latérale :</strong>
                            </label>{" "}
                            {currentCase.facade_laterale}
                        </div>
                        <div>
                            <label>
                                <strong>Format :</strong>
                            </label>{" "}
                            {currentCase.format}
                        </div>
                        <div>
                            <label>
                                <strong>Ventilateur :</strong>
                            </label>{" "}
                            {currentCase.ventilateur}
                        </div>
                        <div>
                            <label>
                                <strong>Description :</strong>
                            </label>{" "}
                            {currentCase.description}
                        </div>
                        <div>
                            <label>
                                <strong>Status :</strong>
                            </label>{" "}
                            {currentCase.published ? "Published" : "Pending"}
                        </div>

                        <Link
                            to={"/Case/" + currentCase.id}
                            className="badge"
                        >
                            Edit
                        </Link>
                    </div>
                ) : (
                        <div>
                            <br />
                            <p>Cliquer sur un Tutorial ...</p>
                        </div>
                )}
                </Sticky>
                {currentCase ? (
                    <div>
                        <h4>Boitier</h4>
                        <div>
                            <label>
                                <strong>Nom :</strong>
                            </label>{" "}
                            {currentCase.nom}
                        </div>
                        <div>
                            <label>
                                <strong>Image :</strong>
                            </label>{" "}
                            {currentCase.image}
                        </div>
                        <div>
                            <label>
                                <strong>RGB :</strong>
                            </label>{" "}
                            {currentCase.RGB}
                        </div>
                        <div>
                            <label>
                                <strong>Alimentation Inclus :</strong>
                            </label>{" "}
                            {currentCase.alim_inclus}
                        </div>
                        <div>
                            <label>
                                <strong>Couleur :</strong>
                            </label>{" "}
                            {currentCase.couleur}
                        </div>
                        <div>
                            <label>
                                <strong>Façade Latérale :</strong>
                            </label>{" "}
                            {currentCase.facade_laterale}
                        </div>
                        <div>
                            <label>
                                <strong>Format :</strong>
                            </label>{" "}
                            {currentCase.format}
                        </div>
                        <div>
                            <label>
                                <strong>Ventilateur :</strong>
                            </label>{" "}
                            {currentCase.ventilateur}
                        </div>
                        <div>
                            <label>
                                <strong>Description :</strong>
                            </label>{" "}
                            {currentCase.description}
                        </div>
                        <div>
                            <label>
                                <strong>Status :</strong>
                            </label>{" "}
                            {currentCase.published ? "Published" : "Pending"}
                        </div>

                        <Link
                            to={"/Case/" + currentCase.id}
                            className="badge"
                        >
                            Edit
                        </Link>
                    </div>
                ) : (
                        <div>
                            <br />
                            <p>Cliquer sur un Tutorial ...</p>
                        </div>
                )}
            </div> */}
        </CaseCRUDWrapper>
    )
}

export default CaseList
