import React, { useState } from "react";
import './App.css'
import { useParams } from "react-router-dom";
import { Button, Form, Modal,FormControl, InputGroup, Table, Row, Col, Container, DropdownButton, Dropdown, FormGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeContainer from './containers/HomeContainer'
import UsersList from './userList';
import e from "cors";
import Contacto from './component/contacto';
import Nivel1 from './component/nivel1';
import Nivel2 from './component/nivel2';
import Nivel3 from './component/nivel3';
import Region from './component/region';
import Comuna from './component/comuna';
import Ciudad from './component/ciudad';
import UsersView from './component/viewUsers';
import { set } from "react-hook-form";
import { data } from "jquery";
import nivel1 from "./component/nivel1";
import nivel2 from "./component/nivel2";
import nivel3 from "./component/nivel3";
import clRut from '@validatecl/rut';



export default function Users() {
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
    const [show5, setShow5] = useState(false)
    const [showTitular, setShowTitular] = useState(false);
    const [showAdicional, setShowAdicional] = useState(false);
    const [showBenef, setShowBenef] = useState(false);
    const { id } = useParams();
    const { idcontacto } = useParams();
    const { idinteraccion } = useParams();
    const { idcampana } = useParams();
    const { idcontactogenesys } = useParams();
    const [value,setValue]=useState('');
    const [value2,setValue2]=useState('');
    const [value3,setValue3]=useState('');
    const [value4,setValue4]=useState('');
    const [formTipoPlan,setFormTipoPlan]=useState('');
    const [formNombre,setFormNombre]=useState('');
    const [formApPaterno,setFormApPaterno]=useState('');
    const [formApMaterno,setFormApMaterno]=useState('');
    const [formfechanacimiento,setFormFechaNacimiento]=useState('');
    const [formDireccion,setFormDireccion]=useState('');
    const [formTelefono,setFormTelefono]=useState('');
    const [formMail,setFormMail]=useState('');
    const [formNombreBenef,setNombreBenef]=useState('');
    const [formApPaternoBenef,setFormApPaternoBenef]=useState('');
    const [formApMaternoBenef,setForApMaternoBenef]=useState('');
    const [formMailBenef,setFormMailBenef]=useState('');
    const [formTelefonoBenef,setFormTelefonoBenef]=useState('');
    const [formParentescoBenef,setFormParentescoBenef]=useState('');
    const [formPorcentajeBenef,setFormPorcentajeBenef]=useState('');
    const [formFechaNacimientoBenef,setFormFechaNacimientoBenef]=useState('');
    const [formNombreAdi,setFormNombreAdi]=useState('');
    const [formApMaternoAdi,setFormApPaternoAdi]=useState('');
    const [formApPaternoAdi,setFormApMaternoAdi]=useState('');
    const [formRutAdi,setFormRutAdi]=useState('');
    const [formProfesionAdi,setFormProfesionAdi]=useState('');
    const [formParentescoAdi,setFormParentescoAdi]=useState('');
    const [formNacionalidadAdi,setFormNacionalidadAdi]=useState('');
    const [formfechanacimientoAdi,setFormFechaNacimientoAdi]=useState('');
    const [formRut,setFormRut]=useState('');
    const [formObservacion,setFormObservacion]=useState('');
    const [formDireccionBenef,setFormDireccionBenef]=useState('');
    const [formRutBenef,setFormRutBenef]=useState('');
    const [formResidencia,setFormResidencia]=useState('');
    const [contacto_value,setContacto_value]=useState('');
    const [ni1_value,setNi1_value]=useState('');
    const [ni2_value,setNi2_value]=useState('');
    const [idRegion,setidRegion]=useState('');
    const [idciudad,setidciudad]=useState('');
    const [idcomuna,setidcomuna]=useState('');
    const [region,setregion]=useState('');
    const [ciudad,setciudad]=useState('');
    const [comuna,setcomuna]=useState('');
    const [regionben,setregionben]=useState('');
    const [ciudadben,setciudadben]=useState('');
    const [comunaben,setcomunaben]=useState('');
    const calculated = clRut.calculate(formRut);
    const verififer = clRut.verifier(formRut);
    const formatted = clRut.format(formRut);
    const digits = clRut.digits(formRut);
    const clean = clRut.clean(formRut);

    
    const handleSelect=(e)=>{
        console.log(e);
        setShow(true);
        setValue(e.split('-')[1])
        setContacto_value(e.split('-')[0])
    }
    const handleSelect2=(e)=>{
        console.log(e);
        setShow2(true);
        setValue2(e.split('-')[1])
        setNi1_value(e.split('-')[0])
    }
    const handleSelect3=(e)=>{
        console.log(e);
        setShow3(true);
        setValue3(e.split('-')[1])
        setNi2_value(e.split('-')[0])
    }
    const handleSelect4=(e)=>{
        console.log(e);
        setShow4(true);
        setValue4(e.split('-')[1])
    }

    const handleSelect5=(e)=>{
        setShow5(true)
        setFormTipoPlan(e)
        setFormNombre(e)
        setFormApPaterno(e)
        setFormApMaterno(e)
        setFormFechaNacimiento(e)
        setFormDireccion(e)
        setFormTelefono(e)
        setFormMail(e)
        setFormRut(e)
        setFormObservacion(e)
        e.preventDefault();
        if (formTipoPlan== '' || formNombre== '' || formApPaterno== '' || formApMaterno== '' || formfechanacimiento== '' 
        || region== '' || comuna== '' || ciudad== '' || formDireccion== '' || formTelefono== '' || formMail== '' || formRut== '' || formObservacion== ''){
            alert('debe completar todos los campos')
        }
        else{
            function pruebaemail (formMail){
                const isValid = clRut.validate(formRut);
                if (isValid == false){
                    alert('rut no valido, por favor escribir nuevamente');
                    document.getElementById('formRut').value = '';
                }
                const re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
                if(!re.exec(formMail)){
                    alert('email no valido, por favor escribir nuevamente');
                    document.getElementById('formMail').value = '';
                }
                else {
                    const titular = {
                        id_gestion: idinteraccion,
                        id_contacto: idcontacto,
                        id_campana: idcampana,
                        id_contacto_genesys: idcontactogenesys,
                        id_ejecutivo: id,
                        TipoPlan: formTipoPlan,
                        Nombre: formNombre,
                        ApPaterno: formApPaterno,
                        ApMaterno: formApMaterno,
                        fechanacimiento: formfechanacimiento,
                        Region: region,
                        Comuna: comuna,
                        Ciudad: ciudad,
                        Direccion: formDireccion,
                        Telefono: formTelefono,
                        Mail: formMail,
                        Rut: formRut,
                        Observacion: formObservacion,
                    }
                    const titulares = {
                        titulares: [titular]
                    }

                    titular.titulares = titulares;

                    const requestOptions = {
                        method: 'POST',
                        headers: { 
                            'Content-Type': 'application/json',
                            'authorizationToken': '&S396b<eg5Zn(HiLe)BBNtc&',
                        },
                        body: JSON.stringify(titular, ['id_gestion','id_contacto','id_campana','id_contacto_genesys',
                        'id_ejecutivo','TipoPlan','Nombre','ApPaterno','ApMaterno','fechanacimiento','Region','Comuna',
                        'Ciudad','Direccion','Telefono','Mail','Rut','Observacion']),
                    };
                    if (isValid == true){
                        fetch('https://b316wmuwh1.execute-api.us-east-1.amazonaws.com/default/res_json_formulario', requestOptions)
                        .then(response => response.json()).then(response => {console.log(response)});
                        e.preventDefault();
                        setShowTitular(false)
                        document.getElementById('guardar_tipificacion').disabled = true;
                    }
                    
                }
            }
            pruebaemail(formMail);
        }
    }
    const handleSelect6=(e)=>{
        console.log(e);
        setNombreBenef(e)
        setFormApPaternoBenef(e)
        setForApMaternoBenef(e)
        setFormMailBenef(e)
        setFormTelefonoBenef(e)
        setFormParentescoBenef(e)
        setFormPorcentajeBenef(e)
        setFormFechaNacimientoBenef(e)
        setFormDireccionBenef(e)
        setFormRutBenef(e)
        e.preventDefault();
        if(formNombreBenef == '' || formApPaternoBenef == '' || formApMaternoBenef == '' || formTelefonoBenef == '' || formMailBenef == ''
         || formFechaNacimientoBenef == '' || comunaben == '' || regionben == '' || ciudadben == '' || formDireccionBenef == ''
         || formParentescoBenef == '' || formPorcentajeBenef == '' || formRutBenef == ''){
            alert('debe completar todos los campos')
        }
        else{
            function pruebaemail (formMailBenef){
                const isValid = clRut.validate(formRutBenef);
                const re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
                if (isValid == false){
                    alert('rut no valido, por favor escribir nuevamente');
                    document.getElementById('formRutBenef').value = '';                
                }
                if(!re.exec(formMailBenef)){
                    alert('email no valido, por favor escribir nuevamente');
                    document.getElementById('formMailBenef').value = '';
                }
                else {
                    const beneficiario = {
                        id_gestion: idinteraccion,
                        id_contacto: idcontacto,
                        id_campana: idcampana,
                        id_contacto_genesys: idcontactogenesys,
                        id_ejecutivo: id,
                        Nombre: formNombreBenef,
                        ApPaterno: formApPaternoBenef,
                        ApMaterno: formApMaternoBenef,
                        Telefono: formTelefonoBenef,
                        Mail: formMailBenef,
                        Fechanacimiento: formFechaNacimientoBenef,
                        Comuna: comunaben,
                        Region: regionben,
                        Ciudad: ciudadben,
                        Direccion: formDireccionBenef,
                        Parentesco: formParentescoBenef,
                        Porcentaje: formPorcentajeBenef,
                        Rut: formRutBenef
                    }
                    const beneficiarios = {
                        beneficiarios: [beneficiario]
                    }
            
                    beneficiario.beneficiarios = beneficiarios;
                    const requestOptions = {
                        method: 'POST',
                        headers: { 
                            'Content-Type': 'application/json',
                            'authorizationToken': '&S396b<eg5Zn(HiLe)BBNtc&',
                        },
                        body: JSON.stringify(beneficiario, ['id_gestion','id_contacto','id_campana','id_contacto_genesys',
                        'id_ejecutivo','Nombre','ApPaterno','ApMaterno','Telefono','Mail','Fechanacimiento','Comuna','Region',
                        'Ciudad','Direccion','Parentesco','Porcentaje','Rut']),
                    };
                    if (isValid == true){
                    fetch('https://b316wmuwh1.execute-api.us-east-1.amazonaws.com/default/res_json_Beneficiario', requestOptions)
                    .then(response => response.json())
                    .then(response => {console.log(response)});
                    e.preventDefault();
                    setShowBenef(false)

                    }
                }
            }
            pruebaemail(formMailBenef);
        }
    }
    const handleSelect7=(e)=>{
        console.log(e);
        setFormNombreAdi(e)
        setFormApPaternoAdi(e)
        setFormApMaternoAdi(e)
        setFormRutAdi(e)
        setFormProfesionAdi(e)
        setFormParentescoAdi(e)
        setFormNacionalidadAdi(e)
        setFormFechaNacimientoAdi(e)
        setFormResidencia(e)
        e.preventDefault();
        if(formNombreAdi == '' || formApPaternoAdi == '' || formApMaternoAdi == ''
         || formfechanacimientoAdi == '' || formRutAdi == '' || formProfesionAdi == '' 
         || formParentescoAdi == '' || formNacionalidadAdi == '' || formResidencia == ''){
            alert('debe completar todos los campos')
        }
        else{
            const isValid = clRut.validate(formRutAdi);
            if (isValid == false){
                alert('rut no valido, por favor escribir nuevamente');
                document.getElementById('formRutAdi').value = '';                 
            }
            const adicional={
                id_gestion: idinteraccion,
                id_contacto: idcontacto,
                id_campana: idcampana,
                id_contacto_genesys: idcontactogenesys,
                id_ejecutivo: id,
                Nombre: formNombreAdi,
                ApPaterno: formApPaternoAdi,
                ApMaterno: formApMaternoAdi,
                fechanacimiento: formfechanacimientoAdi,
                rut: formRutAdi,
                profesion: formProfesionAdi,
                parentesco: formParentescoAdi,
                nacionalidad: formNacionalidadAdi,
                residencia: formResidencia,
            }
            const adicionales={
                adicionales: [adicional]
            }
    
            adicional.adicionales = adicionales
            const requestOptions = {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'authorizationToken': '&S396b<eg5Zn(HiLe)BBNtc&',
                },
                body: JSON.stringify(adicional, ['id_gestion','id_contacto','id_campana','id_contacto_genesys','id_ejecutivo',
                'Nombre','ApPaterno','ApMaterno','fechanacimiento','rut','profesion','parentesco','nacionalidad','residencia']),
            };
            if (isValid == true){
            fetch('https://b316wmuwh1.execute-api.us-east-1.amazonaws.com/default/res_json_Adicionales', requestOptions)
            .then(response => response.json())
            .then(response => {console.log(response)});
            e.preventDefault();
            setShowAdicional(false)
            }
                
        }
        
    }

    const handleSelectRegion=(e)=>{
        console.log('region'+e)
        setidRegion(e.split('-')[0])
        setregion(e.split('-')[1])
        setregionben(e.split('-')[1])
    }
    const handleSelectCiudad=(e)=>{
        console.log('ciudad'+e)
        setidciudad(e.split('-')[0])
        setciudad(e.split('-')[1])
        setciudadben(e.split('-')[1])
    }
    const handleSelectComuna=(e)=>{
        console.log('comuna'+e)
        setidcomuna(e.split('-')[0])
        setcomuna(e.split('-')[1])
        setcomunaben(e.split('-')[1])
    }

    const guardaTipicficaciones=(e)=>{

        console.log(value4)
        if (value4 == 'ARGUMENTADO SI'){
            setShowTitular(true);
        }
        else{
            setShowTitular(false)
            if(document.getElementById('guardar_tipificacion')){
                document.getElementById('guardar_tipificacion').disabled = true;
            }
            if(document.getElementById('input-group-dropdown-1')){
                document.getElementById('input-group-dropdown-1').disabled = true;
            }
            if(document.getElementById('input-group-dropdown-2')){
                document.getElementById('input-group-dropdown-2').disabled = true;
            }
            if(document.getElementById('input-group-dropdown-3')){
                document.getElementById('input-group-dropdown-3').disabled = true;
            }
            if(document.getElementById('input-group-dropdown-4')){
                document.getElementById('input-group-dropdown-4').disabled = true;
            }
        }
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'authorizationToken': '&S396b<eg5Zn(HiLe)BBNtc&',
            },
            body: JSON.stringify({
                    id_gestion: idinteraccion,
                    id_contacto: idcontacto,
                    id_campana: idcampana,
                    id_contacto_genesys: idcontactogenesys,
                    id_ejecutivo: id,
                    contacto: value,
                    nivel1: value2,
                    nivel2: value3,
                    nivel3: value4,
                }),
        };
        fetch('https://b316wmuwh1.execute-api.us-east-1.amazonaws.com/default/res_json_gestiones', requestOptions)
        .then(response => response.json())
        .then(response => {console.log(response)});
    }

    var currentTime = new Date()
    var month1 = currentTime.getMonth() + 1
    var day1 = currentTime.getDate()
    var year1 = currentTime.getFullYear()
    if (month1<10) month1="0"+month1;
    if (day1<10) day1="0"+day1;
    const curdate = year1 + "-" + month1 + "-" + day1
        
    return (
        <div >
            <br></br>
            <div >
                <UsersList/>
            </div>
            <Container >
                <Row className="text-left">
                    <Col xs={3}><InputGroup className="mb-4">
                        <DropdownButton
                            as={InputGroup.Prepend}
                            variant="outline-secondary"
                            title="Contacto"
                            id="input-group-dropdown-1"
                            onSelect={handleSelect}>
                            <Contacto/>
                        </DropdownButton>
                        <FormControl aria-describedby="basic-addon1" value={value}/>
                    </InputGroup>
                    </Col>
                    {show ? <Col id="col2" xs={3}><InputGroup className="mb-4">
                        <DropdownButton
                            as={InputGroup.Prepend}
                            variant="outline-secondary"
                            title="Nivel 1"
                            id="input-group-dropdown-2"
                            onSelect={handleSelect2}>
                            <Nivel1 data={contacto_value}/>
                        </DropdownButton>
                        <FormControl aria-describedby="basic-addon1" value={value2}/>
                    </InputGroup></Col> : null}
                    {show2? <Col id="col2" xs={3}><InputGroup className="mb-4">
                        <DropdownButton
                            as={InputGroup.Prepend}
                            variant="outline-secondary"
                            title="Nivel 2"
                            id="input-group-dropdown-3"
                            onSelect={handleSelect3}>
                            <Nivel2 data={ni1_value}/>
                        </DropdownButton>
                        <FormControl aria-describedby="basic-addon1" value={value3}/>
                    </InputGroup></Col> :null}
                    {show3? <Col id="col2" xs={3}><InputGroup className="mb-4">
                        <DropdownButton
                            as={InputGroup.Prepend}
                            variant="outline-secondary"
                            title="Nivel 3"
                            id="input-group-dropdown-4"
                            onSelect ={handleSelect4}>
                            <Nivel3 data={ni2_value}/>
                        </DropdownButton>
                        <FormControl aria-describedby="basic-addon1" value={value4}/>
                    </InputGroup></Col> :null}
                    <Col id="col2" xs={3}><InputGroup className="mb-4">
                    <Button variant="primary" id="guardar_tipificacion" type="button" onClick={guardaTipicficaciones} >Guardar Tipificacion</Button>
                    </InputGroup>
                    </Col>
                    {show4? <Col id="col2" xs={3}><InputGroup className="mb-4">
                    <Modal
                        size="lg"
                        show={showTitular}
                        onHide={() => setShowTitular(false)}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                        >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-custom-modal-styling-title">
                            Datos Titular
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <Form name="datosTitular" >
                            <Form.Row>
                            <Form.Group as={Col} controlId="formTipoPlan" value={formTipoPlan} onChange={e => setFormTipoPlan(e.target.value)} name='formTipoPlan' >
                                <Form.Control as="select">
                                <option>Tipo Plan</option>
                                <option>Plan 01</option>
                                <option>Plan 02</option>
                                </Form.Control>
                            </Form.Group>  
                            <Form.Group as={Col} controlId="formNombre" name='formNombre'  value={formNombre} onChange={e => setFormNombre(e.target.value)}>
                                <Form.Control placeholder="Nombre" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formApPaterno" name='formApPaterno' value={formApPaterno} onChange={e => setFormApPaterno(e.target.value)}>
                                <Form.Control placeholder="Ap Paterno" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formApMaterno" name='formApMaterno' value={formApMaterno} onChange={e => setFormApMaterno(e.target.value)}>
                                <Form.Control placeholder="Ap Materno" />
                            </Form.Group>
                            </Form.Row>
                            <Form.Row>
                            <Form.Group as={Col} controlId="formfechanacimiento" name='formfechanacimiento' value={formfechanacimiento} onChange={e => setFormFechaNacimiento(e.target.value)}>
                                <Form.Control placeholder="Fecha nacimiento" type='date' max={curdate}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formRut" name='formRut' value={formRut} onChange={e => setFormRut(e.target.value)} >
                                <Form.Control placeholder="11111111-1"/>
                            </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group>
                                    <InputGroup className="mb-4" >
                                    <DropdownButton
                                        as={InputGroup.Prepend}
                                        variant="outline-secondary"
                                        title="Region"
                                        id="input-group-dropdown-4"
                                        onSelect ={handleSelectRegion}>
                                        <Region></Region>
                                    </DropdownButton>
                                    <FormControl aria-describedby="basic-addon1" value={region}/>
                                    </InputGroup>
                                </Form.Group>
                                <FormGroup>
                                    <InputGroup className="mb-4">
                                <DropdownButton
                                as={InputGroup.Prepend}
                                variant="outline-secondary"
                                title="Ciudad"
                                id="input-group-dropdown-4"
                                onSelect ={handleSelectCiudad}>
                                <Ciudad data = {idRegion}>
                                </Ciudad>
                                </DropdownButton>
                                <FormControl aria-describedby="basic-addon1" value={ciudad}/>
                                </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                <InputGroup className="mb-4">
                                <DropdownButton
                                as={InputGroup.Prepend}
                                variant="outline-secondary"
                                title="Comuna"
                                id="input-group-dropdown-4"
                                onSelect ={handleSelectComuna}>
                                <Comuna data={idciudad}></Comuna>
                                </DropdownButton>
                                <FormControl aria-describedby="basic-addon1" value={comuna}/>
                                </InputGroup>
                                </FormGroup>
                            </Form.Row>
                            <Form.Row>
                            <Form.Group as={Col} controlId="formDireccion" name='formDireccion' value={formDireccion} onChange={e => setFormDireccion(e.target.value)}>
                                <Form.Control placeholder="Direccion" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formTelefono" name='formTelefono' value={formTelefono} onChange={e => setFormTelefono(e.target.value)}> 
                                <Form.Control placeholder="Telefono" typer="number"/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formMail" name='formMail' value={formMail} onChange={e => setFormMail(e.target.value)}>
                                <Form.Control placeholder="Mail" type='email'/>
                            </Form.Group>
                            </Form.Row>
                            <Form.Row>
                            <Form.Group as={Col} controlId="formObservacion" name='formObservacion' value={formfechanacimiento} onChange={e => setFormObservacion(e.target.value)}>
                                <Form.Control placeholder="Observaciones"/>
                            </Form.Group>
                            </Form.Row>
                            <Form.Row>
                            <Form.Group as={Col} controlId="formbutton1">
                                <Button variant="primary"  id='btnenviar' type="submit" onClick={handleSelect5}>Terminar</Button>
                            </Form.Group>
                            </Form.Row>
                        </Form>
                        </Modal.Body>
                        </Modal>
                    </InputGroup></Col> :null}
                    {show5? <Col id="col2" xs={3}><InputGroup className="mb-4">
                        <Form.Row>
                            <Form.Group as={Col} controlId="formbtnAdicional">
                                <Button variant="primary" size='sm' type="submit" onClick={() => setShowAdicional(true)}>Agregar Adicional</Button>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formbtnBeneficiario">
                                <Button variant="primary" size='sm' type="submit" onClick={() => setShowBenef(true)} >Agregar Beneficiario</Button>
                            </Form.Group>
                        </Form.Row>
                    <Modal
                    size="lg"
                    show={showBenef}
                    onHide={() => setShowBenef(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title">
                    <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                    Datos Beneficiario
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                    <Form.Row>  
                    <Form.Group as={Col} controlId="formNombre" value={formNombreBenef} onChange={e => setNombreBenef(e.target.value)}>
                    <Form.Control placeholder="Nombre" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formApPaterno" value={formApPaternoBenef} onChange={e => setFormApPaternoBenef(e.target.value)}>
                    <Form.Control placeholder="Ap Paterno" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formApMaterno" value={formApMaternoBenef} onChange={e => setForApMaternoBenef(e.target.value)}>
                    <Form.Control placeholder="Ap Materno" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formRutBenef" value={formRutBenef} onChange={e => setFormRutBenef(e.target.value)}>
                    <Form.Control placeholder="11111111-1" />
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group>
                            <InputGroup className="mb-4" >
                            <DropdownButton
                                as={InputGroup.Prepend}
                                variant="outline-secondary"
                                title="Region"
                                id="input-group-dropdown-4"
                                onSelect ={handleSelectRegion}>
                                <Region></Region>
                            </DropdownButton>
                            <FormControl aria-describedby="basic-addon1" value={regionben} id='input-region'/>
                            </InputGroup>
                        </Form.Group>
                        <FormGroup>
                            <InputGroup className="mb-4">
                        <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title="Ciudad"
                        id="input-group-dropdown-4"
                        onSelect ={handleSelectCiudad}>
                        <Ciudad data = {idRegion}>
                        </Ciudad>
                        </DropdownButton>
                        <FormControl aria-describedby="basic-addon1" value={ciudadben} id='input-ciudad'/>
                        </InputGroup>
                        </FormGroup>
                        <FormGroup>
                        <InputGroup className="mb-4">
                        <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title="Comuna"
                        id="input-group-dropdown-4"
                        onSelect ={handleSelectComuna}>
                        <Comuna data={idciudad}></Comuna>
                        </DropdownButton>
                        <FormControl aria-describedby="basic-addon1" value={comunaben} id='input-comuna'/>
                        </InputGroup>
                        </FormGroup>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId="formDireccion" value={formDireccionBenef} onChange={e => setFormDireccionBenef(e.target.value)}>
                    <Form.Control placeholder="Direccion" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formfechanacimiento" value={formFechaNacimientoBenef} onChange={e => setFormFechaNacimientoBenef(e.target.value)}>
                    <Form.Control placeholder="Fecha nacimiento" type='date' max={curdate}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formTelefono" value={formTelefonoBenef} onChange={e => setFormTelefonoBenef(e.target.value)}>
                    <Form.Control placeholder="Telefono" />
                    </Form.Group>   
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId="formParentesco" value={formParentescoBenef} onChange={e => setFormParentescoBenef(e.target.value)}>
                    <Form.Control as="select">
                    <option>Parentesco</option>
                    <option>Padre</option>
                    <option>Hermano</option>
                    <option>Madre</option>
                    <option>Hijo</option>
                    <option>Espos@</option>
                    </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formPorcentaje" value={formPorcentajeBenef} onChange={e => setFormPorcentajeBenef(e.target.value)}>
                    <Form.Control as="select">
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
                    <Form.Group as={Col} controlId="formMailBenef" value={formMailBenef} onChange={e => setFormMailBenef(e.target.value)}>
                    <Form.Control placeholder="Mail" type='email'/>
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId="btnterminar">
                    <Button variant="primary" type="button" onClick={handleSelect6}>Terminar</Button>
                    </Form.Group>
                    </Form.Row>
                    </Form>
                    </Modal.Body>
                    </Modal>

                    <Modal
                    size="lg"
                    show={showAdicional}
                    onHide={() => setShowAdicional(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title">
                    <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                    Datos del Adicional
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                    <Form.Row> 
                    <Form.Group as={Col} controlId="formNombre" value={formNombreAdi} onChange={e => setFormNombreAdi(e.target.value)}> 
                    <Form.Control placeholder="Nombre" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formApPaterno" value={formApPaternoAdi} onChange={e => setFormApMaternoAdi(e.target.value)}>
                    <Form.Control placeholder="Ap Paterno" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formApMaterno" value={formApMaternoAdi} onChange={e => setFormApPaternoAdi(e.target.value)}>
                    <Form.Control placeholder="Ap Materno" />
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId="formfechanacimiento" value={formfechanacimientoAdi} onChange={e => setFormFechaNacimientoAdi(e.target.value)}>
                    <Form.Control placeholder="Fecha nacimiento" type='date' max={curdate}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formRutAdi" value={formRutAdi} onChange={e => setFormRutAdi(e.target.value)}>
                    <Form.Control placeholder="11111111-1" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formparentesco" value={formParentescoAdi} onChange={e => setFormParentescoAdi(e.target.value)}>
                    <Form.Control as="select">
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
                    <Form.Group as={Col} controlId="formNacionalidad" value={formNacionalidadAdi} onChange={e => setFormNacionalidadAdi(e.target.value)}>
                    <Form.Control as="select">
                    <option>Nacionalidad</option>
                    <option>Chilena</option>
                    <option>Extranjero</option>
                    </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formProfesion" value={formProfesionAdi} onChange={e => setFormProfesionAdi(e.target.value)}>
                    <Form.Control placeholder="Profesión" />
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId="formResidencia" value={formResidencia} onChange={e => setFormResidencia(e.target.value)}>
                    <Form.Control placeholder="Residencia" />
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId="formTerminar">
                    <Button variant="primary" type="submit" onClick={handleSelect7}>Terminar</Button>
                    </Form.Group>
                    </Form.Row>
                    </Form>
                    </Modal.Body>
                    </Modal>
                    </InputGroup></Col> :null}
                </Row>
                <UsersView data={idinteraccion}></UsersView>
            </Container>
            <HomeContainer/>
            
            
            { /*<h1>User id is {id}</h1>
              <h2>User idcontacto is {idcontacto}</h2>*/
             /*crear backend para mostrar en la parte azul*/}


        </div>
    );
}

