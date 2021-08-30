import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Col, Button, Modal} from "react-bootstrap";
import axios from 'axios';
import clRut from '@validatecl/rut';
import Region from './region';
import Comuna from './comuna';
import Ciudad from './ciudad';

let baseUrl = 'https://b316wmuwh1.execute-api.us-east-1.amazonaws.com/default/res_json_formulario'
axios.defaults.headers.post['authorizationToken'] = '&S396b<eg5Zn(HiLe)BBNtc&';


class ModalTitular extends React.Component{

    constructor(props){

        super(props)
        this.state = {
            id_gestion: '',
            id_contacto: '',
            id_campana: '',
            id_contacto_genesys: '',
            fono: '',
            cola:'',
            id_ejecutivo: '',
            Tipoplan:'',
            Nombre:'',
            SegundoNombre:'',
            ApPaterno:'',
            ApMaterno:'',
            Fechanacimiento:'',
            Rut:'',
            Region:'',
            Ciudad:'',
            Comuna:'',
            RegionId:'',
            CiudadId:'',
            ComunaId:'',
            Direccion:'',
            Numeracion:'',
            TipoCalle:'',
            Telefono:'',
            Mail:'',
            Observacion:'',
            formValid: true,
            enviado : 0
        };
        
        this.envioDatosBenef = this.envioDatosBenef.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleChangeRegion = this.handleChangeRegion.bind(this)
        this.handleChangeCiudad = this.handleChangeCiudad.bind(this)
        this.handleChangeComuna = this.handleChangeComuna.bind(this)
        this.validarDatos = this.validarDatos.bind(this)
        this.validaRut = this.validaRut.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }    

    async componentDidMount() {
        
        //console.log('llamo servicio mostrar obserbacion')
        //console.log('valido dato:  ' +this.props.id_gestion)
        this.setState({
            id_gestion: this.props.id_gestion,
            id_contacto: this.props.id_contacto,
            id_campana: this.props.id_campana,
            id_contacto_genesys: this.props.id_contacto_genesys,
            fono: this.props.fono,
            cola: this.props.cola,
            id_ejecutivo: this.props.id_ejecutivo,
        })
        
    }

