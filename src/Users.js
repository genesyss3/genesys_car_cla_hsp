import React, { useState,useEffect } from "react";
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



export default function Users() {
    const [show, setShow] = useState(false)
    const [firstEntry, setFirstEntry] = useState(true)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
    const [show5, setShow5] = useState(false)
    const [showTable, setShowTable] = useState(false)
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
    const [formTipoPlan,setValue5]=useState('');
    const [formNombre,setValue6]=useState('');
    const [formApPaterno,setValue7]=useState('');
    const [formApMaterno,setValue8]=useState('');
    const [formfechanacimiento,setValue9]=useState('');
    const [formDireccion,setValue11]=useState('');
    const [formTelefono,setValue12]=useState('');
    const [formMail,setValue13]=useState('');
    const [formNombreBenef,setValue14]=useState('');
    const [formApPaternoBenef,setValue15]=useState('');
    const [formApMaternoBenef,setValue16]=useState('');
    const [formMailBenef,setValue17]=useState('');
    const [formTelefonoBenef,setValue18]=useState('');
    const [formCiudadBenef,setValue19]=useState('');
    const [formParentescoBenef,setValue20]=useState('');
    const [formPorcentajeBenef,setValue21]=useState('');
    const [formFechaNacimientoBenef,setValue22]=useState('');
    const [formNombreAdi,setValue23]=useState('');
    const [formApMaternoAdi,setValue24]=useState('');
    const [formApPaternoAdi,setValue25]=useState('');
    const [formRutAdi,setValue26]=useState('');
    const [formProfesionAdi,setValue27]=useState('');
    const [formParentescoAdi,setValue28]=useState('');
    const [formNacionalidadAdi,setValue29]=useState('');
    const [formfechanacimientoAdi,setValue30]=useState('');
    const [value6,setValue31]=useState('');
    const [formRut,setValue32]=useState('');
    const [formObservacion,setValue33]=useState('');
    const [formRegionBenef,setValue34]=useState('');
    const [formComunaBenef,setValue35]=useState('');
    const [formDireccionBenef,setValue36]=useState('');
    const [formRutBenef,setValue37]=useState('');
    const [formResidencia,setValue38]=useState('');
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
    const [idInteraccionPaso,setidInteraccionPaso]=useState('');
    const [arregloData,setArregloData]=useState('');

    let state = {
        persons: [],
        data:
            {
                idinteraccion: null,
                actualizar: false
           }
        
      }
    
     useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
        
        setidInteraccionPaso(idinteraccion)
        if(idInteraccionPaso && firstEntry){
            console.log('entra useEffect '+idInteraccionPaso);
            state.data.idinteraccion=idinteraccion;
            console.log('previo idinteraccion: '+state.data.idinteraccion)
            setArregloData(state.data)
            setShowTable(true);
            
            setFirstEntry(false);
        }
        
      });

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
    const handleSelect5= async(e) =>{
        setShow5(true)
        setValue5(e)
        setValue6(e)
        setValue7(e)
        setValue8(e)
        setValue9(e)
        setValue11(e)
        setValue12(e)
        setValue13(e)
        setValue32(e)
        setValue33(e)
        e.preventDefault();
                // inicio post
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
                            Observacion: formObservacion
                        })
                };
                await fetch('https://b316wmuwh1.execute-api.us-east-1.amazonaws.com/default/res_json_formulario', requestOptions)
                    .then(response => response.json())
                    .then(response => {console.log(response)});
                e.preventDefault();
        setShowTitular(false)
        setShowTable(false);
        state.data.actualizar = true;
        state.data.idinteraccion=idinteraccion;
        setArregloData(state.data);
        setShowTable(true);

    }
    const handleSelect6=(e)=>{
        console.log(e);
        setValue14(e)
        setValue15(e)
        setValue16(e)
        setValue17(e)
        setValue18(e)
        setValue19(e)
        setValue20(e)
        setValue21(e)
        setValue22(e)
        setValue34(e)
        setValue35(e)
        setValue36(e)
        setValue37(e)
        
        e.preventDefault();
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
                })
        };
        fetch('https://b316wmuwh1.execute-api.us-east-1.amazonaws.com/default/res_json_Beneficiario', requestOptions)
            .then(response => response.json())
            .then(response => {console.log(response)});
        e.preventDefault();
        setShowBenef(false)
        
    }
    const handleSelect7=(e)=>{
        console.log(e);
        setValue23(e)
        setValue24(e)
        setValue25(e)
        setValue26(e)
        setValue27(e)
        setValue28(e)
        setValue29(e)
        setValue30(e)
        setValue38(e)
        e.preventDefault();
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
                    Nombre: formNombreAdi,
                    ApPaterno: formApPaternoAdi,
                    ApMaterno: formApMaternoAdi,
                    fechanacimiento: formfechanacimientoAdi,
                    rut: formRutAdi,
                    profesion: formProfesionAdi,
                    parentesco: formParentescoAdi,
                    nacionalidad: formNacionalidadAdi,
                    residencia: formResidencia
                })
        };
        fetch('https://b316wmuwh1.execute-api.us-east-1.amazonaws.com/default/res_json_Adicionales', requestOptions)
            .then(response => response.json())
            .then(response => {console.log(response)});
        e.preventDefault();
        setShowAdicional(false)
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
        }
        document.getElementById('input-group-dropdown-1').disabled = true;
        document.getElementById('input-group-dropdown-2').disabled = true;
        document.getElementById('input-group-dropdown-3').disabled = true;
        document.getElementById('input-group-dropdown-4').disabled = true;
    }
    
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
                    <Button variant="primary" type="button" onClick={guardaTipicficaciones}>Guardar Tipificacion</Button>
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
                            <Form.Group as={Col} controlId="formTipoPlan" value={formTipoPlan} onChange={e => setValue5(e.target.value)} name='formTipoPlan' >
                                <Form.Control as="select">
                                <option>Tipo Plan</option>
                                <option>Plan 01</option>
                                <option>Plan 02</option>
                                </Form.Control>
                            </Form.Group>  
                            <Form.Group as={Col} controlId="formNombre" name='formNombre'  value={formNombre} onChange={e => setValue6(e.target.value)}>
                                <Form.Control placeholder="Nombre" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formApPaterno" name='formApPaterno' value={formApPaterno} onChange={e => setValue7(e.target.value)}>
                                <Form.Control placeholder="Ap Paterno" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formApMaterno" name='formApMaterno' value={formApMaterno} onChange={e => setValue8(e.target.value)}>
                                <Form.Control placeholder="Ap Materno" />
                            </Form.Group>
                            </Form.Row>
                            <Form.Row>
                            <Form.Group as={Col} controlId="formfechanacimiento" name='formfechanacimiento' value={formfechanacimiento} onChange={e => setValue9(e.target.value)}>
                                <Form.Control placeholder="Fecha nacimiento" type='date' />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formRut" name='formRut' value={formfechanacimiento} onChange={e => setValue32(e.target.value)}>
                                <Form.Control placeholder="Rut" />
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
                            <Form.Group as={Col} controlId="formDireccion" name='formDireccion' value={formDireccion} onChange={e => setValue11(e.target.value)}>
                                <Form.Control placeholder="Direccion" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formTelefono" name='formTelefono' value={formTelefono} onChange={e => setValue12(e.target.value)}> 
                                <Form.Control placeholder="Telefono" typer="number"/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formMail" name='formMail' value={formMail} onChange={e => setValue13(e.target.value)}>
                                <Form.Control placeholder="Mail" type='email'/>
                            </Form.Group>
                            </Form.Row>
                            <Form.Row>
                            <Form.Group as={Col} controlId="formObservacion" name='formObservacion' value={formfechanacimiento} onChange={e => setValue33(e.target.value)}>
                                <Form.Control placeholder="Observaciones"/>
                            </Form.Group>
                            </Form.Row>
                            <Form.Row>
                            <Form.Group as={Col} controlId="formbutton1">
                                <Button variant="primary" type="button" onClick={handleSelect5}>Terminar</Button>
                            </Form.Group>
                            </Form.Row>
                        </Form>
                        </Modal.Body>
                        </Modal>
                    </InputGroup></Col> :null}
                    {show5? <Col id="col2" xs={3}><InputGroup className="mb-4">
                        <Form.Row>
                            <Form.Group as={Col} controlId="formbtnAdicional">
                                <Button variant="primary" size='sm' onClick={() => setShowAdicional(true)}>Agregar Adicional</Button>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formbtnBeneficiario">
                                <Button variant="primary" size='sm' onClick={() => setShowBenef(true)} >Agregar Beneficiario</Button>
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
                    <Form.Group as={Col} controlId="formNombre" value={formNombreBenef} onChange={e => setValue14(e.target.value)}>
                    <Form.Control placeholder="Nombre" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formApPaterno" value={formApPaternoBenef} onChange={e => setValue15(e.target.value)}>
                    <Form.Control placeholder="Ap Paterno" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formApMaterno" value={formApMaternoBenef} onChange={e => setValue16(e.target.value)}>
                    <Form.Control placeholder="Ap Materno" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formRut" value={formRutBenef} onChange={e => setValue16(e.target.value)}>
                    <Form.Control placeholder="Rut" />
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
                            <FormControl aria-describedby="basic-addon1" value={regionben}/>
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
                        <FormControl aria-describedby="basic-addon1" value={ciudadben}/>
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
                        <FormControl aria-describedby="basic-addon1" value={comunaben}/>
                        </InputGroup>
                        </FormGroup>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId="formDireccion" value={formDireccionBenef} onChange={e => setValue36(e.target.value)}>
                    <Form.Control placeholder="Direccion" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formfechanacimiento" value={formFechaNacimientoBenef} onChange={e => setValue22(e.target.value)}>
                    <Form.Control placeholder="Fecha nacimiento" type='date'/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formTelefono" value={formTelefonoBenef} onChange={e => setValue18(e.target.value)}>
                    <Form.Control placeholder="Telefono" />
                    </Form.Group>   
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId="formParentesco" value={formParentescoBenef} onChange={e => setValue20(e.target.value)}>
                    <Form.Control as="select">
                    <option>Parentesco</option>
                    <option>Padre</option>
                    <option>Hermano</option>
                    <option>Madre</option>
                    <option>Hijo</option>
                    <option>Espos@</option>
                    </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formPorcentaje" value={formPorcentajeBenef} onChange={e => setValue21(e.target.value)}>
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
                    <Form.Group as={Col} controlId="feormMail" value={formMailBenef} onChange={e => setValue17(e.target.value)}>
                    <Form.Control placeholder="Mail" />
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId="btnterminar">
                    <Button variant="primary" type="submit" onClick={handleSelect6}>Terminar</Button>
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
                    <Form.Group as={Col} controlId="formNombre" value={formNombreAdi} onChange={e => setValue23(e.target.value)}> 
                    <Form.Control placeholder="Nombre" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formApPaterno" value={formApPaternoAdi} onChange={e => setValue25(e.target.value)}>
                    <Form.Control placeholder="Ap Paterno" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formApMaterno" value={formApMaternoAdi} onChange={e => setValue24(e.target.value)}>
                    <Form.Control placeholder="Ap Materno" />
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId="formfechanacimiento" value={formfechanacimientoAdi} onChange={e => setValue30(e.target.value)}>
                    <Form.Control placeholder="Fecha nacimiento" type='date'/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formRut" value={formRutAdi} onChange={e => setValue26(e.target.value)}>
                    <Form.Control placeholder="Rut" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formparentesco" value={formParentescoAdi} onChange={e => setValue28(e.target.value)}>
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
                    <Form.Group as={Col} controlId="formNacionalidad" value={formNacionalidadAdi} onChange={e => setValue29(e.target.value)}>
                    <Form.Control as="select">
                    <option>Nacionalidad</option>
                    <option>Chilena</option>
                    <option>Extranjero</option>
                    </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formProfesion" value={formProfesionAdi} onChange={e => setValue27(e.target.value)}>
                    <Form.Control placeholder="Profesión" />
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId="formResidencia" value={formResidencia} onChange={e => setValue38(e.target.value)}>
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
                {showTable? <UsersView data={arregloData}></UsersView> :null}
            </Container>
            <HomeContainer/>
            
            
            { /*<h1>User id is {id}</h1>
              <h2>User idcontacto is {idcontacto}</h2>*/
             /*crear backend para mostrar en la parte azul*/}


        </div>
    );
}

