import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Col, Button, Modal, Alert} from "react-bootstrap";
import Dialog from 'react-bootstrap-dialog';
import axios from 'axios';
import clRut from '@validatecl/rut';
import Comuna from '../components/comuna';
import Ciudad from '../components/ciudad';
import ModalAdicional from '../components/modalAdicional'
import ModalBeneficiario from '../components/ModalBeneficiario'
import Planes from '../components/getPlanes'
import Nacionalidad from '../components/nacionalidad'
import EncabezadoCliente from '../components/header'
import Profesion from '../components/profesion';

let baseUrl = 'https://b316wmuwh1.execute-api.us-east-1.amazonaws.com/default/res_json_formulario'
axios.defaults.headers.post['authorizationToken'] = '&S396b<eg5Zn(HiLe)BBNtc&';


class Titular extends React.Component{

    constructor(props){

        const { match: { params } } = props;
        console.log(params)

        super(props)
        this.state = {
            id_ejecutivo: params.idEjecutivo,
            id_gestion: params.idGestion,
            id_contacto: params.idContacto,
            id_campana: params.idCampana,
            id_contacto_genesys: params.idContactoGenesys,
            fono: params.fono,
            cola: params.cola,
            Tipoplan: '',
            pro_name_cam: '',
            pro_desc_plan: '',
            pro_valu_plan: '',
            pro_cod_plan_sponsor: '',
            pro_sponsor: '',
            Nombre: '',
            SegundoNombre: '',
            ApPaterno: '',
            ApMaterno: '',
            Fechanacimiento: '',
            Comuna: '',
            Ciudad: '',
            ComunaId: '',
            CiudadId: '',
            Direccion: '',
            Numeracion: '',
            TipoCalle: '',
            TipoVivienda: this.setState.TipoVivienda,
            Telefono: '',
            Mail: '',
            cod_nacionalidad: '',
            cod_nacionalidad_campana: '',
            Nacionalidad: '',
            Profesion: '',
            Rut: '',
            TipoBeneficiario: '',
            Observacion: '',
            TipoAgregado: '',
            CodigoOperacion: '',
            formValid: true,
            enviado : 0
        };
        
        this.envioDatosBenef = this.envioDatosBenef.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputChangeSelect = this.handleInputChangeSelect.bind(this);
        this.handleChangeCiudad = this.handleChangeCiudad.bind(this)
        this.handleChangeComuna = this.handleChangeComuna.bind(this)
        this.validarDatos = this.validarDatos.bind(this)
        this.validaRut = this.validaRut.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.mostrarAdicional = this.mostrarAdicional.bind(this)
        this.mostrarBeneficiario = this.mostrarBeneficiario.bind(this)
        this.ocultarModal = this.ocultarModal.bind(this)
        this.onConfirmar= this.onConfirmar.bind(this)
        this.handleinputCodigo= this.handleinputCodigo.bind(this)
    }

    handleinputCodigo(){
        this.setState({
            CodigoOperacion: clRut.format(this.state.Rut).split('-')[0]+'8149'
        })
    }

    onConfirmar() {
        this.dialog.show({
            body: 'Confirmar Datos Titular?',
            actions: [
              Dialog.CancelAction(),
              Dialog.OKAction(()=>this.envioDatosBenef())
            ],
            bsSize: 'small',
            onHide: (dialog) => {
              dialog.hide()
              console.log('cerrando por apretar el fondo.')
            }
          })
    }

    handleInputChange=(event)=>{
        //console.log('entro a handle input')
        const target = event.target;
        const valor = target.value;
        const nombre = target.name;
        //console.log('target: ' + target)
        console.log('valor: ' + valor)
        //console.log('nombre: ' + nombre)
        this.setState({
            [nombre]: valor.toUpperCase()
        });
    }

    handleInputChangeSelect=(event)=>{
        const target = event.target;
        const valor = target.value;
        const nombre = target.name;
        console.log('valor: ' + valor)
        this.setState({
            [nombre]: valor
        });
    }

    resetearSelect(){
        this.setState({
            ComunaId: '',
            Comuna: '',
            Ciudad: '',
            CiudadId:'',
        })
    }

    /*handleChangeRegion(event) {
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
    }*/

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

    validaRut(rut) {
        console.log('validando rut...')
        const isValid = clRut.validate(rut)

        console.log(isValid)
        if(isValid === false){
            alert('rut no valido, por favor escribir nuevamente');
            return false
        }
        return true
    }
    
