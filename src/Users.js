import React, { useState } from "react";
import './App.css'
import { useParams } from "react-router-dom";
import { Button, FormControl, InputGroup, Table, Row, Col, Container, DropdownButton, Dropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Users() {
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const { id } = useParams();
    const { idcontacto } = useParams();

    return (
        <div >
            <br></br>
            <Container >
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
            <Container >
                <Row className="text-left">
                    <Col xs={3}><InputGroup className="mb-4">
                        <DropdownButton
                            as={InputGroup.Prepend}
                            variant="outline-secondary"
                            title="Dropdown"
                            id="input-group-dropdown-1"
                            onSelect={()=>setShow(true)}>
                            <Dropdown.Item eventKey="option-1">Action</Dropdown.Item>
                            <Dropdown.Item eventKey="option-2">Another action</Dropdown.Item>
                            <Dropdown.Item eventKey="option-3">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="option-4">Separated link</Dropdown.Item>
                        </DropdownButton>
                        <FormControl aria-describedby="basic-addon1" />
                    </InputGroup>
                    </Col>
                    {show ? <Col id="col2" xs={3}><InputGroup className="mb-4">
                        <DropdownButton
                            as={InputGroup.Prepend}
                            variant="outline-secondary"
                            title="Dropdown"
                            id="input-group-dropdown-1"
                            onSelect={()=>setShow2(true)}>
                            <Dropdown.Item eventKey="option-1">Action</Dropdown.Item>
                            <Dropdown.Item eventKey="option-2">Another action</Dropdown.Item>
                            <Dropdown.Item eventKey="option-3">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="option-4">Separated link</Dropdown.Item>
                        </DropdownButton>
                        <FormControl aria-describedby="basic-addon1" />
                    </InputGroup></Col> : null}
                    {show2? <Col id="col2" xs={3}><InputGroup className="mb-4">
                        <DropdownButton
                            as={InputGroup.Prepend}
                            variant="outline-secondary"
                            title="Dropdown"
                            id="input-group-dropdown-1"
                            onSelect={()=>setShow3(true)}>
                            <Dropdown.Item eventKey="option-1">Action</Dropdown.Item>
                            <Dropdown.Item eventKey="option-2">Another action</Dropdown.Item>
                            <Dropdown.Item eventKey="option-3">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="option-4">Separated link</Dropdown.Item>
                        </DropdownButton>
                        <FormControl aria-describedby="basic-addon1" />
                    </InputGroup></Col> :null}
                    {show3? <Col id="col2" xs={3}><InputGroup className="mb-4">
                        <DropdownButton
                            as={InputGroup.Prepend}
                            variant="outline-secondary"
                            title="Dropdown"
                            id="input-group-dropdown-1">
                            <Dropdown.Item eventKey="option-1">Action</Dropdown.Item>
                            <Dropdown.Item eventKey="option-2">Another action</Dropdown.Item>
                            <Dropdown.Item eventKey="option-3">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="option-4">Separated link</Dropdown.Item>
                        </DropdownButton>
                        <FormControl aria-describedby="basic-addon1" />
                    </InputGroup></Col> :null}
                </Row>
            </Container>
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