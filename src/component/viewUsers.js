import React, { useState, useEffect, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table,Tab,Tabs } from "react-bootstrap";
import axios from 'axios';

let baseUrlTitular = 'https://b316wmuwh1.execute-api.us-east-1.amazonaws.com/default/get_titular';
let baseUrlBeneficiario = 'https://b316wmuwh1.execute-api.us-east-1.amazonaws.com/default/get_beneficiario';
let baseUrlAdicional = 'https://b316wmuwh1.execute-api.us-east-1.amazonaws.com/default/get_adicional';
//axios.defaults.headers.post['authorizationToken'] = '&S396b<eg5Zn(HiLe)BBNtc&';

class UsersView extends Component {
    
    constructor() {
        super();
        this.state = {
            datos_Titular: [],
            datos_Beneficiario: [],
            datos_Adicional: [],
            datos_interaccion:{
                actualizar:true,
                actualizarBeneficiario: true
            }
        };
    }

    async componentDidMount() {
        console.log('llamo interaccion : '+this.props.data.idinteraccion)
        const body = {"id_gestion": this.props.data.idinteraccion}
        await axios.post(baseUrlTitular,body)
        .then(response => {
            console.log('exito al enviar POST Titular: ' + JSON.stringify(response.data));
            this.setState({datos_Titular:response.data});
        })
        .catch(response => {
            console.log(response + ' error POST Titular')
        })
        await axios.post(baseUrlBeneficiario,body)
        .then(response => {
            console.log('exito al enviar POST Beneficiario: ' + JSON.stringify(response.data));
            this.setState({datos_Beneficiario:response.data});
        })
        .catch(response => {
            console.log(response + ' error POST Beneficiario')
        })
        await axios.post(baseUrlAdicional,body)
        .then(response => {
            console.log('exito al enviar POST Adicional: ' + JSON.stringify(response.data));
            this.setState({datos_Adicional:response.data});
        })
        .catch(response => {
            console.log(response + ' error POST Adicional')
        })

    }

    componentDidUpdate(){

        console.log('componentDidUpdate: variable user.js'+this.props.data.actualizar+' viewuserjs: '+this.state.datos_interaccion.actualizar)
        console.log('componentDidUpdate: variable user.js'+this.props.data.actualizar+' viewuserjs: '+this.state.datos_interaccion.actualizarBeneficiario)
        if(this.props.data.actualizar == true && this.state.datos_interaccion.actualizar == true){
            console.log('a actualizar mierda;');
            this._commitAutoSave();
            this.setState({datos_interaccion:{
                actualizar:false
            }})
        }
        if(this.props.data.actualizarBeneficiario == true && this.state.datos_interaccion.actualizarBeneficiario == true){
            console.log('a actualizarBeneficiario mierda;');
            this._commitAutoSaveBeneficiario();
            this.setState({datos_interaccion:{
                actualizarBeneficiario:false
            }})
        }
    
    }

    async _commitAutoSave(){
        console.log('llamo interaccion : '+this.props.data.idinteraccion)
        const body = {"id_gestion": this.props.data.idinteraccion}
        await axios.post(baseUrlTitular,body)
        .then(response => {
            console.log('exito al enviar POST Titular: ' + JSON.stringify(response.data));
            this.setState({datos_Titular:response.data});
        })
        .catch(response => {
            console.log(response + ' error POST Titular')
        })
      }
      async _commitAutoSaveBeneficiario(){
        console.log('llamo interaccion : '+this.props.data.idinteraccion)
        const body = {"id_gestion": this.props.data.idinteraccion}
        await axios.post(baseUrlBeneficiario,body)
        .then(response => {
            console.log('exito al enviar POST Beneficiario: ' + JSON.stringify(response.data));
            this.setState({datos_Beneficiario:response.data});
        })
        .catch(response => {
            console.log(response + ' error POST Beneficiario')
        })
      }
    render(){
        const { datos_Titular } = this.state;
        const { datos_Beneficiario } = this.state;
        const { datos_Adicional } = this.state;
        let titularList = datos_Titular.length > 0
            && datos_Titular.map((item, i) => {
                return (
                    
                    <tr>
                    <td>{item.tipoplan}</td>
                    <td>{item.nombre}</td>
                    <td>{item.appaterno}</td>
                    <td>{item.apmaterno}</td>
                    <td>{item.fechanacimiento}</td>
                    <td>{item.region}</td>
                    <td>{item.comuna}</td>
                    <td>{item.ciudad}</td>
                    <td>{item.direccion}</td>
                    <td>{item.telefono}</td>
                    <td>{item.mail}</td>
                    </tr>
                )
            }, this);
            let beneficiarioList = datos_Beneficiario.length > 0
            && datos_Beneficiario.map((item, i) => {
                return (
                    <tr>
                    <td>{item.nombre}</td>
                    <td>{item.appaterno}</td>
                    <td>{item.apmaterno}</td>
                    <td>{item.region}</td>
                    <td>{item.comuna}</td>
                    <td>{item.ciudad}</td>
                    <td>{item.direccion}</td>
                    <td>{item.fechanacimiento}</td>
                    <td>{item.telefono}</td>
                    <td>{item.parentesco}</td>
                    <td>{item.porcentaje}</td>
                    <td>{item.mail}</td>
                    </tr>
                )
            }, this);
            let adicionalList = datos_Adicional.length > 0
            && datos_Adicional.map((item, i) => {
                return (
                    <tr>
                    <td>{item.nombre}</td>
                    <td>{item.appaterno}</td>
                    <td>{item.apmaterno}</td>
                    <td>{item.fechanacimiento}</td>
                    <td>{item.rut}</td>
                    <td>{item.parentesco}</td>
                    <td>{item.nacionalidad}</td>
                    <td>{item.profesion}</td>
                    </tr>
                )
            }, this);
        return(
            <Tabs defaultActiveKey="DatosTitular" transition={false} id="noanim-tab-example">
            <Tab eventKey="DatosTitular" title="Datos Titular">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Tipo Plan</th>
                    <th>Nombre</th>
                    <th>Ap Paterno</th>
                    <th>Ap Materno</th>
                    <th>Fecha Nacimiento</th>
                    <th>Region</th>
                    <th>Comuna</th>
                    <th>Ciudad</th>
                    <th>Direccion</th>
                    <th>Telefono</th>
                    <th>Mail</th>
                    </tr>
                </thead>
                <tbody>
                    {titularList}
                </tbody>
            </Table>
            </Tab>
            <Tab eventKey="DatosBeneficiario" title="Datos Beneficiario">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Nombre</th>
                    <th>Ap Paterno</th>
                    <th>Ap Materno</th>
                    <th>Region</th>
                    <th>Comuna</th>
                    <th>Ciudad</th>
                    <th>Direccion</th>
                    <th>Fecha Nacimiento</th>
                    <th>Telefono</th>
                    <th>Parentesco</th>
                    <th>Porcentaje</th>
                    <th>Mail</th>
                    </tr>
                </thead>
                <tbody>
                    {beneficiarioList}
                </tbody>
            </Table>
            </Tab>
            <Tab eventKey="DatosAdicional" title="Datos Adicional">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Nombre</th>
                    <th>Ap Paterno</th>
                    <th>Ap Materno</th>
                    <th>Fecha Nacimiento</th>
                    <th>Rut</th>
                    <th>Parentesco</th>
                    <th>Nacionalidad</th>
                    <th>profesion</th>
                    </tr>
                </thead>
                <tbody>
                    {adicionalList}
                </tbody>
            </Table>
            </Tab>
            </Tabs>
        )
    }
}
  
export default UsersView;

