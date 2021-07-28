import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

let baseUrlRegion = 'https://b316wmuwh1.execute-api.us-east-1.amazonaws.com/default/get_region';

class Region extends Component {
    
    constructor() {
        super();
        this.state = {
            datos_region: []
        };
    }
    async componentDidMount() {
        //console.log('llamo data : '+this.props.data)
        await axios.post(baseUrlRegion)
        .then(response => {
            //console.log('exito al enviar POST Region: ' + JSON.stringify(response.data));
            this.setState({datos_region:response.data});
        })
        .catch(response => {
            console.log(response + ' error POST Region')
        })

    }
    render(){
        const { datos_region } = this.state;
        let RegionList = datos_region.length > 0
            && datos_region.map((item, i) => {
                return (
                    <option key={item.reg_numero_region} value={item.reg_numero_region+'-'+item.reg_descripcion}>{item.reg_descripcion}</option>
                )
            }, this);
        return(
            <>
            {RegionList}
            </>
        )
    }
}
  
export default Region; 
