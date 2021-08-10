import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Dropdown } from "react-bootstrap";
import axios from 'axios';

let baseUrlCiudad = 'https://b316wmuwh1.execute-api.us-east-1.amazonaws.com/default/get_ciudad_hom';
axios.defaults.headers.post['authorizationToken'] = '&S396b<eg5Zn(HiLe)BBNtc&';

class Ciudad extends Component {
    
    constructor() {
        super();
        this.state = {
            datos_ciudad: []
        };
    }
    fetchData(){
        //console.log('valido dato:  ' +this.props.data)
        const bodyCiudad = {
            "id_campana": '506d64a7-9e0f-4d01-bff0-eb3505d67275',
            "reg_id":  this.props.data}
        this.setState({
            datos_ciudad:'',
        })
        axios.post(baseUrlCiudad,bodyCiudad)
            .then(response => {
                //console.log('exito get_nivel1: ' + JSON.stringify(response.data));
                this.setState({datos_ciudad:response.data});
            })
            .catch(response => {
                console.log(response + ' error get_nivel1')
                
            })
    }
    componentDidUpdate(prevProps, prevState){
        if (this.props.data !== prevProps.data) {
            this.fetchData(this.state.datos_ciudad);
        }
    }
    render(){
        const { datos_ciudad } = this.state;
        let CiudadList = datos_ciudad.length > 0
        && datos_ciudad.map((item, i) => {
            return (
                <option key={item.ciu_numero_ciudad} value={item.ciu_numero_ciudad + '-' + item.ciu_descripcion}>{item.ciu_descripcion}</option>
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
