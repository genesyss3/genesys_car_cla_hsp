import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

let baseUrlComuna = 'https://b316wmuwh1.execute-api.us-east-1.amazonaws.com/default/get_comuna_hom';
axios.defaults.headers.post['authorizationToken'] = '&S396b<eg5Zn(HiLe)BBNtc&';

class Comuna extends Component {
    
    constructor() {
        super();
        this.state = {
            datos_comuna: []
        };
    }
    fetchData(){
        //console.log('valido dato:  ' +this.props.data)
        const bodyComuna = {
            "id_campana": 'cam_cardif_hsp_fam',
            "com_ciu_numero_ciudad": this.props.data}
        this.setState({
            datos_comuna:'',
        })
        axios.post(baseUrlComuna,bodyComuna)
            .then(response => {
                //console.log('exito get_nivel1: ' + JSON.stringify(response.data));
                this.setState({datos_comuna:response.data});
            })
            .catch(response => {
                console.log(response + ' error get_nivel1')
                
            })
    }
    componentDidUpdate(prevProps, prevState){
        if (this.props.data !== prevProps.data) {
            this.fetchData(this.state.datos_comuna);
        }
    }
    render(){
        const { datos_comuna } = this.state;
        let ComunaList = datos_comuna.length > 0
        && datos_comuna.map((item, i) => {
            return (
                <option key={item.com_numero_comuna} value={item.com_numero_comuna + '-' + item.com_descripcion}>{item.com_descripcion}</option>
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
