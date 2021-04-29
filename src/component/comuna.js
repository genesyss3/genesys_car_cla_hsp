import React, { useState, useEffect, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from "react-bootstrap";
import axios from 'axios';

let baseUrlComuna = 'https://b316wmuwh1.execute-api.us-east-1.amazonaws.com/default/get_comuna';

class Comuna extends Component {
    
    constructor() {
        super();
        this.state = {
            datos_comuna: []
        };
    }
    async componentDidMount() {
        console.log('llamo data : '+ this.props.data)
        const bodyComuna = {"com_ciu_numero_ciudad": this.props.data}
        await axios.post(baseUrlComuna,bodyComuna)
        .then(response => {
            console.log('exito al enviar POST Comuna: ' + JSON.stringify(response.data));
            this.setState({datos_comuna:response.data});
        })
        .catch(response => {
            console.log(response + ' error POST Comuna')
        })

    }
    render(){
        const { datos_comuna } = this.state;
        let ComunaList = datos_comuna.length > 0
        && datos_comuna.map((item, i) => {
            return (
                <Dropdown.Item eventKey={item.com_numero_comuna + '-' + item.com_descripcion}>{item.com_descripcion}</Dropdown.Item>
            )
        }, this);
        return(
            <>
                {ComunaList}
            </>
        )
    }
}
  
export default Comuna; 
