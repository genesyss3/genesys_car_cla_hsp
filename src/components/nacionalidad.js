import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

let baseUrl = 'https://b316wmuwh1.execute-api.us-east-1.amazonaws.com/default/post_nacionalidad';
axios.defaults.headers.post['authorizationToken'] = '&S396b<eg5Zn(HiLe)BBNtc&';

class Nacionalidad extends Component {
    
    constructor() {
        super();
        this.state = {
            datos_nacionalidad: []
        };
    }
    async componentDidMount() {
        await axios.post(baseUrl,{id_campana: 'car_cla_hsp_famv2'})
        .then(response => {
            //console.log('exito al enviar POST nacionalidad: ' + JSON.stringify(response.data));
            this.setState({datos_nacionalidad:response.data});
        })
        .catch(response => {
            console.log(response + ' error POST nacionalidad')
        })

    }
    render(){
        const { datos_nacionalidad } = this.state;
        let nacionalidadList = datos_nacionalidad.length > 0
            && datos_nacionalidad.map((item, i) => {
                return (
                    <option key={item.nat_cod_nationality} value={item.nat_id_cam+'-'+item.nat_cod_nationality+'-'
                    +item.nat_name_nationality}>{item.nat_name_nationality}</option>
                )
            }, this);
        return(
            <>
            {nacionalidadList}
            </>
        )
    }
}
  
export default Nacionalidad; 
