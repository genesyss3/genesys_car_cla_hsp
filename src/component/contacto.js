import React, { Component } from 'react';
import axios from 'axios';
import { Container, Dropdown } from "react-bootstrap";

let baseUrl = 'https://u1ju2wslr5.execute-api.us-east-1.amazonaws.com/default/get_contacto';

class contacto extends Component {
    constructor() {
        super();
        this.state = {
            reload: false,
            opciones_contacto: []
        };
    }
    async componentDidMount() {
        console.log('llamo servicio contacto')
        await axios.get(baseUrl)
            .then(response => {
                //console.log('exito get_evaluadores: ' + JSON.stringify(response.data));
                this.setState({opciones_contacto:response.data});
            })
            .catch(response => {
                console.log(response + ' error get_evaluadores')
            })

    }
    render() {
        const { opciones_contacto } = this.state;
        //console.log('length evaluadores: '+evaluadores.length)
        let contactoList = opciones_contacto.length > 0
            && opciones_contacto.map((item, i) => {
                return (
                    <Dropdown.Item eventKey={item.id+'-'+item.descripcion}>{item.descripcion}</Dropdown.Item>
                )
            }, this);
        return (
            <Container>
                {contactoList}                
            </Container>
        );
    }
}

export default contacto;