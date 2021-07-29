import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Col, Button, Modal, Alert} from "react-bootstrap";
import Dialog from 'react-bootstrap-dialog';
import axios from 'axios';
import clRut from '@validatecl/rut';
import Region from './region';
import Comuna from './comuna';
import Ciudad from './ciudad';
import PorcentajeBenef from '../components/porcentajebenef'

let baseUrl = 'https://b316wmuwh1.execute-api.us-east-1.amazonaws.com/default/res_json_Beneficiario'
axios.defaults.headers.post['authorizationToken'] = '&S396b<eg5Zn(HiLe)BBNtc&';


class ModalBeneficiario extends React.Component{

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
            enviado : 0
        };
        
        this.envioDatos = this.envioDatos.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleInputChangeSelect = this.handleInputChangeSelect.bind(this)
        this.handleChangeRegion = this.handleChangeRegion.bind(this)
        this.handleChangeCiudad = this.handleChangeCiudad.bind(this)
        this.handleChangeComuna = this.handleChangeComuna.bind(this)
        this.validaRut = this.validaRut.bind(this)
        this.validarDatos = this.validarDatos.bind(this)
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
            Region: '',
            RegionId: '',
            Comuna: '',
            ComunaId: '',
            Ciudad: '',
            CiudadId: '',
            Direccion: '',
            Numeracion: '',
            TipoCalle: '',
            Telefono: '',
            Parentesco: '',
            Porcentaje: '',
            Mail: '',
        })
    }

    onConfirmar() {
        this.dialog.show({
            body: 'Confirmar Datos Beneficiario?',
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

    handleInputChange =(event)=>{
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
    handleInputChangeSelect =(event)=>{
        const target = event.target;
        const valor = target.value;
        const nombre = target.name;
        this.setState({
            [nombre]: valor
        })
    }

    resetearSelect(){
        this.setState({
            Region: '',
            RegionId: '',
            ComunaId: '',
            Comuna: '',
            Ciudad: '',
            CiudadId:'',
        })
    }

    handleChangeRegion(event) {
        if(event.target.value === ''){
            this.resetearSelect()
        }else{
            console.log(event.target.value)
            this.setState({
                Region: event.target.value,
                RegionId: event.target.value.split('-')[0],
                Ciudad:'',
                Comuna:'',
            });
        }
    }

    handleChangeCiudad(event) {
        if(event.target.value === ''){
            this.resetearSelect()
        }else{
            console.log(event.target.value)
            this.setState({
                Ciudad: event.target.value,
                CiudadId: event.target.value.split('-')[0],
                Comuna: ''
            });
        }
    }

    handleChangeComuna(event) {
        if(event.target.value === ''){
            this.resetearSelect()
        }else{
            console.log(event.target.value)
            this.setState({
                Comuna: event.target.value,
                ComunaId: event.target.value.split('-')[0],
            });
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
        return true
    }
    
    validarDatos(){
        console.log('Validando Datos')
        if(this.state.Nombre !== '' && this.state.ApPaterno !== ''
         && this.state.ApMaterno !== '' && this.state.Parentesco !== ''){
            return true
        }else{
            alert('Faltan campos que completar')
            return false
        }
    }

    async handleSubmit(e) {
        e.preventDefault();
        if(this.validarDatos === false){
            this.setState({ formValid: false })
            return (alert('Ingresa campos requeridos!'))
        }
        if (this.state.formValid) {
            this.onConfirmar()
        }
    }
    async envioDatos() {
        const body = JSON.stringify({
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
            Rut: clRut.format(this.state.Rut),
            Region: this.state.Region.split('-')[1],
            RegionId: this.state.RegionId,
            Comuna: this.state.Comuna.split('-')[1],
            ComunaId: this.state.ComunaId,
            Ciudad: this.state.Ciudad.split('-')[1],
            CiudadId: this.state.CiudadId,
            Direccion: this.state.Direccion,
            Numeracion: this.state.Numeracion,
            TipoCalle: this.state.TipoCalle,
            TipoVivienda: this.state.TipoVivienda,
            Fechanacimiento: this.state.Fechanacimiento,
            Telefono: this.state.Telefono,
            Parentesco: this.state.Parentesco,
            Porcentaje: this.state.Porcentaje,
            Mail: this.state.Mail,
            TipoAgregado: 'Beneficiario Legal'
        })
        console.log(body)
        if(this.validarDatos() === true){
            if(this.state.Rut !== ''){
                await axios.post(baseUrl,body)
                .then(response => {
                    console.log('exito al enviar POST Datos Titular: ');
                    if (response.status === 200) {
                        this.state.enviado++;
                        console.log(this.state.enviado);   
                    }
                    document.getElementById('exitosoBen').hidden=false
                    document.getElementsByClassName('close')[0].click()
                })
                .catch(response => {
                    console.log(response + ' error POST envio datos')
                    document.getElementById('fallidoBen').hidden=false
                })
            }
            if(this.state.Rut !== ''){
                if(this.validaRut(this.state.Rut) === true){
                    await axios.post(baseUrl,body)
                    .then(response => {
                        console.log('exito al enviar POST Datos Titular: ');
                        if (response.status === 200) {
                            this.state.enviado++;
                            console.log(this.state.enviado);   
                        }
                        document.getElementById('exitosoBen').hidden=false
                        document.getElementsByClassName('close')[0].click()
                    })
                    .catch(response => {
                        console.log(response + ' error POST envio datos')
                        document.getElementById('fallidoBen').hidden=false
                    })
                }

                if(this.state.enviado >= 5){
                    document.getElementById('Beneficiario').disabled=true
                    document.getElementsByClassName('close')[0].click()
                }
            }
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
                        Datos Beneficiario
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formNombre">
                                <Form.Label>Primer Nombre</Form.Label>
                                    <Form.Control placeholder="Nombre" name='Nombre' value={this.state.Nombre} onChange={this.handleInputChange} required/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formSegunNombre">
                                <Form.Label>Segundo Nombre</Form.Label>
                                    <Form.Control placeholder="Segundo Nombre" name='SegundoNombre' value={this.state.SegundoNombre} onChange={this.handleInputChange}/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formApPaterno">
                                    <Form.Label>Apellido Paterno</Form.Label>
                                    <Form.Control placeholder="Ap Paterno" name='ApPaterno' value={this.state.ApPaterno} onChange={this.handleInputChange} required/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formApMaterno">
                                    <Form.Label>Apellido Materno</Form.Label>
                                    <Form.Control placeholder="Ap Materno" name='ApMaterno' value={this.state.ApMaterno} onChange={this.handleInputChange} required/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formRutBenef">
                                    <Form.Label>Rut</Form.Label>
                                    <Form.Control placeholder="11111111-1" name='Rut' value={this.state.Rut} onChange={this.handleInputChange}/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Region</Form.Label>
                                    <Form.Control size='md' as="select" name='Region' value={this.state.Region} onChange={this.handleChangeRegion} >
                                        <option value=''>Seleccionar</option>
                                        <Region></Region>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Localidad</Form.Label>
                                    <Form.Control size='md' as="select" name='Ciudad' value={this.state.Ciudad} onChange={this.handleChangeCiudad} >
                                    <option value=''>Seleccionar</option>
                                    <Ciudad data={this.state.RegionId}></Ciudad>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Comuna</Form.Label>
                                    <Form.Control size='md' as="select" name='Comuna' value={this.state.Comuna} onChange={this.handleChangeComuna}>
                                        <option value=''>Seleccionar</option>
                                        <Comuna data={this.state.CiudadId}></Comuna>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Tipo calle</Form.Label>
                                    <Form.Control size='md' as="select" name='TipoCalle' value={this.state.TipoCalle} onChange={this.handleInputChangeSelect} >
                                        <option value=''>Tipo Calle</option>
                                        <option value='Avenida'>Avenida</option>
                                        <option value='Pasaje'>Pasaje</option>
                                        <option value='Calle'>Calle</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formDireccion">
                                    <Form.Label>Direccion</Form.Label>
                                    <Form.Control placeholder="Direccion" name='Direccion' value={this.state.Direccion} onChange={this.handleInputChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Tipo Vivienda</Form.Label>
                                    <Form.Control size='md' name='TipoVivienda' placeholder="Observacion vivienda, depto,torre,villa,parcela,etc" value={this.state.TipoVivienda} onChange={this.handleInputChange}/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Numeracion</Form.Label>
                                    <Form.Control placeholder="Numeracion" name='Numeracion' type='number'value={this.state.Numeracion} onChange={this.handleInputChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formfechanacimiento">
                                    <Form.Label>Fecha nacimiento</Form.Label>
                                    <Form.Control placeholder="Fecha nacimiento" type='date' min="1900-01-01" max={curdate} name='FechaNacimiento' value={this.state.Fechanacimiento} onChange={this.handleInputChange} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formTelefono">
                                    <Form.Label>Telefono</Form.Label>
                                    <Form.Control placeholder="Telefono" name='Telefono' value={this.state.Telefono} onChange={this.handleInputChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formParentesco">
                                    <Form.Label>Parentesco</Form.Label>
                                    <Form.Control as="select" name='Parentesco' value={this.state.Parentesco} onChange={this.handleInputChangeSelect} required>
                                        <option value=''>Parentesco</option>
                                        <option>Hijo</option>
                                        <option>Espos@</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formPorcentaje">
                                    <Form.Label>Porcentaje asignado</Form.Label>
                                    <Form.Control as="select" name='Porcentaje' value={this.state.Porcentaje} onChange={this.handleInputChangeSelect} required>
                                        <option value=''>Porecentaje asignado</option>
                                        <PorcentajeBenef id_gestion={this.state.id_gestion}></PorcentajeBenef>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formMailBenef">
                                    <Form.Label>Mail</Form.Label>
                                    <Form.Control placeholder="Mail" type='email' name='Mail' value={this.state.Mail} onChange={this.handleInputChange}/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="btnterminarBenef">
                                    <Button variant="primary" type="submit">Terminar</Button>
                                    <Dialog ref={(component) => { this.dialog = component }} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group>
                                    <Alert variant="success" hidden id='exitosoBen'>
                                        <Alert.Heading>Datos enviados correctamente</Alert.Heading>
                                    </Alert>
                                </Form.Group>
                                <Form.Group>
                                    <Alert variant="danger" hidden id='fallidoBen'>
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
export default ModalBeneficiario;