import React, { Component } from 'react';
import axios from 'axios';

let baseUrl = 'https://b316wmuwh1.execute-api.us-east-1.amazonaws.com/default/get_con_niv_3';
axios.defaults.headers.post['authorizationToken'] = '&S396b<eg5Zn(HiLe)BBNtc&';

class Nivel3 extends Component {
    constructor() {
        super();
        this.state = {
            opciones_nivel3: []
        };
    }
    fetchData(){
        console.log('valido dato:  ' +this.props.data)
        this.setState({
            opciones_nivel3:''
        })
        axios.post(baseUrl, {ni2_id:this.props.data , cont_id: 'typ_car_hosp_fam'})
            .then(response => {
                console.log('exito get_nivel1: ' + JSON.stringify(response.data));
                this.setState({opciones_nivel3:response.data});
            })
            .catch(response => {
                console.log(response + ' error get_nivel1')
            })
    }
    componentDidUpdate(prevProps, prevState){
        if (this.props.data !== prevProps.data) {
            this.fetchData(this.state.opciones_nivel3);
        }
    }
    render() {
        const { opciones_nivel3 } = this.state;
        //console.log('length evaluadores: '+evaluadores.length)
        let nivel3List = opciones_nivel3.length > 0
            && opciones_nivel3.map((item, i) => {
                return (
                    <option key={item.typ_nivel_3} value={item.typ_nivel_3}>{item.typ_nivel_3}</option>
                )
            }, this);
        return (
            <>
                {nivel3List}
            </>
        );
    }
}

export default Nivel3;