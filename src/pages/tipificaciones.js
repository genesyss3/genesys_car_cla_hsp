import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Form, Col, Button, Container, Row, Jumbotron, Alert} from "react-bootstrap";
import Dialog from 'react-bootstrap-dialog';
import Contacto from '../components/contacto'
import Nivel1 from '../components/nivel1'
import Nivel2 from '../components/nivel2'
import Nivel3 from '../components/nivel3'
import MostrarInfo from '../components/mostarinfo'
import ObsAgendamiento from '../components/obsAgendamiento'

axios.defaults.headers.post['authorizationToken'] = '&S396b<eg5Zn(HiLe)BBNtc&';

class Tipificaciones extends React.Component{

    constructor(props) {
        
        const { match: { params } } = props;
        console.log(params)

        super(props);
        this.state = {
            contacto: '',
            nivel1: '',
            nivel2: '',
            nivel3: '',
            options: [],
            options2: [],
            options3: [],  
            id_gestion: params.idGestion,
            id_contacto: params.idContacto,
            id_campana: params.idCampana,
            id_contacto_genesys: params.idContactoGenesys,
            id_ejecutivo: params.idEjecutivo,
            fono: params.fono,
            cola: params.cola,
            Fecha: '',
            Hora:'',
            Observacion:'',
            formValid: true,
            showTitular: false,
            showAdicional: false,
            showBenef: false,
        };

        this.handleChangeContacto = this.handleChangeContacto.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleEnvioTipificaciones = this.handleEnvioTipificaciones.bind(this);
        this.onConfirmar= this.onConfirmar.bind(this)
        this.onConfirmarAgendamiento = this.onConfirmarAgendamiento.bind(this)
        this.validaHorayFecha = this.validaHorayFecha.bind(this)
        this.envioDatos = this.envioDatos.bind(this)
        this.handleInputChangeAgendamiento = this.handleInputChangeAgendamiento.bind(this)
        this.resetearSelect = this.resetearSelect.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    resetearSelect(){
        this.setState({
            contacto:''
        })
        this.setState({
            nivel1:''
        })
        this.setState({
            nivel2:''
        })
        this.setState({
            nivel3:''
        })
    }

    async handleInputChangeAgendamiento(event){
        //console.log('entro a handle ')
        const target = event.target;
        const valor = target.value;
        const nombre = target.name;
        /*console.log('target: ' + target)
        console.log('valor: ' + valor)
        console.log('nombre: ' + nombre)*/
        this.setState({
            [nombre]: valor
        })
    }

    handleChangeContacto(event) {
        if(event.target.value === ''){
            this.resetearSelect()
        }else{
            console.log(event.target.value)
            console.log(event.target.value.split('-')[0])
            this.setState({
                contacto: event.target.value,
                nivel1:'',
                nivel2:'',
                nivel3:''
            });
        }
    }
  
    handleChange1(event) {
        if(event.target.value === ''){
            this.resetearSelect()
        }else{
            console.log(event.target.value)
            console.log(event.target.value.split('-')[0])
            this.setState({
                nivel1: event.target.value,
                nivel2:'',
                nivel3:''
            });
        }
        
    }
    handleChange2(event) {
        if(event.target.value === ''){
            this.resetearSelect()
        }else{
            console.log(event.target.value)
            this.setState({
                nivel2: event.target.value,
                nivel3:''
            });
        }
    }
    handleChange3(event) {
        if(event.target.value === ''){
            this.resetearSelect()
        }else{
            this.setState({nivel3: event.target.value});
        }
    }

    onConfirmarAgendamiento() {
        this.dialog.show({
            body: 'Confirmar Agendamiento?',
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

    validaHorayFecha(){
        console.log('Validando Datos')
        if(this.state.Hora !== '' && this.state.Fecha !== '' ){
            return true
        }else{
            alert('Faltan campos que completar')
            return false
        }
    }

    onConfirmar() {
        this.dialog.show({
            body: 'Confirmar Tipificaciones?',
            actions: [
              Dialog.CancelAction(),
              Dialog.OKAction(()=>this.handleEnvioTipificaciones())
            ],
            bsSize: 'small',
            onHide: (dialog) => {
              dialog.hide()
              console.log('cerrando por apretar el fondo.')
            }
          })
    }

    async envioDatos() {
        //console.log(this.validaHorayFecha())
        if(this.validaHorayFecha() === true){
            const requestOptions = JSON.stringify({
                id_gestion: this.state.id_gestion,
                id_contacto: this.state.id_contacto,
                id_campana: this.state.id_campana,
                id_contacto_genesys: this.state.id_contacto_genesys,
                fono: this.state.fono,
                cola: this.state.cola,
                id_ejecutivo: this.state.id_ejecutivo,
                Fecha: this.state.Fecha,
                Hora: this.state.Hora,
                Observacion: this.state.Observacion
            })
            console.log(requestOptions)
            const urlAgendamiento ='https://b316wmuwh1.execute-api.us-east-1.amazonaws.com/default/res_json_relation'
            await axios.post(urlAgendamiento,requestOptions)
            .then(response => {
                console.log('exito al enviar POST Datos Agendamiento: ');
                document.getElementById('confirmar').disabled=true
                document.getElementById('exitoso2').hidden=false
                //console.log(response)
            })
            .catch(response => {
                console.log(response + ' error POST envio datos')
                document.getElementById('fallido2').hidden=false
            })
            
        }else{
            console.log(this.validaHorayFecha()+' Faltan campos')
        }
        
    }

    async handleEnvioTipificaciones(){
        const urlTipificaciones = 'https://b316wmuwh1.execute-api.us-east-1.amazonaws.com/default/res_json_gestiones'
        axios.defaults.headers.post['authorizationToken'] = '&S396b<eg5Zn(HiLe)BBNtc&';
        const requestOptions = JSON.stringify({
            id_gestion: this.state.id_gestion,
            id_contacto: this.state.id_contacto,
            id_campana: this.state.id_campana,
            id_contacto_genesys: this.state.id_contacto_genesys,
            fono: this.state.fono,
            cola: this.state.cola,
            id_ejecutivo: this.state.id_ejecutivo,
            contacto: this.state.contacto,
            nivel1: this.state.nivel1,
            nivel2: this.state.nivel2,
            nivel3: this.state.nivel3,
        })
        if(this.state.contacto !== '' && this.state.nivel1 !== '' && this.state.nivel2 !== '' &&
            this.state.nivel3 !== ''){
            console.log(requestOptions)
            await axios.post(urlTipificaciones,requestOptions)
            .then(response => {
                console.log('exito al enviar POST Tipificaciones: ');
                document.getElementById('exitoso1').hidden=false
                document.getElementById('finalizarTipificacion').disabled=true
                document.getElementById('formContacto').disabled=true
                document.getElementById('formContacto1').disabled=true
                document.getElementById('formContacto2').disabled=true
                document.getElementById('formContacto3').disabled=true                
            })
            .catch(response => {
                console.log(response + ' error POST envio datos')
                document.getElementById('fallido1').hidden=false
            })
            
        }else{
            alert('debe Seleccionar todas las tipificaciones')
        }

        if(this.state.nivel3 === 'ARGUMENTADO SI'){
            
            window.location.href='/formulario/users/'+this.state.id_ejecutivo+'/idcontacto/'+this.state.id_contacto+'/idinteraccion/'+this.state.id_gestion+'/idcampana/'
            +this.state.id_campana+'/idcontactogenesys/'+this.state.id_contacto_genesys+'/fono/'+this.state.fono+'/cola/'+this.state.cola
        }
    }

    async handleSubmit(e) {
        e.preventDefault();
        if(!this.state.contacto){
            this.setState({ formValid: false })
            return (alert('Ingresa tipificacion nivel 1!'))
        }
        if(!this.state.nivel1){
            this.setState({ formValid: false })
            return (alert('Ingresa tipificacion nivel 2!'))
        }
        if(!this.state.nivel2){
            this.setState({ formValid: false })
            return (alert('Ingresa tipificacion nivel 3!'))
        }
        if(!this.state.nivel3 ){
            this.setState({ formValid: false })
            return (alert('Ingresa tipificacion nivel 4!'))
        }
        if (this.state.formValid) {
            this.onConfirmar()
        }
    }

    mostrarTitular(){
        this.setState({
            showTitular: true,
        })
    }
    mostrarBeneficiario(){
        this.setState({
            showBenef: true,
            
        })
    }
    mostrarAdicional(){
        this.setState({
            showAdicional: true,
        })
    }
    ocultarModal(){
        this.setState({
            showTitular: false,
            showAdicional: false,
            showBenef: false,
        })
    }

    render(){

        return(
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formContacto">
                            <Form.Label>Contactado</Form.Label>
                            <Form.Control size='sm' as="select" value={this.state.contacto} onChange={this.handleChangeContacto} required>
                                <option value=''>Seleccionar</option>
                                <Contacto value={this.state.contacto}/>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formContacto1">
                            <Form.Label>Nivel 1</Form.Label>
                            <Form.Control size='sm' as="select" value={this.state.nivel1} onChange={this.handleChange1} required> 
                                <option value=''>Seleccionar</option>
                                <Nivel1 data={this.state.contacto}></Nivel1>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formContacto2">
                            <Form.Label>Nivel 2</Form.Label>
                            <Form.Control size='sm' as="select" value={this.state.nivel2} onChange={this.handleChange2} required>
                                <option value=''>Seleccionar</option>
                                <Nivel2 data={this.state.nivel1}></Nivel2>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formContacto3">
                            <Form.Label>Nivel 3</Form.Label>
                            <Form.Control size='sm' as="select" value={this.state.nivel3} onChange={this.handleChange3} required>
                                <option value=''>Seleccionar</option>
                                <Nivel3 data={this.state.nivel2}></Nivel3>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>    
                        <Form.Group as={Col} controlId="formFinalizar">
                        <Form.Label></Form.Label>
                        <Button id='finalizarTipificacion' type='submit'>Enviar Tipificacion</Button>
                        <Dialog ref={(component) => { this.dialog = component }} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group>
                            <Alert variant="success" hidden={true} id='exitoso1'>
                                <Alert.Heading>Tipificaciones enviadas correcatamente</Alert.Heading>
                            </Alert>
                        </Form.Group>
                        <Form.Group>
                            <Alert variant="danger" hidden={true} id='fallido1'>
                                <Alert.Heading>Tipificaciones no enviadas</Alert.Heading>
                            </Alert>
                        </Form.Group>
                    </Form.Row>
                </Form>
                <Row>
                    <MostrarInfo data={this.state.id_contacto}></MostrarInfo>
                </Row>
                <div  id='agendamiento'>
                <Row className="justify-content-md-center">
                    <Col>
                        <Jumbotron>
                            <ObsAgendamiento data={this.state.id_contacto}></ObsAgendamiento>
                            <h1>Agendamiento</h1>
                            <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formNombre">
                                <Form.Label>Hora</Form.Label>
                                <Form.Control type="time" placeholder="Hora" size='sm'name='Hora' value={this.state.Hora} onChange={this.handleInputChangeAgendamiento}/>
                                </Form.Group>
                                
                                <Form.Group as={Col} controlId="formApPaterno">
                                <Form.Label>Fecha</Form.Label>
                                <Form.Control type="date"  name='Fecha' size='sm' value={this.state.Fecha} onChange={this.handleInputChangeAgendamiento}/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Observación</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Observacion......" size="sm" name='Observacion' value={this.state.Observacion} onChange={this.handleInputChangeAgendamiento}/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group >
                                <Button variant="primary" type="button" id='confirmar' onClick={this.onConfirmarAgendamiento}>
                                    Agendar
                                </Button>
                                <Dialog ref={(component) => { this.dialog = component }} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group>
                                    <Alert variant="success" hidden={true} id='exitoso2'>
                                        <Alert.Heading>Agendamiento exitoso</Alert.Heading>
                                    </Alert>
                                </Form.Group>
                                <Form.Group>
                                    <Alert variant="danger" hidden={true} id='fallido2'>
                                        <Alert.Heading>Agendamiento no guardado</Alert.Heading>
                                    </Alert>
                                </Form.Group>
                            </Form.Row>
                            </Form>
                        </Jumbotron>
                    </Col>
                </Row>
                </div>
            </Container>
        )
    }
}

export default Tipificaciones