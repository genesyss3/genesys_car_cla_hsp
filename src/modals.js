import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormControl, InputGroup, Table, Row, Col, Container, DropdownButton, Dropdown, Modal, SplitButton, ButtonGroup} from "react-bootstrap";
import { render } from '@testing-library/react';


const DatosTitular = () =>{
  function FormTitular() {
    const [showTitular, setShowTitular] = useState(false);
    const [showAdicional, setShowAdicional] = useState(false);
    const [showBenef, setShowBenef] = useState(false);
  
    return (
      <>
        <Modal
          size="lg"
          show={showTitular}
          onHide={() => setShowTitular(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title">
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Datos Titular
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formTipoPlan">
                <Form.Control as="select">
                  <option>Tipo Plan</option>
                  <option>Plan 01</option>
                  <option>Plan 02</option>
                </Form.Control>
              </Form.Group>  
              <Form.Group as={Col} controlId="formNombre">
                <Form.Control placeholder="Nombre" />
              </Form.Group>
              <Form.Group as={Col} controlId="formApPaterno">
                <Form.Control placeholder="Ap Paterno" />
              </Form.Group>
              <Form.Group as={Col} controlId="formApMaterno">
                <Form.Control placeholder="Ap Materno" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formfechanacimiento">
                <Form.Control placeholder="Fecha nacimiento" />
              </Form.Group>
              <Form.Group as={Col} controlId="formRegion">
                <Form.Control as="select">
                  <option>Regi??n</option>
                  <option>Regi??n de Arica y Parinacota</option>
                  <option>Regi??n de Tarapac??</option>
                  <option>Regi??n de Antofagasta</option>
                  <option>Regi??n de Atacama</option>
                  <option>Regi??n de Coquimbo</option>
                  <option>Regi??n de Valpara??so</option>
                  <option>Regi??n Metropolitana de Santiago</option>
                  <option>Regi??n del Libertador General Bernardo O???Higgins</option>
                  <option>Regi??n del Maule</option>
                  <option>Regi??n del ??uble</option>
                  <option>Regi??n del Biob??o</option>
                  <option>Regi??n de La Araucan??a</option>
                  <option>Regi??n de Los R??os</option>
                  <option>Regi??n de Los Lagos</option>
                  <option>Regi??n de Ays??n del General Carlos Ib????ez del Campo</option>
                  <option>Regi??n de Magallanes y la Ant??rtica Chilena</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="formDireccion">
                <Form.Control placeholder="Direccion" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formTelefono">
                <Form.Control placeholder="Telefono" />
              </Form.Group>
              <Form.Group as={Col} controlId="formMail">
                <Form.Control placeholder="Mail" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formbtnAdicional">
                <Button variant="primary" onClick={() => setShowAdicional(true)}>Agregar Adicional</Button>
              </Form.Group>
              <Form.Group as={Col} controlId="formbtnBeneficiario">
                <Button variant="primary" onClick={() => setShowBenef(true)}>Agregar Beneficiario</Button>
              </Form.Group>
              <Form.Group as={Col} controlId="formfechanacimiento">
                <Button variant="primary" type="submit">Terminar</Button>
              </Form.Group>
            </Form.Row>
          </Form>
          </Modal.Body>
        </Modal>
        
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
              <Form.Group as={Col} controlId="formNombre">
                <Form.Control placeholder="Nombre" />
              </Form.Group>
              <Form.Group as={Col} controlId="formApPaterno">
                <Form.Control placeholder="Ap Paterno" />
              </Form.Group>
              <Form.Group as={Col} controlId="formApMaterno">
                <Form.Control placeholder="Ap Materno" />
              </Form.Group>
            </Form.Row>
            <Form.Row>            
              <Form.Group as={Col} controlId="formCiudad">
                <Form.Control placeholder="Ciudad" />
              </Form.Group>
              <Form.Group as={Col} controlId="formfechanacimiento">
                <Form.Control placeholder="Fecha nacimiento" />
              </Form.Group>
              <Form.Group as={Col} controlId="formTelefono">
                <Form.Control placeholder="Telefono" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formParentesco">
                <Form.Control as="select">
                  <option>Parentesco</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="formPorcentaje">
                <Form.Control as="select">
                  <option>Porecentaje</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formMail">
                <Form.Control placeholder="Mail" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formfechanacimiento">
                <Button variant="primary" type="submit">Terminar</Button>
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
              <Form.Group as={Col} controlId="formNombre">
                <Form.Control placeholder="Nombre" />
              </Form.Group>
              <Form.Group as={Col} controlId="formApPaterno">
                <Form.Control placeholder="Ap Paterno" />
              </Form.Group>
              <Form.Group as={Col} controlId="formApMaterno">
                <Form.Control placeholder="Ap Materno" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formfechanacimiento">
                <Form.Control placeholder="Fecha nacimiento" />
              </Form.Group>
              <Form.Group as={Col} controlId="formRut">
                <Form.Control placeholder="Rut" />
              </Form.Group>
              <Form.Group as={Col} controlId="formparentesco">
                <Form.Control as="select">
                  <option>Parentesco</option>
                  <option>pareja</option>
                  <option>hermano</option>
                  <option>madre</option>
                  <option>otro</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formNacionalidad">
                <Form.Control as="select">
                  <option>Nacionalidad</option>
                  <option>Chilena</option>
                  <option>Colmbiana</option>
                  <option>Venezolana</option>
                  <option>otro</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="formProfesion">
                <Form.Control placeholder="Profesi??n" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formTerminar">
                <Button variant="primary" type="submit">Terminar</Button>
              </Form.Group>
            </Form.Row>
          </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
  render(<FormTitular />);
}


export default DatosTitular

