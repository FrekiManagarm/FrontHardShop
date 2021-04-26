import React, { useState, useEffect } from 'react';
import { Col } from 'antd';
import CPUModale from '../../../components/Modale/ModaleCPU';
import GetAPIData from '../../../data/get_api_data';
import { Button, CPUCRUDWrapper, CustomSticky, InputWrapper, Item, ItemList, MiniCardWrapper, Title } from './CPU.style';

const CaseList = () => {

    const [CPU, setCPU] = useState([]);
    const [visibleEdit, setVisibleEdit] = useState(false);
    const [visibleNew, setVisibleNew] = useState(false);
    const [currentCPU, setCurrentCPU] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

    const onCloseEdit = () => {
        setVisibleEdit(false)
    }

    const onCloseNew = () => {
        setVisibleNew(false)
    }

    useEffect(() => {
        const endpoint = `CPUs`;

        GetAPIData(endpoint).then(
            res => {
                setCPU(res.data)
                console.log(res.data, 'data');
            }
        ).catch(e => console.log(e));
    }, []);

    const setActiveCPU = (cpu, index) => {
        setCurrentCPU(cpu);
        setCurrentIndex(index);
    }

    return (
        <CPUCRUDWrapper>
            <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'center', marginBottom: "30px" }}>
                <Title style={{ paddingRight: "100px" }}>Liste des Processeurs</Title>
                <Button onClick={() => setVisibleNew(true)}>
                    Nouveau
                </Button>
            </div>
                <div style={{ marginTop: 10, display: "flex", flexDirection: 'row', justifyContent: "space-between" }}>
                    <Col xl={12}>
                        <InputWrapper>
                            {CPU && CPU.map((cpu, index) => (
                                <ItemList>
                                    <Item className={"list-items" + (index === currentIndex ? "active" : "")}
                                        onClick={() => setActiveCPU(cpu, index)}
                                        key={index}
                                    >
                                        {cpu.nom}
                                    </Item>
                                </ItemList>
                            ))}
                        </InputWrapper>
                        <CPUModale revele={visibleNew} cache={() => setVisibleNew(!visibleNew)} />
                    </Col>
                    <Col xl={12}>
                        <MiniCardWrapper style={{ borderRadius: "12px" }}>
                            {currentCPU ? (
                                    <div>
                                        <div>
                                            <img src={currentCPU.image} style={{ width: "150px", height: "150px" }} />
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Nom :</strong>
                                            </label>{" "}
                                            {currentCPU.nom}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Nb Coeurs :</strong>
                                            </label>{" "}
                                            {currentCPU.nb_coeur}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Nb Threads :</strong>
                                            </label>{" "}
                                            {currentCPU.nb_threads}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Fréquence :</strong>
                                            </label>{" "}
                                            {currentCPU.frequence}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Fréquence Boost :</strong>
                                            </label>{" "}
                                            {currentCPU.frequence_boost}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Cache :</strong>
                                            </label>{" "}
                                            {currentCPU.cache}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Architecture :</strong>
                                            </label>{" "}
                                            {currentCPU.architecture}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Type :</strong>
                                            </label>{" "}
                                            {currentCPU.type}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Socket :</strong>
                                            </label>{" "}
                                            {currentCPU.socket}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Description :</strong>
                                            </label>{" "}
                                            {currentCPU.description}
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
        </CPUCRUDWrapper>
    )
}

export default CaseList
