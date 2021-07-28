import React, { Component } from 'react';
import axios from 'axios';
//import {Container} from "react-bootstrap";

let baseUrl = 'https://b316wmuwh1.execute-api.us-east-1.amazonaws.com/default/get_con_niv_1';
axios.defaults.headers.post['authorizationToken'] = '&S396b<eg5Zn(HiLe)BBNtc&';

class Nivel1 extends Component {
    constructor() {
        super();
        this.state = {
            opciones_nivel1: [],
        };
    }

    fetchData(){
        console.log('valido dato:  ' +this.props.data)
        this.setState({
            opciones_nivel1:'',
        })
        axios.post(baseUrl, {con_id:this.props.data, cont_id: 'typ_car_hosp_fam' })
        .then(response => {
            console.log('exito get_nivel1: ' + JSON.stringify(response.data));
            this.setState({opciones_nivel1:response.data});
        })
        .catch(response => {
            console.log(response + ' error get_nivel1')
            
        })
    }
    componentDidUpdate(prevProps){
        if (this.props.data !== prevProps.data) {
            this.fetchData(this.state.opciones_nivel1);
        }
    }

    render() {
        const { opciones_nivel1 } = this.state;
        //console.log('length evaluadores: '+evaluadores.length)
        let nivel1List = opciones_nivel1.length > 0
            && opciones_nivel1.map((item, i) => {
                return (
                    <option key={item.typ_nivel_1} value={item.typ_nivel_1}>{item.typ_nivel_1}</option>
                )
            }, this);
        return (
            <>
                {nivel1List}
            </>
        );
    }
}

export default Nivel1;