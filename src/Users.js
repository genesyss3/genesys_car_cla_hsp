import React, { useState } from "react";
import './App.css'
import { useParams } from "react-router-dom";
import { Button, FormControl, InputGroup, Table, Row, Col, Container, DropdownButton, Dropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeContainer from './containers/HomeContainer'


export default function Users() {
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const { id } = useParams();
    const { idcontacto } = useParams();
    const [value,setValue]=useState('');
    const [value2,setValue2]=useState('');
    const [value3,setValue3]=useState('');
    const [value4,setValue4]=useState('');
    const state = {
        persons: []
      }
    const handleSelect=(e)=>{
        console.log(e);
        setShow(true);
        setValue(e)
    }
    const handleSelect2=(e)=>{
        console.log(e);
        setShow2(true);
        setValue2(e)
    }
    const handleSelect3=(e)=>{
        console.log(e);
        setShow3(true);
        setValue3(e)
    }
    const handleSelect4=(e)=>{
        console.log(e);
        setValue4(e)
    }


    return (
        <div >
            <br></br>
            <div >
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="3">
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">Nombre</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                    </Col>
                    <Col xs lg="3">
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">Ap Paterno</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                    </Col>
                    <Col xs lg="2">
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">Rut</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                    </Col>
                    <Col xs lg="2">
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">DV</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                    </Col>

                </Row>
                <Row className="justify-content-md-center">
                    <Col xs lg="6">
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">Direccion</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                    </Col>
                    <Col xs lg="3">
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">Sexo</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                    </Col>
                    <Col xs lg="2">
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">Edad</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs lg="4">
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">Mail</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                    </Col>
                    <Col xs lg="3">
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">Comuna</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                    </Col>
                    <Col xs lg="2">
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">Ciudad</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <br></br>
                <br></br>

            </Container>
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
                            <Dropdown.Item eventKey="CONTACTADO">CONTACTADO</Dropdown.Item>
                            <Dropdown.Item eventKey="NO CONTACTADO">NO CONTACTADO</Dropdown.Item>
                        </DropdownButton>
                        <FormControl aria-describedby="basic-addon1" value={value}/>
                    </InputGroup>
                    </Col>
                    {show ? <Col id="col2" xs={3}><InputGroup className="mb-4">
                        <DropdownButton
                            as={InputGroup.Prepend}
                            variant="outline-secondary"
                            title="Nivel 1"
                            id="input-group-dropdown-1"
                            onSelect={handleSelect2}>
                            <Dropdown.Item eventKey="efectivo">efectivo</Dropdown.Item>
                            <Dropdown.Item eventKey="no efectivo">no efectivo</Dropdown.Item>
                        </DropdownButton>
                        <FormControl aria-describedby="basic-addon1" value={value2}/>
                    </InputGroup></Col> : null}
                    {show2? <Col id="col2" xs={3}><InputGroup className="mb-4">
                        <DropdownButton
                            as={InputGroup.Prepend}
                            variant="outline-secondary"
                            title="Nivel 2"
                            id="input-group-dropdown-1"
                            onSelect={handleSelect3}>
                            <Dropdown.Item eventKey="ARGUMENTADO NO">ARGUMENTADO NO</Dropdown.Item>
                            <Dropdown.Item eventKey="RECHAZO CATEGORICO">RECHAZO CATEGORICO</Dropdown.Item>
                            <Dropdown.Item eventKey="ARGUMENTADO SI">ARGUMENTADO SI</Dropdown.Item>
                            <Dropdown.Item eventKey="EXCLUSION">EXCLUSION</Dropdown.Item>
                            <Dropdown.Item eventKey="NO CONTACTADO">NO CONTACTADO</Dropdown.Item>
                            <Dropdown.Item eventKey="PERSONAL CALLBACK">PERSONAL CALLBACK</Dropdown.Item>
                            <Dropdown.Item eventKey="NUMERO INVALIDO">NUMERO INVALIDO</Dropdown.Item>
                            <Dropdown.Item eventKey="DESACTUALIZADOS">DESACTUALIZADOS</Dropdown.Item>
                        </DropdownButton>
                        <FormControl aria-describedby="basic-addon1" value={value3}/>
                    </InputGroup></Col> :null}
                    {show3? <Col id="col2" xs={3}><InputGroup className="mb-4">
                        <DropdownButton
                            as={InputGroup.Prepend}
                            variant="outline-secondary"
                            title="Nivel 3"
                            id="input-group-dropdown-1"
                            onSelect ={handleSelect4}>
                            <Dropdown.Item eventKey="BUSCO OTRO TIPO DE SEGURO">BUSCO OTRO TIPO DE SEGURO</Dropdown.Item>
                            <Dropdown.Item eventKey="DESEMPLEADO">DESEMPLEADO</Dropdown.Item>
                            <Dropdown.Item eventKey="NO ME GUSTA CORREDORA/SOCIO">NO ME GUSTA CORREDORA/SOCIO</Dropdown.Item>
                            <Dropdown.Item eventKey="NO ME GUSTA VENTA TELEFONICA">NO ME GUSTA VENTA TELEFONICA</Dropdown.Item>
                            <Dropdown.Item eventKey="TITULAR SOLICITA VOLVER A LLAMAR">TITULAR SOLICITA VOLVER A LLAMAR</Dropdown.Item>
                            <Dropdown.Item eventKey="LLAMADA CORTADA">LLAMADA CORTADA</Dropdown.Item>
                            <Dropdown.Item eventKey="NO LE INTERESA">NO LE INTERESA</Dropdown.Item>
                            <Dropdown.Item eventKey="PRODUCTO YA CONTRATADO">PRODUCTO YA CONTRATADO</Dropdown.Item>
                            <Dropdown.Item eventKey="NO TENGO DINERO PARA SEGUROS">NO TENGO DINERO PARA SEGUROS</Dropdown.Item>
                            <Dropdown.Item eventKey="PREFIERO MI BANCO/TIENDA">PREFIERO MI BANCO/TIENDA</Dropdown.Item>
                            <Dropdown.Item eventKey="NO ME GUSTA CORREDORA/SOCIO">NO ME GUSTA CORREDORA/SOCIO</Dropdown.Item>
                            <Dropdown.Item eventKey="NO ME GUSTA VENTA TELEFONICA">NO ME GUSTA VENTA TELEFONICA</Dropdown.Item>
                            <Dropdown.Item eventKey="TITULAR SOLICITA VOLVER A LLAMAR">TITULAR SOLICITA VOLVER A LLAMAR</Dropdown.Item>
                            <Dropdown.Item eventKey="LLAMADA CORTADA">LLAMADA CORTADA</Dropdown.Item>
                            <Dropdown.Item eventKey="NO LE INTERESA">NO LE INTERESA</Dropdown.Item>
                            <Dropdown.Item eventKey="PRODUCTO YA CONTRATADO">PRODUCTO YA CONTRATADO</Dropdown.Item>
                        </DropdownButton>
                        <FormControl aria-describedby="basic-addon1" value={value4}/>
                    </InputGroup></Col> :null}
                </Row>
            </Container>
            <HomeContainer/>
            <Table responsive >
                <tr>
                    <td><h2>Datos Titular</h2></td>
                    <td></td>
                    <td></td>
                    <td><h2>
                        Datos Beneficiario
                    </h2></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td><h4>
                        Rut
                    </h4></td>
                    <td><h4>
                        Nombre
                    </h4></td>
                    <td></td>
                    <td><h4>
                        Rut
                    </h4></td>
                    <td><h4>
                        Nombre
                    </h4></td>
                    <td></td>
                </tr>
                <tr>
                    <td><InputGroup size="sm" className="mb-3">
                        <FormControl disabled aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup></td>
                    <td><InputGroup size="sm" className="mb-3">
                        <FormControl disabled aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup></td>
                    <td><Button variant="primary" size="sm">
                        ver
                    </Button></td>
                    <td><InputGroup size="sm" className="mb-3">
                        <FormControl disabled aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup></td>
                    <td><InputGroup size="sm" className="mb-3">
                        <FormControl disabled aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup></td>
                    <td><Button variant="primary" size="sm">
                        ver
                    </Button></td>
                </tr>
            </Table>
            {/* <h1>User id is {id}</h1>
      <h1>User  idcontacto is {idcontacto}</h1> */}

        </div>
    );
}