import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormControl, InputGroup, Table, Row, Col, Container } from "react-bootstrap";

const { idcontacto } = useParams();

const UsersList = () =>{
  const [data, setData] = useState([])
  const url = 'https://b316wmuwh1.execute-api.us-east-1.amazonaws.com/default/post_data_client'
  const authorizationToken = '&S396b<eg5Zn(HiLe)BBNtc&'
  const body = {"id_contacto":idcontacto};

  useEffect(() => {
    const fetchData = async () => {
      await fetch(url,{
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          "authorizationToken": authorizationToken
        }
      })
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
      .then(response => console.log('Success:', response));
    }
    fetchData()
  }, [])

  return(
    <>
      {data.map((userinfo) => (
        <Container>
        <Row className="justify-content-md-center">
            <Col xs lg="3">
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">Nombre</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
            name = "nombre"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            value = {userinfo.con_metadata.nombre}
            />
        </InputGroup>
    </Col>
    <Col xs lg="3">
    <InputGroup className="mb-3">
        <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-default">Ap Paterno</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
    name = "apPaterno"
    aria-label="Default"
    aria-describedby="inputGroup-sizing-default"
    value = {userinfo.con_metadata.ap_paterno}
    />
    </InputGroup>
    </Col>
    <Col xs lg="3">
    <InputGroup className="mb-3">
        <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-default">Ap Materno</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
    name = "apMaterno"
    aria-label="Default"
    aria-describedby="inputGroup-sizing-default"
    value = {userinfo.con_metadata.ap_materno}
    />
    </InputGroup>
    </Col>
    </Row>
    <Row>
    <Col xs lg="2">
    <InputGroup className="mb-3">
        <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-default">Rut</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
    name="rut"
    aria-label="Default"
    aria-describedby="inputGroup-sizing-default"
    value = {userinfo.con_metadata.rut}
    />
    </InputGroup>
    </Col>
    <Col xs lg="2">
    <InputGroup className="mb-3">
        <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-default">DV</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
    name="dv"
    aria-label="Default"
    aria-describedby="inputGroup-sizing-default"
    value = {userinfo.con_metadata.dv}
    />
    </InputGroup>
    </Col>
    <Col xs lg="6">
    <InputGroup className="mb-3">
        <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-default">Fecha Nacimiento</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
    name="fecha_nacimiento"
    aria-label="Default"
    aria-describedby="inputGroup-sizing-default"
    value = {userinfo.con_metadata.fecha_nacimiento}
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
        name="direccion"
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        value = {userinfo.con_metadata.direccion}
        />
    </InputGroup>
    </Col>
    <Col xs lg="3">
    <InputGroup className="mb-3">
        <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-default">Sexo</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
    name="sexo"
    aria-label="Default"
    aria-describedby="inputGroup-sizing-default"
    value = {userinfo.con_metadata.sexo}
    />
    </InputGroup>
    </Col>
    <Col xs lg="2">
    <InputGroup className="mb-3">
        <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-default">Edad</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
    name="edad"
    aria-label="Default"
    aria-describedby="inputGroup-sizing-default"
    value = {userinfo.con_metadata.edad}
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
        name="mail"
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        value = {userinfo.con_metadata.mail}
        />
    </InputGroup>
    </Col>
    <Col xs lg="3">
    <InputGroup className="mb-3">
        <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-default">Comuna</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
    name="comuna"
    aria-label="Default"
    aria-describedby="inputGroup-sizing-default"
    value = {userinfo.con_metadata.comuna}
    />
    </InputGroup>
    </Col>
    <Col xs lg="4">
    <InputGroup className="mb-3">
        <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-default">Ciudad</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
    name="ciudad"
    aria-label="Default"
    aria-describedby="inputGroup-sizing-default"
    value = {userinfo.con_metadata.ciudad}
    />
    </InputGroup>
    </Col>
    </Row>
    <Row>
    <Col xs lg="4">
    <InputGroup className="mb-3">
        <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-default">Telefono1</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
    name="telefono1"
    aria-label="Default"
    aria-describedby="inputGroup-sizing-default"
    value = {userinfo.con_metadata.telefono1}
    />
    </InputGroup>
    </Col>
    <Col xs lg="4">
    <InputGroup className="mb-3">
        <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-default">Telefono2</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
    name="telefono2"
    aria-label="Default"
    aria-describedby="inputGroup-sizing-default"
    value = {userinfo.con_metadata.telefono2}
    />
    </InputGroup>
    </Col>
    <Col xs lg="4">
    <InputGroup className="mb-3">
        <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-default">Telefono3</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
    name="telefono3"
    aria-label="Default"
    aria-describedby="inputGroup-sizing-default"
    value = {userinfo.con_metadata.telefono3}
    />
    </InputGroup>
    </Col>
    </Row>
    <br></br>
    <br></br>
    
    </Container>
      ))}
    </>
  );
}

export default UsersList;
