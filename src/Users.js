import React, { useState, useEffect } from "react";
import './App.css'
import { useParams } from "react-router-dom";
import { Button, Form, Modal, FormControl, InputGroup, Table, Row, Col, Container, DropdownButton, Dropdown, FormGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeContainer from './containers/HomeContainer'
import Contacto from './component/contacto';
import Nivel1 from './component/nivel1';
import Nivel2 from './component/nivel2';
import Nivel3 from './component/nivel3';
import UsersView from './component/viewUsers';
import { set } from "react-hook-form";
import { data } from "jquery";
import nivel1 from "./component/nivel1";
import nivel2 from "./component/nivel2";
import nivel3 from "./component/nivel3";
import clRut from '@validatecl/rut';
import ModalTitular from "./component/modalTitular";
import ModalBeneficiario from "./component/ModalBeneficiario";
import ModalAdicional from "./component/modalAdicional";



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
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const [contacto_value, setContacto_value] = useState('');
    const [ni1_value, setNi1_value] = useState('');
    const [ni2_value, setNi2_value] = useState('');
    const [ni3_value, setNi3_value] = useState('');
    const calculated = clRut.calculate();
    const verififer = clRut.verifier();
    const formatted = clRut.format();
    const digits = clRut.digits();
    const clean = clRut.clean();
    const [idInteraccionPaso, setidInteraccionPaso] = useState('');
    const [arregloData, setArregloData] = useState('');

    let state = {
        persons: [],
        data:
        {
            idinteraccion: null,
            actualizar: false,
            actualizarBeneficiario: false,
            actualizarAdicional: false
        },
        dataContacto:{
            idContacto:null
        }


    }

    useEffect(() => {
        // Actualiza el título del documento usando la API del navegador

        setidInteraccionPaso(idinteraccion)
        if (idInteraccionPaso && firstEntry) {
            console.log('entra useEffect ' + idInteraccionPaso);
            state.data.idinteraccion = idinteraccion;
            console.log('previo idinteraccion: ' + state.data.idinteraccion)
            setArregloData(state.data)
            setShowTable(true);

            setFirstEntry(false);
        }

    });
    const resetearTodo =() =>{
        setShow(false);
        setValue('')
        setContacto_value('')
        console.log('seteo show')
        setNi1_value('');
        setValue2('')
        setShow2(false);
        setNi2_value('');
        setValue3('')
        setShow3(false);
        setNi3_value('');
        setShow4(false);
        setValue4('')
        console.log('seteo show4')
    }
    const handleSelect = (e) => {
        if(contacto_value!=''){
            resetearTodo(); 
        }else{
            
        console.log(e);
        setShow(true);
        console.log('CONTACTO: '+e);
        setValue(e.split('-')[1])
        setContacto_value(e.split('-')[0])
        }
    }
    const handleSelect2 = (e) => {
        if(ni1_value!=''){
            resetearTodo();
        }else{
            
        console.log(e);
        setShow2(true);
        setValue2(e.split('-')[1])
        setNi1_value(e.split('-')[0])
        }
    }
    const handleSelect3 = (e) => {
        if(ni2_value!= ''){
            resetearTodo()
        }else{
            
        console.log(e);
        setShow3(true);
        setValue3(e.split('-')[1])
        setNi2_value(e.split('-')[0])
        }
    }
    const handleSelect4 = (e) => {
        if(ni3_value != ''){
            resetearTodo();
        }else{
            
        console.log(e);
        setShow4(true);
        setValue4(e.split('-')[1])
        setNi3_value(e.split('-')[0]);
        }
    }

/*
    const vaciarLocalidad =() =>{
        setidRegion('');
        setidciudad('');
        setidcomuna('');
        setregion('');
        setciudad('');
        setcomuna('');
        setregionben('');
        setciudadben('');
        setcomunaben('');
    }
*/
    const guardaTipicficaciones = (e) => {

        console.log(value4)
        if (value4 == 'ARGUMENTADO SI') {
            setShowTitular(true);
            setShow5(true);
        }
        else {
            setShowTitular(false)
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
            .then(response => { console.log(response) });
    }

    return (
        <div >
            <br></br>
            <Container >
                <Row className="text-left">
                    <Col xs={3}><InputGroup className="mb-4">
                        <DropdownButton
                            as={InputGroup.Prepend}
                            variant="outline-secondary"
                            title="Contacto"
                            id="input-group-dropdown-1"
                            onSelect={handleSelect}>
                            <Contacto />
                        </DropdownButton>
                        <FormControl aria-describedby="basic-addon1" value={value} />
                    </InputGroup>
                    </Col>
                    {show ? <Col id="col2" xs={3}><InputGroup className="mb-4">
                        <DropdownButton
                            as={InputGroup.Prepend}
                            variant="outline-secondary"
                            title="Nivel 1"
                            id="input-group-dropdown-2"
                            onSelect={handleSelect2}>
                            <Nivel1 data={contacto_value} />
                        </DropdownButton>
                        <FormControl aria-describedby="basic-addon1" value={value2} />
                    </InputGroup></Col> : null}
                    {show2 ? <Col id="col2" xs={3}><InputGroup className="mb-4">
                        <DropdownButton
                            as={InputGroup.Prepend}
                            variant="outline-secondary"
                            title="Nivel 2"
                            id="input-group-dropdown-3"
                            onSelect={handleSelect3}>
                            <Nivel2 data={ni1_value} />
                        </DropdownButton>
                        <FormControl aria-describedby="basic-addon1" value={value3} />
                    </InputGroup></Col> : null}
                    {show3 ? <Col id="col2" xs={3}><InputGroup className="mb-4">
                        <DropdownButton
                            as={InputGroup.Prepend}
                            variant="outline-secondary"
                            title="Nivel 3"
                            id="input-group-dropdown-4"
                            onSelect={handleSelect4}>
                            <Nivel3 data={ni2_value} />
                        </DropdownButton>
                        <FormControl aria-describedby="basic-addon1" value={value4} />
                    </InputGroup></Col> : null}
                    <Col id="col2" xs={3}><InputGroup className="mb-4">
                        <Button variant="primary" type="button" id='guardar-tipificaciones' size='sm' onClick={guardaTipicficaciones} >Guardar Tipificacion</Button>
                    </InputGroup>
                    </Col>
                    {show4 ? <Col id="col2" xs={3}><InputGroup className="mb-4">
                    <Modal size="lg" dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title" show={showTitular}
                    onHide={() => setShowTitular(false)}>
                        <ModalTitular></ModalTitular>    
                    </Modal>
                    </InputGroup></Col> : null}
                    {show5 ? <Col id="col2" xs={3}><InputGroup className="mb-4">
                        <Container>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formbtnAdicional">
                                        <Button variant="primary" size='sm' type="button" onClick={() => setShowAdicional(true)}>Agregar Adicional</Button>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formbtnBeneficiario">
                                        <Button variant="primary" size='sm' type="button" onClick={() => setShowBenef(true)} >Agregar Beneficiario</Button>
                                    </Form.Group>
                                </Form.Row>
                            </Container>
                        <Modal size="lg" show={showBenef} onHide={() => setShowBenef(false)} dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title">
                            <ModalBeneficiario></ModalBeneficiario>
                        </Modal>

                        <Modal size="lg" show={showAdicional} onHide={() => setShowAdicional(false)} dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title">
                            <ModalAdicional></ModalAdicional>
                        </Modal>
                    </InputGroup></Col> : null}
                </Row>
                {/*showTable ? <UsersView data={arregloData}></UsersView> : null*/}
            </Container>
            <HomeContainer />


            { /*<h1>User id is {id}</h1>
              <h2>User idcontacto is {idcontacto}</h2>*/
             /*crear backend para mostrar en la parte azul*/}


        </div>
    );
}

