import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Col, Button, DropdownButton, FormGroup, InputGroup, FormControl, Modal} from "react-bootstrap";
import axios from 'axios';
import clRut from '@validatecl/rut';

let baseUrl ='https://b316wmuwh1.execute-api.us-east-1.amazonaws.com/default/res_json_Adicionales'

class ModalAdicional extends Component{

    constructor(props){
        super(props)
        this.state = {
        };
        
        this.envioDatos = this.envioDatos.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.validarDatos = this.validarDatos.bind(this)
        this.validaRut = this.validaRut.bind(this)
    }    

    async handleInputChange(event){
        console.log('entro a handle ')
        const target = event.target;
        const valor = target.value;
        const nombre = target.name;
        console.log('target: ' + target)
        console.log('valor: ' + valor)
        console.log('nombre: ' + nombre)
        this.setState({
            [nombre]: valor
        })
    }


    async validaRut(Rut){
        console.log('validando rut...')
        console.log(Rut)
        const isValid = clRut.validate(Rut);

        console.log(isValid)
        if(isValid === false){
            alert('rut no valido, por favor escribir nuevamente');
            return false
        }
        return true
    }

    ValidateEmail (Mail){
        console.log('validando mail...')
        const re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
        if(!re.exec(Mail)){
            alert('email no valido, por favor escribir nuevamente');
            return false
        }
        return true
        
    }

    async envioDatos() {
        console.log(this.validarDatos)
        const requestOptions = {
            headers: {
                'Content-Type': 'application/json',
                'authorizationToken': '&S396b<eg5Zn(HiLe)BBNtc&',
            },
            body: JSON.stringify({
                Nombre: this.state.Nombre,
                ApPaterno: this.state.ApPaterno,
                ApMaterno: this.state.ApMaterno,
                Fechanacimiento: this.state.Fechanacimiento,
                Rut: this.state.Rut,
                Profesion: this.state.Profesion,
                Parentesco: this.state.Parentesco,
                Nacionalidad: this.state.Nacionalidad,
                Residencia: this.state.Residencia
            }),
        };
        if(this.validarDatos() == true){
            console.log('Preparando envio de datos Titular')
            console.log(requestOptions)
            if(() => this.validaRut(this.state.Rut) === true &&  this.ValidateEmail(this.state.Mail) === true){
                console.log('Rut Valido')
                await axios.post(baseUrl,requestOptions)
                .then(res => res.json())
                .then(response => {
                    console.log('exito al enviar POST Datos Titular: ');
                })
                .catch(response => {
                    console.log(response + ' error POST envio datos')
                })
                document.getElementsByClassName('close')[0].click()
                document.getElementById('guardar-tipificaciones').disabled=true
            }
        }else{
            console.log('fallo al enviar post')
            console.log(requestOptions)
            console.log('funciona validar datos: ' + this.validarDatos())
        }
    }

    render(){
        return(
            <Container>
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Datos del Adicional
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formNombre" value={this.state.Nombre} onChange={this.handleInputChange}>
                                    <Form.Control placeholder="Nombre" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formApPaterno" value={this.state.ApPaterno} onChange={this.handleInputChange}>
                                    <Form.Control placeholder="Ap Paterno" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formApMaterno" value={this.state.ApMaterno} onChange={this.handleInputChange}>
                                    <Form.Control placeholder="Ap Materno" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formfechanacimiento" value={this.state.Fechanacimiento} onChange={this.handleInputChange}>
                                    <Form.Control placeholder="Fecha nacimiento" type='date' />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formRutAdi" value={this.state.Rut} onChange={this.handleInputChange}>
                                    <Form.Control placeholder="11111111-1" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formparentesco">
                                    <Form.Control as="select" value={this.state.Parentesco} onChange={this.handleInputChange}>
                                        <option>Parentesco</option>
                                        <option>Padre</option>
                                        <option>Hermano</option>
                                        <option>Madre</option>
                                        <option>Hijo</option>
                                        <option>Espos@</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formNacionalidad" >
                                    <Form.Control as="select" value={this.state.Nacionalidad} onChange={this.handleInputChange}>
                                        <option>Nacionalidad</option>
                                        <option>Chilena</option>
                                        <option>Extranjero</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formProfesion" >
                                    <Form.Control placeholder="Profesión" value={this.state.Profesion} onChange={this.handleInputChange}/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formResidencia" >
                                    <Form.Control placeholder="Residencia" value={this.state.Residencia} onChange={this.handleInputChange}/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formTerminar">
                                    <Button variant="primary" type="button" onClick={this.envioDatos()}>Terminar</Button>
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    </Modal.Body>
            </Container>
        )
    }
}
export default ModalAdicional;