import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

let baseUrl = 'https://b316wmuwh1.execute-api.us-east-1.amazonaws.com/default/post_parentesco';

class Parentesco extends Component {
    
    constructor() {
        super();
        this.state = {
            datos_parentesco: []
        };
    }
    async componentDidMount() {
        await axios.post(baseUrl,{id_campana: 'car_cla_hsp_fam'})
        .then(response => {
            //console.log('exito al enviar POST Parentesco: ' + JSON.stringify(response.data));
            this.setState({datos_parentesco:response.data});
        })
        .catch(response => {
            console.log(response + ' error POST Parentesco')
        })

    }
    render(){
        const { datos_parentesco } = this.state;
        let parentescoList = datos_parentesco.length > 0
            && datos_parentesco.map((item, i) => {
                return (
                    <option key={item.rel_cod_relationship} value={item.rel_id_cam+'-'+item.rel_cod_relationship+'-'
                    +item.rel_name_relationship}>{item.rel_name_relationship}</option>
                )
            }, this);
        return(
            <>
            {parentescoList}
            </>
        )
    }
}
  
export default Parentesco; 
