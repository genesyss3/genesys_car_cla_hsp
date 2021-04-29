import React, { Component } from 'react';
import axios from 'axios';
import { Container, Dropdown } from "react-bootstrap";

let baseUrl = 'https://b316wmuwh1.execute-api.us-east-1.amazonaws.com/default/get_nivel2';
axios.defaults.headers.post['authorizationToken'] = '&S396b<eg5Zn(HiLe)BBNtc&';

class nivel2 extends Component {
    constructor() {
        super();
        this.state = {
            opciones_nivel2: []
        };
    }
    async componentDidMount() {
        console.log('llamo servicio nivel2: '+this.props.data)
        await axios.post(baseUrl,{ni1_id: this.props.data})
            .then(response => {
                console.log('exito get_nivel2: ' + JSON.stringify(response.data));
                this.setState({opciones_nivel2:response.data});
            })
            .catch(response => {
                console.log(response + ' error get_nivel2')
            })

    }
    render() {
        const { opciones_nivel2 } = this.state;
        //console.log('length evaluadores: '+evaluadores.length)
        let nivel2List = opciones_nivel2.length > 0
            && opciones_nivel2.map((item, i) => {
                return (
                    <Dropdown.Item eventKey={item.id_ni2+'-'+item.ni2_descripcion}>{item.ni2_descripcion}</Dropdown.Item>
                )
            }, this);
        return (
            <Container>
                {nivel2List}      
            </Container>
        );
    }
}

export default nivel2;