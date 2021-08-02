import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Col, Button, Modal, Alert} from "react-bootstrap";
import Dialog from 'react-bootstrap-dialog';
import axios from 'axios';
import clRut from '@validatecl/rut';
import Nacionalidad from './nacionalidad';
import Parentesco from './parentesco';

let baseUrl ='https://b316wmuwh1.execute-api.us-east-1.amazonaws.com/default/res_json_Adicionales'
axios.defaults.headers.post['authorizationToken'] = '&S396b<eg5Zn(HiLe)BBNtc&';

class ModalAdicional extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            id_gestion: this.props.id_gestion,
            id_contacto: this.props.id_contacto,
            id_campana: this.props.id_campana,
            id_contacto_genesys: this.props.id_contacto_genesys,
            fono: this.props.fono,
            id_ejecutivo: this.props.id_ejecutivo,
            formValid: true,
            Rut: '',
            cod_nacionalidad: '',
            cod_nacionalidad_campana: '',
            Nacionalidad: '',
            enviado : 0
        };
        
        this.envioDatos = this.envioDatos.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleInputChangeSelect = this.handleInputChangeSelect.bind(this)
        this.validarDatos = this.validarDatos.bind(this)
        this.validaRut = this.validaRut.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onConfirmar= this.onConfirmar.bind(this)
        this.resetall= this.resetall.bind(this)
    }

    resetall(){
        this.setState({
            Nombre: '',
            SegundoNombre: '',
            ApPaterno: '',
            ApMaterno: '',
            Rut: '',
            Profesion: '',
            Parentesco: '',
            Nacionalidad: '',
            Residencia: ''
        })
    }

    onConfirmar() {
        this.dialog.show({
            body: 'Confirmar Datos Adicional?',
            actions: [
              Dialog.CancelAction(),
              Dialog.OKAction(()=>this.envioDatos())
            ],
            bsSize: 'small',
            onHide: (dialog) => {
              dialog.hide()
              console.log('cerrando por apretar el fondo.')
            }
          })
    }

    async handleInputChange(event){
        console.log('entro a handle ')
        const target = event.target;
        const valor = target.value;
        const nombre = target.name;
        /*console.log('target: ' + target)
        console.log('valor: ' + valor)
        console.log('nombre: ' + nombre)*/
        this.setState({
            [nombre]: valor.toUpperCase()
        })
    }

    async handleInputChangeSelect(event){
        console.log('entro a handle ')
        const target = event.target;
        const valor = target.value;
        const nombre = target.name;
        this.setState({
            [nombre]: valor
        })
    }

    validarDatos(){
        console.log('Validando Datos')
        if(this.state.Tipoplan !== '' && this.state.Nombre !== '' && this.state.ApPaterno !== ''
         && this.state.ApMaterno !== '' && this.state.Parentesco !== ''){
            return true
        }else{
            alert('Faltan campos que completar')
            return false
        }
    }


    validaRut(Rut){
        console.log('validando rut...')
        console.log(Rut)
        const isValid = clRut.validate(Rut);

        console.log(isValid)
        if(isValid === false){
            alert('rut no valido, por favor escribir nuevamente');
            return false
        }
        return isValid
    }

    async envioDatos() {
        const body= JSON.stringify({
            id_gestion: this.state.id_gestion,
            id_contacto: this.state.id_contacto,
            id_campana: this.state.id_campana,
            id_contacto_genesys: this.state.id_contacto_genesys,
            fono: this.state.fono,
            id_ejecutivo: this.state.id_ejecutivo,
            Nombre: this.state.Nombre,
            SegundoNombre: this.state.SegundoNombre,
            ApPaterno: this.state.ApPaterno,
            ApMaterno: this.state.ApMaterno,
            Fechanacimiento: this.state.Fechanacimiento,
            Rut: clRut.format(this.state.Rut),
            Profesion: this.state.Profesion,
            cod_parentesco: this.state.Parentesco.split('-')[0],
            cod_parentesco_campana: this.state.Parentesco.split('-')[1],
            Parentesco: this.state.Parentesco.split('-')[2],
            cod_nacionalidad: this.state.Nacionalidad.split('-')[0],
            cod_nacionalidad_campana: this.state.Nacionalidad.split('-')[1],
            Nacionalidad: this.state.Nacionalidad.split('-')[2],
            Residencia: this.state.Residencia,
            TipoAgregado: 'Heredero Legal'
        })
        if(this.state.Rut === ''){
            await axios.post(baseUrl,body)
            .then(response => {
                console.log('exito al enviar POST Datos Adicional: ');
                if (response.status === 200) {
                    this.state.enviado++;
                    console.log(this.state.enviado);
                    document.getElementById('exitosoAd').hidden=false
                }
                this.resetall()
            })
            .catch(response => {
                console.log(response + ' error POST envio datos')
                document.getElementById('fallidoAd').hidden=false
            })
        }
        else{
            if(this.validaRut(this.state.Rut) === true){
                await axios.post(baseUrl,body)
                .then(response => {
                    console.log('exito al enviar POST Datos Adicional: ');
                    if (response.status === 200) {
                        this.state.enviado++;
                        console.log(this.state.enviado);
                        document.getElementById('exitosoAd').hidden=false
                    }
                    this.resetall()
                })
                .catch(response => {
                    console.log(response + ' error POST envio datos')
                    document.getElementById('fallidoAd').hidden=false
                })
            }
        }

        if(this.state.enviado >= 2){
            document.getElementById('Adicional').disabled=true
            document.getElementsByClassName('close')[0].click()
        }
    }

    async handleSubmit(e) {
        e.preventDefault();
        if(this.validarDatos === false){
            this.setState({ formValid: false })
            return (alert('Ingresa campos requeridos!'))
        }
        if(this.state.formValid) {
            this.onConfirmar()
        }
    }

    render(){
        var currentTime = new Date()
        var month1 = currentTime.getMonth() + 1
        var day1 = currentTime.getDate()
        var year1 = currentTime.getFullYear()
        if (month1<10) month1="0"+month1;
        if (day1<10) day1="0"+day1;
        const curdate = year1 + "-" + month1 + "-" + day1
        return(
            <Container>
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Datos del Adicional
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formNombre">
                                    <Form.Label>Primer Nombre</Form.Label>
                                    <Form.Control placeholder="Nombre" name='Nombre' value={this.state.Nombre} onChange={this.handleInputChange} required/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formSeNombre">
                                    <Form.Label>Segundo Nombre</Form.Label>
                                    <Form.Control placeholder="Segundo Nombre" name='SegundoNombre' value={this.state.SegundoNombre} onChange={this.handleInputChange}/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formApPaterno">
                                    <Form.Label>Apellido Paterno</Form.Label>
                                    <Form.Control placeholder="Ap Paterno" name='ApPaterno' value={this.state.ApPaterno} onChange={this.handleInputChange} required/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formApMaterno">
                                    <Form.Label>Apellido Materno</Form.Label>
                                    <Form.Control placeholder="Ap Materno" name='ApMaterno' value={this.state.ApMaterno} onChange={this.handleInputChange} required/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formfechanacimiento">
                                    <Form.Label>Fecha nacimiento</Form.Label>
                                    <Form.Control placeholder="Fecha nacimiento" type='date' max={curdate} min="1900-01-01" name='FechaNacimiento' value={this.state.Fechanacimiento} onChange={this.handleInputChange} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formRutAdi">
                                    <Form.Label>Rut</Form.Label>
                                    <Form.Control placeholder="11111111-1" name='Rut' value={this.state.Rut} onChange={this.handleInputChange}  />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formparentesco">
                                    <Form.Label>Parentesco</Form.Label>
                                    <Form.Control as="select" name='Parentesco' value={this.state.Parentesco} onChange={this.handleInputChangeSelect} required>
                                        <option value=''>Parentesco</option>
                                        <Parentesco></Parentesco>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formNacionalidad" >
                                    <Form.Label>Nacionalidad</Form.Label>
                                    <Form.Control as="select" name='Nacionalidad' value={this.state.Nacionalidad} onChange={this.handleInputChangeSelect} >
                                        <option value=''>Nacionalidad</option>
                                        <Nacionalidad></Nacionalidad>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formProfesion" >
                                    <Form.Label>Profesion</Form.Label>
                                    <Form.Control placeholder="Profesión" name='Profesion' value={this.state.Profesion} onChange={this.handleInputChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formResidencia" >
                                    <Form.Label>Residencia</Form.Label>
                                    <Form.Control placeholder="Residencia" name='Residencia' value={this.state.Residencia} onChange={this.handleInputChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formTerminar">
                                    <Button variant="primary" type="submit">Terminar</Button> 
                                    <Dialog ref={(component) => { this.dialog = component }} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group>
                                    <Alert variant="success" hidden id='exitosoAd'>
                                        <Alert.Heading>Datos enviados correctamente</Alert.Heading>
                                    </Alert>
                                </Form.Group>
                                <Form.Group>
                                    <Alert variant="danger" hidden id='fallidoAd'>
                                        <Alert.Heading>Datos no enviados</Alert.Heading>
                                    </Alert>
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    </Modal.Body>
            </Container>
        )
    }
}
export default ModalAdicional;