    validarDatos(){
        console.log('Validando Datos')
        if(this.state.Tipoplan !== '' && this.state.Nombre !== '' && this.state.ApPaterno !== '' && this.state.ApMaterno !== '' && this.state.Fechanacimiento !== ''
         && this.state.Comuna !== '' && this.state.Ciudad !== '' && this.state.ComunaId !== ''
         && this.state.CiudadId !== '' && this.state.Direccion !== '' && this.state.Telefono !== '' && this.state.Mail !== '' && this.state.Rut !== ''
         && this.state.Profesion !== '' && this.state.Nacionalidad !== ''){
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
    

    async envioDatosBenef() {
        this.handleinputCodigo()
        const body = JSON.stringify({
            id_gestion: this.state.id_gestion,
            id_contacto: this.state.id_contacto,
            id_campana: this.state.id_campana,
            id_contacto_genesys: this.state.id_contacto_genesys,
            fono: this.state.fono,
            cola: this.state.cola,
            id_ejecutivo: this.state.id_ejecutivo,
            Tipoplan: this.state.Tipoplan.split('*')[1],
            pro_name_cam: this.state.Tipoplan.split('*')[0],
            pro_desc_plan: this.state.Tipoplan.split('*')[2],
            pro_valu_plan: this.state.Tipoplan.split('*')[3],
            pro_cod_plan_sponsor: this.state.Tipoplan.split('*')[4],
            pro_sponsor: this.state.Tipoplan.split('*')[5],
            Nombre: this.state.Nombre,
            SegundoNombre: this.state.SegundoNombre,
            ApPaterno: this.state.ApPaterno,
            ApMaterno: this.state.ApMaterno,
            Fechanacimiento: this.state.Fechanacimiento,
            Comuna: this.state.Comuna.split('-')[1],
            Ciudad: this.state.Ciudad.split('-')[1],
            ComunaId: this.state.ComunaId,
            CiudadId: this.state.CiudadId,
            Direccion: this.state.Direccion,
            Numeracion: this.state.Numeracion,
            TipoCalle: this.state.TipoCalle,
            TipoVivienda: this.setState.TipoVivienda,
            Telefono: this.state.Telefono,
            Mail: this.state.Mail,
            cod_nacionalidad: this.state.Nacionalidad.split('-')[0],
            cod_nacionalidad_campana: this.state.Nacionalidad.split('-')[1],
            Nacionalidad: this.state.Nacionalidad.split('-')[2],
            Profesion: this.state.Profesion.split('-')[1],
            ProfesionId: this.state.Profesion.split('-')[0],
            Rut: clRut.format(this.state.Rut),
            TipoBeneficiario: this.state.TipoBeneficiario,
            Observacion: this.state.Observacion,
            TipoAgregado: 'Titular',
            CodigoOperacion: clRut.format(this.state.Rut).split('-')[0]+'8149',
        })
        console.log(body)
        if(this.validarDatos() === true){
            if(this.state.Rut !== ''){
                if(this.validaRut(this.state.Rut) === true){
                    await axios.post(baseUrl,body)
                    .then(response => {
                        console.log(response.status + ' exito al enviar POST Datos Titular');
                        if (response.status === 200) {
                            this.state.enviado++;
                            //console.log(this.state.enviado);   
                            console.log('Envio a parent');
                            window.parent.postMessage({gestion_finished:true}, "*")
                        }
                        document.getElementById('exitoso').hidden=false

                        if(this.state.enviado >= 1){
                            document.getElementById('Titular').disabled=true
                            if(this.state.TipoBeneficiario === 'Beneficiario Adicional'){        
                                document.getElementById('Beneficiario').hidden=false
                                document.getElementById('Adicional').hidden=false
                            }
                        }
                    })
                    .catch(response => {
                        console.log(response + ' error POST envio datos')
                        document.getElementById('fallido').hidden=false
                    })
                }
            }
        }
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
        var currentTime = new Date()
        var month1 = currentTime.getMonth() + 1
        var day1 = currentTime.getDate()
        var year1 = currentTime.getFullYear()
        if (month1<10) month1="0"+month1;
        if (day1<10) day1="0"+day1;
        const curdate = year1 + "-" + month1 + "-" + day1
        return(
            <Container>
                <EncabezadoCliente data={this.state.id_contacto}></EncabezadoCliente>
                <h3>Datos Titular</h3>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Codigo Operacion</Form.Label>
                            <Form.Control name='CodigoOperacion' disabled value={this.state.CodigoOperacion} placeholder={this.state.CodigoOperacion} required/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Plan</Form.Label>
                            <Form.Control as="select" name='Tipoplan' value={this.state.Tipoplan} onChange={this.handleInputChangeSelect} required>
                                <option value=''>Tipo Plan</option>
                                <Planes></Planes>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Primer Nombre</Form.Label>
                            <Form.Control placeholder="Nombre" name='Nombre' value={this.state.Nombre} onChange={this.handleInputChange} required/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Segundo Nombre</Form.Label>
                            <Form.Control placeholder="Segundo Nombre" name='SegundoNombre' value={this.state.SegundoNombre} onChange={this.handleInputChange}/>
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Label>Apellido Paterno</Form.Label>
                            <Form.Control placeholder="Ap Paterno" name='ApPaterno' value={this.state.ApPaterno} onChange={this.handleInputChange} required/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Apellido Materno</Form.Label>
                            <Form.Control placeholder="Ap Materno"  name='ApMaterno' value={this.state.ApMaterno} onChange={this.handleInputChange} required/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Fecha de nacimiento</Form.Label>
                            <Form.Control placeholder="Fecha nacimiento" type='date' max={curdate} min="1900-01-01" name='Fechanacimiento' value={this.state.Fechanacimiento} onChange={this.handleInputChange} required/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Rut</Form.Label>
                            <Form.Control placeholder="11111111-1"  name='Rut' value={this.state.Rut} onChange={this.handleInputChange} required/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Localidad</Form.Label>
                            <Form.Control size='md' as="select" name='Ciudad' value={this.state.Ciudad} onChange={this.handleChangeCiudad} required>
                            <option value=''>Seleccionar</option>
                            <Ciudad data={500}></Ciudad>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Comuna</Form.Label>
                            <Form.Control size='md' as="select" name='Comuna' value={this.state.Comuna} onChange={this.handleChangeComuna} required>
                                <option value=''>Seleccionar</option>
                                <Comuna data={this.state.CiudadId}></Comuna>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Tipo de calle</Form.Label>
                            <Form.Control size='md' as="select" name='TipoCalle' value={this.state.TipoCalle} onChange={this.handleInputChangeSelect} required>
                                <option value=''>Tipo Calle</option>
                                <option value='Avenida'>Avenida</option>
                                <option value='Pasaje'>Pasaje</option>
                                <option value='Calle'>Calle</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Direccion</Form.Label>
                            <Form.Control placeholder="Direccion" name='Direccion' value={this.state.Direccion} onChange={this.handleInputChange} required/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Tipo Vivienda</Form.Label>
                            <Form.Control size='md' name='TipoVivienda' placeholder="Observacion vivienda, depto,torre,villa,parcela,etc" value={this.state.TipoVivienda} onChange={this.handleinputChangeSelect}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Numeracion</Form.Label>
                            <Form.Control placeholder="Numeracion" name='Numeracion' type='number'value={this.state.Numeracion} onChange={this.handleInputChange} required/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control placeholder="Telefono" typer="number" name='Telefono' value={this.state.Telefono} onChange={this.handleInputChange} required/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Mail</Form.Label>
                            <Form.Control placeholder="Mail" type='email' name='Mail' value={this.state.Mail} onChange={this.handleInputChange} required/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formProfesion" >
                            <Form.Label>Profesion</Form.Label>
                            <Form.Control as='select' name='Profesion' value={this.state.Profesion} onChange={this.handleInputChangeSelect}>
                                <option value=''>Profesion</option>
                                <Profesion></Profesion>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Nacionalidad</Form.Label>
                            <Form.Control as="select" name='Nacionalidad' value={this.state.Nacionalidad} onChange={this.handleInputChangeSelect} required>
                                <option value=''>Seleccionar</option>
                                <Nacionalidad></Nacionalidad>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Beneficiarios</Form.Label>
                            <Form.Check type='radio' name ='TipoBeneficiario' label='Herederos Legales' onChange={this.handleInputChangeSelect}
                            value='Heredero Legal' required/>
                            <Form.Check type='radio' name ='TipoBeneficiario' label='Ingresar Beneficiarios' onChange={this.handleInputChangeSelect}
                            value='Beneficiario Adicional' required/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Control placeholder="Observaciones" name='Observacion' typer='textarea' value={this.state.Observacion} onChange={this.handleInputChange}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Button variant="primary" id='Titular' type="submit">Siguiente</Button>
                            <Dialog ref={(component) => { this.dialog = component }} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group>
                            <Alert variant="success" hidden id='exitoso'>
                                <Alert.Heading>Datos enviados correctamente</Alert.Heading>
                            </Alert>
                        </Form.Group>
                        <Form.Group>
                            <Alert variant="danger" hidden id='fallido'>
                                <Alert.Heading>Datos no enviados</Alert.Heading>
                            </Alert>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formbtnBeneficiario">
                            <Button variant="primary" type="button" id='Adicional' onClick={this.mostrarAdicional} hidden>Agregar Adicional</Button>
                            <br></br>
                            <br></br>
                            <Button variant="primary" type="button" id='Beneficiario' onClick={this.mostrarBeneficiario} hidden>Agregar Beneficiario</Button>
                        </Form.Group>
                    </Form.Row>
                </Form>
                <Modal size="lg" dialogClassName="modal-90w"
                 show={this.state.showBenef}
                 onHide={this.ocultarModal}
                 backdrop="static"
                 keyboard={false}>
                    <ModalBeneficiario
                    id_gestion={this.state.id_gestion}
                    id_contacto={this.state.id_contacto}
                    id_campana={this.state.id_campana}
                    id_contacto_genesys={this.state.id_contacto_genesys}
                    cola={this.state.cola}
                    id_ejecutivo={this.state.id_ejecutivo}>
                    </ModalBeneficiario>
                </Modal>
                <Modal size="lg" dialogClassName="modal-90w"
                 show={this.state.showAdicional}
                 onHide={this.ocultarModal}
                 backdrop="static"
                 keyboard={false}>
                    <ModalAdicional
                    id_gestion={this.state.id_gestion}
                    id_contacto={this.state.id_contacto}
                    id_campana={this.state.id_campana}
                    id_contacto_genesys={this.state.id_contacto_genesys}
                    fono={this.state.fono}
                    cola={this.state.cola}
                    id_ejecutivo={this.state.id_ejecutivo}>
                    </ModalAdicional>
                </Modal>
            </Container>
        )
    }
}
export default Titular;