    handleInputChange=(event)=>{
        //console.log('entro a handle input')
        const target = event.target;
        const valor = target.value;
        const nombre = target.name;
        /*console.log('target: ' + target)
        console.log('valor: ' + valor)
        console.log('nombre: ' + nombre)*/
        this.setState({
            [nombre]: valor
        });
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
    
    validarDatos(){
        console.log('Validando Datos')
        if(this.state.Tipoplan !== '' && this.state.Nombre !== '' && this.state.ApPaterno !== '' && this.state.ApMaterno !== '' && this.state.Fechanacimiento !== ''
         && this.state.Region !== '' && this.state.Comuna !== '' && this.state.Ciudad !== '' && this.state.RegionId !== '' && this.state.ComunaId !== ''
         && this.state.CiudadId !== '' && this.state.Direccion !== '' && this.state.Telefono !== '' && this.state.Mail !== '' && this.state.Rut !== '' && this.state.Observacion !== ''){
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
            this.envioDatosBenef()
        }
    }
    

    async envioDatosBenef() {
        
        const body = JSON.stringify({
            id_gestion: this.state.id_gestion,
            id_contacto: this.state.id_contacto,
            id_campana: this.state.id_campana,
            id_contacto_genesys: this.state.id_contacto_genesys,
            fono: this.state.fono,
            cola: this.state.cola,
            id_ejecutivo: this.state.id_ejecutivo,
            Tipoplan: this.state.Tipoplan,
            Nombre: this.state.Nombre,
            SegundoNombre: this.state.SegundoNombre,
            ApPaterno: this.state.ApPaterno,
            ApMaterno: this.state.ApMaterno,
            Fechanacimiento: this.state.Fechanacimiento,
            Region: this.state.Region.split('-')[1],
            Comuna: this.state.Comuna.split('-')[1],
            Ciudad: this.state.Ciudad.split('-')[1],
            RegionId: this.state.RegionId,
            ComunaId: this.state.ComunaId,
            CiudadId: this.state.CiudadId,
            Direccion: this.state.Direccion,
            Numeracion: this.state.Numeracion,
            TipoCalle: this.state.TipoCalle,
            Telefono: this.state.Telefono,
            Mail: this.state.Mail,
            Rut: clRut.format(this.state.Rut),
            Observacion: this.state.Observacion
        })
        if(this.validaRut(this.state.Rut) !== false){
            await axios.post(baseUrl,body)
            .then(response => {
                console.log(response.status + ' exito al enviar POST Datos Titular');
                if (response.status === 200) {
                    this.state.enviado++;
                    console.log(this.state.enviado);   
                }
            })
            .catch(response => {
                console.log(response + ' error POST envio datos')
            })
        }

        if(this.state.enviado >= 1){
            document.getElementById('Titular').disabled=true
            document.getElementsByClassName('close')[0].click()
            document.getElementById('Beneficiario').hidden=false
            document.getElementById('Adicional').hidden=false
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
                    Datos Titular
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Control as="select" name='Tipoplan' value={this.state.Tipoplan} onChange={this.handleInputChange} required>
                                    <option value=''>Tipo Plan</option>
                                    <option>Plan 01</option>
                                    <option>Plan 02</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control placeholder="Nombre" name='Nombre' value={this.state.Nombre} onChange={this.handleInputChange} required/>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control placeholder="Segundo Nombre" name='SegundoNombre' value={this.state.SegundoNombre} onChange={this.handleInputChange}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Control placeholder="Ap Paterno" name='ApPaterno' value={this.state.ApPaterno} onChange={this.handleInputChange} required/>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control placeholder="Ap Materno"  name='ApMaterno' value={this.state.ApMaterno} onChange={this.handleInputChange} required/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Control placeholder="Fecha nacimiento" type='date' max={curdate} name='Fechanacimiento' value={this.state.Fechanacimiento} onChange={this.handleInputChange} required/>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control placeholder="11111111-1"  name='Rut' value={this.state.Rut} onChange={this.handleInputChange} required/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Region</Form.Label>
                                <Form.Control size='md' as="select" name='Region' value={this.state.Region} onChange={this.handleChangeRegion} required>
                                    <option value=''>Seleccionar</option>
                                    <Region></Region>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Localidad</Form.Label>
                                <Form.Control size='md' as="select" name='Ciudad' value={this.state.Ciudad} onChange={this.handleChangeCiudad} required>
                                <option value=''>Seleccionar</option>
                                <Ciudad data={this.state.RegionId}></Ciudad>
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
                                <Form.Control placeholder="Direccion" name='Direccion' value={this.state.Direccion} onChange={this.handleInputChange} required/>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control placeholder="Numeracion" name='Numeracion' type='number'value={this.state.Numeracion} onChange={this.handleInputChange} required/>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control size='md' as="select" name='TipoCalle' value={this.state.TipoCalle} onChange={this.handleInputChange} required>
                                    <option value=''>Tipo Calle</option>
                                    <option value='Avenida'>Avenida</option>
                                    <option value='Pasaje'>Pasaje</option>
                                    <option value='Calle'>Calle</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Control placeholder="Telefono" typer="number" name='Telefono' value={this.state.Telefono} onChange={this.handleInputChange} required/>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control placeholder="Mail" type='email' name='Mail' value={this.state.Mail} onChange={this.handleInputChange} required/>
                            </Form.Group>
                                </Form.Row>
                                <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Control placeholder="Observaciones" name='Observacion' value={this.state.Observacion} onChange={this.handleInputChange} required/>
                            </Form.Group>
                                </Form.Row>
                                <Form.Row>
                            <Form.Group as={Col}>
                                <Button variant="primary" type="submit">Terminar</Button>
                            </Form.Group>
                                </Form.Row>
                            </Form>
                        </Modal.Body>
            </Container>
            
        )
    }
}
export default ModalTitular;