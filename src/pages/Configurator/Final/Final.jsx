import React from 'react';
import { FinalPageWrapper, ListComponents } from './Final.style';
import { useSelector } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { Card } from '../../../components/Card/Card';
import * as Yup from 'yup';
import { Formik } from 'formik';
import PostAPIData from '../../../data/post_api_data';


const Final = () => {

    const stateAuth = useSelector(state => state.auth);
    const history = useHistory();
    console.log(stateAuth);
    const CPU = useSelector(state => state.config.CPU)
    const GPU = useSelector(state => state.config.GPU)
    const HDD = useSelector(state => state.config.HDD)
    const SSD = useSelector(state => state.config.SSD)
    const RAM = useSelector(state => state.config.RAM)
    const Cooling = useSelector(state => state.config.COOLING)
    const Case = useSelector(state => state.config.Case)
    const MotherBoard = useSelector(state => state.config.MotherBoard)
    const token = localStorage.getItem("token");
    console.log(SSD, 'ssd')


    const initialValues = {
        user_id: stateAuth.user.id ?? 0,
        cpu_id: CPU.id ?? 0,
        gpu_id: GPU.id ?? 0,
        hdd_id: HDD.id ?? 0,
        ssd_id: SSD?.id,
        ram_id: RAM.id ?? 0,
        motherboard_id: MotherBoard.id ?? 0,
        case_id: Case.id ?? 0
    }

    const LegalSchema = Yup.object().shape({
        user_id: Yup.number()
            .required('Le user_id est requis !'),
        cpu_id: Yup.number()
            .required('Le cpu_id est requis !'),
        gpu_id: Yup.number()
            .required('Le gpu_id est requis !'),
        hdd_id: Yup.number()
            .required('Le hdd_id est requis !'),
        ssd_id: Yup.number()
            .required('Le ssd_id est requis !'),
        ram_id: Yup.number()
            .required('Le ram_id est requis !'),
        motherboard_id: Yup.number()
            .required('Le motherboard_id est requis !'),
        case_id: Yup.number()
            .required('Le case_id est requis')
    })

    console.log(initialValues)

    return (
        <FinalPageWrapper>
            {token ? 
            <Formik
                initialValues={initialValues}
                validationSchema={LegalSchema}
                onSubmit={async (values) => {
                    console.log(values, 'values')
                    const endpoint = 'Config'
                    console.log(JSON.stringify(values), 'values')

                    const response = await PostAPIData(endpoint, values).then(
                        res => {
                            console.log(res)
                        }
                    )
                    console.log(response, 'response');
                    history.push('/')
                }}
            >
                <ListComponents>
                    <div style={{ paddingTop: "12px" }}>
                        <p style={{ fontSize: "30px" ,display: 'flex', justifyContent: 'center', paddingBottom: "15px" }}>Processeur</p>
                        <Card>
                            <Card.Image src={CPU?.image}/>
                            <Card.Body>
                                <Card.Title>{CPU?.nom}</Card.Title>
                                <Card.Text>{CPU?.description}</Card.Text>
                                <Card.Button>Modifier</Card.Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div style={{ paddingTop: "12px" }}>
                        <p style={{ fontSize: "30px" ,display: 'flex', justifyContent: 'center', paddingBottom: "15px" }}>Carte Mère</p>
                        <Card>
                            <Card.Image src={MotherBoard?.image}/>
                            <Card.Body>
                                <Card.Title>{MotherBoard?.nom}</Card.Title>
                                <Card.Text>{MotherBoard?.description}</Card.Text>
                                <Card.Button>Modifier</Card.Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div style={{ paddingTop: "12px" }}>
                        <p style={{ fontSize: "30px" ,display: 'flex', justifyContent: 'center', paddingBottom: "15px" }}>RAM</p>
                        <Card>
                            <Card.Image src={RAM?.image}/>
                                <Card.Body>
                                    <Card.Title>{RAM?.nom}</Card.Title>
                                    <Card.Text>{RAM?.description}</Card.Text>
                                    <Card.Button>Modifier</Card.Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div style={{ paddingTop: "12px" }}>
                        <p style={{ fontSize: "30px" ,display: 'flex', justifyContent: 'center', paddingBottom: "15px" }}>SSD</p>
                        <Card>
                            <Card.Image src={SSD?.image}/>
                            <Card.Body>
                                <Card.Title>{SSD?.nom}</Card.Title>
                                <Card.Text>{SSD?.description}</Card.Text>
                                <Card.Button>Modifier</Card.Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div style={{ paddingTop: "12px" }}>
                        <p style={{ fontSize: "30px" ,display: 'flex', justifyContent: 'center', paddingBottom: "15px" }}>HDD</p>
                        <Card>
                            <Card.Image src={HDD?.image}/>
                            <Card.Body>
                                <Card.Title>{HDD?.nom}</Card.Title>
                                <Card.Text>{HDD?.description}</Card.Text>
                                <Card.Button>Modifier</Card.Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div style={{ paddingTop: "12px" }}>
                        <p style={{ fontSize: "30px" ,display: 'flex', justifyContent: 'center', paddingBottom: "15px" }}>Processeur</p>
                        <Card>
                            <Card.Image src={Cooling?.image}/>
                            <Card.Body>
                                <Card.Title>{Cooling?.nom}</Card.Title>
                                <Card.Text>{Cooling?.description}</Card.Text>
                                <Card.Button>Modifier</Card.Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div style={{ paddingTop: "12px" }}>
                        <p style={{ fontSize: "30px" ,display: 'flex', justifyContent: 'center', paddingBottom: "15px" }}>Processeur</p>
                        <Card>
                            <Card.Image src={GPU?.image}/>
                            <Card.Body>
                                <Card.Title>{GPU?.nom}</Card.Title>
                                <Card.Text>{GPU?.description}</Card.Text>
                                <Card.Button>Modifier</Card.Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div style={{ paddingTop: "12px" }}>
                        <p style={{ fontSize: "30px" ,display: 'flex', justifyContent: 'center', paddingBottom: "15px" }}>Processeur</p>
                        <Card>
                            <Card.Image src={Case?.image}/>
                            <Card.Body>
                                <Card.Title>{Case?.nom}</Card.Title>
                                <Card.Text>{Case?.description}</Card.Text>
                                <Card.Button>Modifier</Card.Button>
                            </Card.Body>
                        </Card>
                    </div>
                    
                    <button style={{ margin: "100px", height: "25px", justifyContent: "center", alignItems: "center", display: "flex"}} type="submit">Enregistrer</button>
                </ListComponents>
            </Formik>
            : 
                <Redirect to="/" />
            }
        </FinalPageWrapper>
    )
}

export default Final
