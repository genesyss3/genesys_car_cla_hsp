import React, { Component } from 'react';
import axios from 'axios';
import { Container, Dropdown } from "react-bootstrap";

let baseUrl = 'https://b316wmuwh1.execute-api.us-east-1.amazonaws.com/default/get_nivel1';
axios.defaults.headers.post['authorizationToken'] = '&S396b<eg5Zn(HiLe)BBNtc&';
class nivel1 extends Component {
    constructor() {
        super();
        this.state = {
            opciones_nivel1: []
        };
    }
    async componentDidMount() {
        console.log('llamo servicio nivel1: '+this.props.data)
        await axios.post(baseUrl,{con_id:this.props.data })
            .then(response => {
                console.log('exito get_nivel1: ' + JSON.stringify(response.data));
                this.setState({opciones_nivel1:response.data});
            })
            .catch(response => {
                console.log(response + ' error get_nivel1')
            })

    }
    async componentDidUpdate(){
        console.log('llamo servicio nivel1: '+this.props.data)
        /*this.componentWillUnmount();
        await axios.post(baseUrl,{con_id:this.props.data })
            .then(response => {
                console.log('exito get_nivel1: ' + JSON.stringify(response.data));
                this.setState({opciones_nivel1:response.data});
            })
            .catch(response => {
                console.log(response + ' error get_nivel1')
            })*/
    }
    componentWillUnmount(){
        console.log('entra componentWillUnmount')
    }
    render() {
        const { opciones_nivel1 } = this.state;
        //console.log('length evaluadores: '+evaluadores.length)
        let nivel1List = opciones_nivel1.length > 0
            && opciones_nivel1.map((item, i) => {
                return (
                    <Dropdown.Item eventKey={item.id_ni1+'-'+item.ni1_descripcion}>{item.ni1_descripcion}</Dropdown.Item>
                )
            }, this);
        return (
            <Container>
                {nivel1List}      
            </Container>
        );
    }
}

export default nivel1;