import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,FormControl, InputGroup, Table, Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";


const UsersList = () =>{
  const { idinteraccion } = useParams();
  const [data, setData] = useState([])
  const url = 'https://b316wmuwh1.execute-api.us-east-1.amazonaws.com/default/post_data_client'
  const authorizationToken = '&S396b<eg5Zn(HiLe)BBNtc&'
  const body = {"id_contacto":idinteraccion};

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
      <Form>
        <Form.Row>
            <Form.Group as={Col} controlId="nombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control disabled value={userinfo.con_metadata.nombre}/>
            </Form.Group>
            <Form.Group as={Col} controlId="ap_paterno">
            <Form.Label>Ap Paterno</Form.Label>
            <Form.Control disabled  value={userinfo.con_metadata.ap_paterno} />
            </Form.Group>
            <Form.Group as={Col} controlId="ap_materno">
            <Form.Label>Ap Materno</Form.Label>
            <Form.Control disabled  value={userinfo.con_metadata.ap_materno} />
            </Form.Group>
        </Form.Row>
        
        <Form.Row>
            <Form.Group as={Col} controlId="rut">
            <Form.Label>Rut</Form.Label>
            <Form.Control disabled value={userinfo.con_metadata.rut}/>
            </Form.Group>
            <Form.Group as={Col} controlId="dv">
            <Form.Label>DV</Form.Label>
            <Form.Control disabled  value={userinfo.con_metadata.dv} />
            </Form.Group>
            <Form.Group as={Col} controlId="fecha_nacimiento">
            <Form.Label>Fecha Nacimiento</Form.Label>
            <Form.Control disabled  value={userinfo.con_metadata.fecha_nacimiento} />
            </Form.Group>
        </Form.Row>

        <Form.Row>
            <Form.Group as={Col} controlId="direccion">
            <Form.Label>Direccion</Form.Label>
            <Form.Control disabled value={userinfo.con_metadata.direccion}/>
            </Form.Group>
            <Form.Group as={Col} controlId="sexo">
            <Form.Label>Sexo</Form.Label>
            <Form.Control disabled  value={userinfo.con_metadata.sexo} />
            </Form.Group>
            <Form.Group as={Col} controlId="edad">
            <Form.Label>Edad</Form.Label>
            <Form.Control disabled  value={userinfo.con_metadata.edad} />
            </Form.Group>
        </Form.Row>
        
        <Form.Row>
            <Form.Group as={Col} controlId="Mail">
            <Form.Label>Mail</Form.Label>
            <Form.Control disabled value={userinfo.con_metadata.mail}/>
            </Form.Group>
            <Form.Group as={Col} controlId="comuna">
            <Form.Label>Comuna</Form.Label>
            <Form.Control disabled  value={userinfo.con_metadata.comuna} />
            </Form.Group>
            <Form.Group as={Col} controlId="ciudad">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control disabled  value={userinfo.con_metadata.ciudad} />
            </Form.Group>
        </Form.Row>
        
        <Form.Row>
            <Form.Group as={Col} controlId="telefono1">
            <Form.Label>Telefono 1</Form.Label>
            <Form.Control disabled value={userinfo.con_metadata.telefono1}/>
            </Form.Group>
            <Form.Group as={Col} controlId="telefono2">
            <Form.Label>Telefono 2</Form.Label>
            <Form.Control disabled  value={userinfo.con_metadata.telefono2} />
            </Form.Group>
            <Form.Group as={Col} controlId="telefono3">
            <Form.Label>Telefono 3</Form.Label>
            <Form.Control disabled  value={userinfo.con_metadata.telefono3} />
            </Form.Group>
        </Form.Row>
      </Form>
      </Container>))}
    </>
  );
}

export default UsersList;