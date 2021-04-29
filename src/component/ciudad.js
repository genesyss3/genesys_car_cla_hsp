import React, { useState, useEffect, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from "react-bootstrap";
import axios from 'axios';

let baseUrlCiudad = 'https://b316wmuwh1.execute-api.us-east-1.amazonaws.com/default/get_ciudad';

class Ciudad extends Component {
    
    constructor() {
        super();
        this.state = {
            datos_ciudad: []
        };
    }
    async componentDidMount() {
        console.log('llamo ciudad : ' + this.props.data)
        const bodyCiudad = {"reg_id":  this.props.data}
        await axios.post(baseUrlCiudad,bodyCiudad)
        .then(response => {
            console.log('exito al enviar POST Ciudad: ' + JSON.stringify(response.data));
            this.setState({datos_ciudad:response.data});
        })
        .catch(response => {
            console.log(response + ' error POST Ciudad')
        })

    }
    render(){
        const { datos_ciudad } = this.state;
        let CiudadList = datos_ciudad.length > 0
        && datos_ciudad.map((item, i) => {
            return (
                
                <Dropdown.Item eventKey={item.ciu_numero_ciudad + '-' + item.ciu_descripcion}>{item.ciu_descripcion}</Dropdown.Item>
            )
        }, this);
        return(
            
            <>                
                {CiudadList} 
            </>
        )
    }
}
  
export default Ciudad; 
