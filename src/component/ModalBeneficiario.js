import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Col, Button, DropdownButton, FormGroup, InputGroup, FormControl, Modal} from "react-bootstrap";
import axios from 'axios';
import { useParams } from "react-router-dom";
import clRut from '@validatecl/rut';
import Region from './region';
import Comuna from './comuna';
import Ciudad from './ciudad';

let baseUrl = 'https://b316wmuwh1.execute-api.us-east-1.amazonaws.com/default/res_json_Beneficiario'


class ModalBeneficiario extends Component{

    constructor(props){
        super(props)
        this.state = {
        };
        
        this.envioDatos = this.envioDatos.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputChangeRegion = this.handleInputChangeRegion.bind(this)
        this.handleInputChangeCiudad = this.handleInputChangeCiudad.bind(this)
        this.handleInputChangeComuna = this.handleInputChangeComuna.bind(this)
        this.validarDatos = this.validarDatos.bind(this)
        this.validaRut = this.validaRut.bind(this)
        this.ValidateEmail = this.ValidateEmail(this)
    } 

    async handleInputChange(event){
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

    async handleInputChangeRegion(event){
        console.log('regiones : ' + event)
        
        this.setState({
            Region: event.split('-')[1],
            RegionId: event.split('-')[0],
        })
        console.log('Region: '+ this.state.Region)
    }
    async handleInputChangeCiudad(event){
        console.log('regiones : ' + event)
        
        this.setState({
            Ciudad: event.split('-')[1],
            CiudadId: event.split('-')[0],
        })
        console.log('Region: '+ this.state.Region)
    }
    async handleInputChangeComuna(event){
        console.log('regiones : ' + event)
        
        this.setState({
            Comuna: event.split('-')[1],
            ComunaId: event.split('-')[0],
        })
        console.log('Region: '+ this.state.Region)
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
    
    validarDatos(){
        console.log('Validando Datos')
        if(this.state.Tipoplan != '' && this.state.Nombre != '' && this.state.ApPaterno != '' && this.state.ApMaterno != '' && this.state.Fechanacimiento != ''
         && this.state.Region != '' && this.state.Comuna != '' && this.state.Ciudad != '' && this.state.RegionId != '' && this.state.ComunaId != ''
         && this.state.CiudadId != '' && this.state.Direccion != '' && this.state.Telefono != '' && this.state.Mail != '' && this.state.Rut != '' && this.state.Observacion != ''){
            return true
        }else{
            alert('Faltan campos que completar')
            return false
        }
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
                Rut: this.state.Rut,
                Region: this.state.Region,
                RegionId: this.state.RegionId,
                Comuna: this.state.Comuna,
                ComunaId: this.state.ComunaId,
                Ciudad: this.state.Ciudad,
                CiudadId: this.state.CiudadId,
                Direccion: this.state.Direccion,
                Fechanacimiento: this.state.Fechanacimiento,
                Telefono: this.state.Telefono,
                Parentesco: this.state.Parentesco,
                Porcentaje: this.state.Porcentaje,
                Mail: this.state.Mail,
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
                        Datos Beneficiario
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formNombre">
                                    <Form.Control placeholder="Nombre" value={this.state.Nombre} onChange={this.handleInputChange}/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formApPaterno">
                                    <Form.Control placeholder="Ap Paterno" value={this.state.ApPaterno} onChange={this.handleInputChange}/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formApMaterno">
                                    <Form.Control placeholder="Ap Materno" value={this.state.ApMaterno} onChange={this.handleInputChange}/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formRutBenef">
                                    <Form.Control placeholder="11111111-1" value={this.state.Rut} onChange={this.handleInputChange}/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group>
                                    <InputGroup className="mb-4" >
                                        <DropdownButton as={InputGroup.Prepend} variant="outline-secondary" title="Region" name="dropdown-region-titular"
                                            value={this.state.RegionId} onSelect={this.handleInputChangeRegion}>
                                            <Region></Region>
                                        </DropdownButton>
                                        <FormControl id="input-region-titular" aria-describedby="basic-addon1"  name="input-region-titular" value={this.state.Region}/>
                                            </InputGroup>
                                </Form.Group>
                                <FormGroup>
                                    <InputGroup className="mb-4">
                                        <DropdownButton as={InputGroup.Prepend} variant="outline-secondary" title="Ciudad" name="dropdown-ciudad-titular"
                                            value={this.state.CiudadId} onSelect={this.handleInputChangeCiudad} value> 
                                            <Ciudad data={this.state.RegionId}> </Ciudad>
                                        </DropdownButton>
                                        <FormControl id="input-ciudad-titular" aria-describedby="basic-addon1" name="input-ciudad-titular" value={this.state.Ciudad}/>
                                        </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup className="mb-4">
                                        <DropdownButton as={InputGroup.Prepend} variant="outline-secondary" title="Comuna" name="dropdown-ciudad-titular" 
                                            value={this.state.ComunaId} onSelect={this.handleInputChangeComuna}>
                                            <Comuna data={this.state.CiudadId}></Comuna>
                                        </DropdownButton>
                                        <FormControl id="input-comuna-titular" aria-describedby="basic-addon1" name="input-comuna-titular" value={this.state.Comuna}/>
                                    </InputGroup>
                                </FormGroup>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formDireccion">
                                    <Form.Control placeholder="Direccion" value={this.state.Direccion} onChange={this.handleInputChange}/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formfechanacimiento">
                                    <Form.Control placeholder="Fecha nacimiento" type='date' value={this.state.Fechanacimiento} onChange={this.handleInputChange}/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formTelefono">
                                    <Form.Control placeholder="Telefono" value={this.state.Telefono} onChange={this.handleInputChange}/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formParentesco">
                                    <Form.Control as="select" value={this.state.Parentesco} onChange={this.handleInputChange}>
                                        <option>Parentesco</option>
                                        <option>Padre</option>
                                        <option>Hermano</option>
                                        <option>Madre</option>
                                        <option>Hijo</option>
                                        <option>Espos@</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formPorcentaje">
                                    <Form.Control as="select" value={this.state.Porcentaje} onChange={this.handleInputChange}>
                                        <option>Porecentaje</option>
                                        <option>1</option>
                                        <option>10</option>
                                        <option>20</option>
                                        <option>25</option>
                                        <option>50</option>
                                        <option>75</option>
                                        <option>100</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formMailBenef">
                                    <Form.Control placeholder="Mail" type='email' value={this.state.Mail} onChange={this.handleInputChange}/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="btnterminar">
                                    <Button variant="primary" type="button" onClick={this.envioDatos()}>Terminar</Button>
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    </Modal.Body>
            </Container>
        )
    }
}
export default ModalBeneficiario;