import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

let baseUrl = 'https://b316wmuwh1.execute-api.us-east-1.amazonaws.com/default/get_profesion';

class Parentesco extends Component {
    
    constructor() {
        super();
        this.state = {
            datos_profesion: []
        };
    }
    async componentDidMount() {
        await axios.post(baseUrl,{id_cam: '1'})
        .then(response => {
            //console.log('exito al enviar POST Parentesco: ' + JSON.stringify(response.data));
            this.setState({datos_profesion:response.data});
        })
        .catch(response => {
            console.log(response + ' error POST Parentesco')
        })

    }
    render(){
        const { datos_profesion } = this.state;
        let profesionList = datos_profesion.length > 0
            && datos_profesion.map((item, i) => {
                return (
                    <option key={item.cod_profesion} value={item.cod_profesion+'-'+item.desc_profesion}>
                        {item.desc_profesion}
                        </option>
                )
            }, this);
        return(
            <>
            {profesionList}
            </>
        )
    }
}
  
export default Parentesco; 
