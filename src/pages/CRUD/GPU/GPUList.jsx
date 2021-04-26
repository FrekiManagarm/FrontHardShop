import React, { useState, useEffect } from 'react';
import { Col } from 'antd';
import GetAPIData from '../../../data/get_api_data';
import GPUModale from '../../../components/Modale/ModaleGPU';
import { Button, GPUCRUDWrapper, CustomSticky, InputWrapper, Item, ItemList, MiniCardWrapper, Title } from './GPU.style';

const GPUList = () => {

    const [GPU, setGPU] = useState([]);
    const [visibleEdit, setVisibleEdit] = useState(false);
    const [visibleNew, setVisibleNew] = useState(false);
    const [currentGPU, setCurrentGPU] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

    const onCloseEdit = () => {
        setVisibleEdit(false)
    }

    const onCloseNew = () => {
        setVisibleNew(false)
    }

    useEffect(() => {
        const endpoint = `GPUs`;

        GetAPIData(endpoint).then(
            res => {
                setGPU(res.data)
                console.log(res.data, 'data');
            }
        ).catch(e => console.log(e));
    }, []);

    const setActiveGPU = (gpu, index) => {
        setCurrentGPU(gpu);
        setCurrentIndex(index);
    }

    return (
        <GPUCRUDWrapper>
            <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'center', marginBottom: "30px" }}>
                <Title style={{ paddingRight: "100px" }}>Liste des Cartes Graphiques</Title>
                <Button onClick={() => setVisibleNew(true)}>
                    Nouveau
                </Button>
            </div>
                <div style={{ marginTop: 10, display: "flex", flexDirection: 'row', justifyContent: "space-between" }}>
                    <Col xl={12}>
                        <InputWrapper>
                            {GPU && GPU.map((gpu, index) => (
                                <ItemList>
                                    <Item className={"list-items" + (index === currentIndex ? "active" : "")}
                                        onClick={() => setActiveGPU(gpu, index)}
                                        key={index}
                                    >
                                        {gpu.nom}.
                                    </Item>
                                </ItemList>
                            ))}
                        </InputWrapper>
                        <GPUModale revele={visibleNew} cache={() => setVisibleNew(!visibleNew)} />
                    </Col>
                    <Col xl={12}>
                        <MiniCardWrapper style={{ borderRadius: "12px" }}>
                            {currentGPU ? (
                                    <div>
                                        <div>
                                            <img src={currentGPU.image} style={{ width: "150px", height: "150px" }} />
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Image :</strong>
                                            </label>{" "}
                                            {currentGPU.image}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Nom :</strong>
                                            </label>{" "}
                                            {currentGPU.nom}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Fréquence :</strong>
                                            </label>{" "}
                                            {currentGPU.frequence}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Fréquence Boost :</strong>
                                            </label>{" "}
                                            {currentGPU.frequence_boost}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Nombre de coeurs :</strong>
                                            </label>{" "}
                                            {currentGPU.nb_coeurs}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Nombre Ventilateur :</strong>
                                            </label>{" "}
                                            {currentGPU.nb_ventilateur}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Sorties Video :</strong>
                                            </label>{" "}
                                            {currentGPU.nb_video_output}
                                        </div>
                                        <div>
                                            <label>
                                                <strong>Description :</strong>
                                            </label>{" "}
                                            {currentGPU.description}
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
        </GPUCRUDWrapper>
    )
}

export default GPUList
