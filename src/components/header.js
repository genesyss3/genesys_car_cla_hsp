import React, { Component } from 'react';
import axios from 'axios';
import { Tabs, Tab, Form, Col} from "react-bootstrap";
import '../estilos.css'
//import {Container} from "react-bootstrap";

let baseUrl = 'https://b316wmuwh1.execute-api.us-east-1.amazonaws.com/default/post_data_client_genesys_web';
axios.defaults.headers.post['authorizationToken'] = '&S396b<eg5Zn(HiLe)BBNtc&';

class EncabezadoCliente extends Component {
    constructor() {
        super();
        this.state = {
            obserbaciones_contacto: []
        };
    }
    async componentDidMount() {
        
        //console.log('llamo servicio mostrar obserbacion')
        console.log('valido dato:  ' +this.props.data)
        const body = {
            id_contacto: this.props.data
        }
        //console.log(body)
        await axios.post(baseUrl,body)
            .then(response => {
                //console.log('exito get_evaluadores: ' + JSON.stringify(response.data));
                this.setState({obserbaciones_contacto:response.data});
                //console.log(response)
            })
            .catch(response => {
                console.log(response + ' error get_evaluadores')
            }
        )
        
    }
    render() {
        const { obserbaciones_contacto } = this.state;
        //console.log('length evaluadores: '+evaluadores.length)
        let contactoList = obserbaciones_contacto.length > 0
            && obserbaciones_contacto.map((item, i) => {
                return (
                    <div className='class_fondo'>
                    <Tabs key={item.con_metadata.rut}
                    defaultActiveKey="home"
                    transition={false}
                    id="noanim-tab-example"
                    className="mb-3"
                    >
                    <Tab eventKey="home" title="Datos Cliente" >
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label>Rut</Form.Label>
                                <Form.Control value={item.con_metadata.rut} disabled></Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} >
                                <Form.Label>DV</Form.Label>
                                <Form.Control value={item.con_metadata.dv} disabled></Form.Control>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control value={item.con_metadata.nombre} disabled></Form.Control>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Apellido Paterno</Form.Label>
                                <Form.Control value={item.con_metadata.ap_paterno} disabled></Form.Control>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Apellido Materno</Form.Label>
                                <Form.Control value={item.con_metadata.ap_materno} disabled></Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label>Genero</Form.Label>
                                <Form.Control value={item.con_metadata.sexo} disabled></Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} >
                                <Form.Label>Mail</Form.Label>
                                <Form.Control value={item.con_metadata.mail} disabled></Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} >
                                <Form.Label>Fecha de Nacimiento</Form.Label>
                                <Form.Control value={item.con_metadata.fecha_nacimiento} disabled></Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} >
                                <Form.Label>Edad</Form.Label>
                                <Form.Control value={item.con_metadata.edad} disabled></Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label>Direccion</Form.Label>
                                <Form.Control value={item.con_metadata.direccion} disabled></Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} >
                                <Form.Label>Comuna</Form.Label>
                                <Form.Control value={item.con_metadata.comuna} disabled></Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} >
                                <Form.Label>Campana</Form.Label>
                                <Form.Control value={item.con_metadata.opcional1} disabled></Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label>SGE1</Form.Label>
                                <Form.Control value={item.con_metadata.opcional2} disabled></Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} >
                                <Form.Label>SGE2</Form.Label>
                                <Form.Control value={item.con_metadata.opcional3} disabled></Form.Control>
                            </Form.Group>
                        </Form.Row>
                    </Tab>
                    </Tabs>
                    </div>
                )
            }, this);
        return (
            <>
                {contactoList}  
            </>
        );
    }

}

export default EncabezadoCliente;