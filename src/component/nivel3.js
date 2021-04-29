import React, { Component } from 'react';
import axios from 'axios';
import { Container, Dropdown} from "react-bootstrap";

let baseUrl = 'https://b316wmuwh1.execute-api.us-east-1.amazonaws.com/default/get_nivel3';
axios.defaults.headers.post['authorizationToken'] = '&S396b<eg5Zn(HiLe)BBNtc&';

class nivel3 extends Component {
    constructor() {
        super();
        this.state = {
            opciones_nivel3: []
        };
    }
    async componentDidMount() {
        console.log('llamo servicio nivel3: '+this.props.data)
        await axios.post(baseUrl,{ni2_id: this.props.data})
            .then(response => {
                console.log('exito get_nivel2: ' + JSON.stringify(response.data));
                this.setState({opciones_nivel3:response.data});
            })
            .catch(response => {
                console.log(response + ' error get_nivel2')
            })

    }
    render() {
        const { opciones_nivel3 } = this.state;
        //console.log('length evaluadores: '+evaluadores.length)
        let nivel3List = opciones_nivel3.length > 0
            && opciones_nivel3.map((item, i) => {
                return (
                    <Dropdown.Item eventKey={item.id_ni3+'-'+item.ni3_descripcion}>{item.ni3_descripcion}</Dropdown.Item>
                    
                )
            }, this);
        return (
            <Container>
                {nivel3List}
            </Container>
        );
    }
}

export default nivel3;