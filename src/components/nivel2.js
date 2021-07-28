import React, { Component } from 'react';
import axios from 'axios';

let baseUrl = 'https://b316wmuwh1.execute-api.us-east-1.amazonaws.com/default/get_con_niv_2';
axios.defaults.headers.post['authorizationToken'] = '&S396b<eg5Zn(HiLe)BBNtc&';

class Nivel2 extends Component {
    constructor() {
        super();
        this.state = {
            opciones_nivel2: []
        };
    }
    fetchData(){
        console.log('valido dato: ' +this.props.data)
        this.setState({
            opciones_nivel2:''
        })
        axios.post(baseUrl, {ni1_id:this.props.data, cont_id: 'typ_car_hosp_fam'})
            .then(response => {
                console.log('exito get_nivel2: ' + JSON.stringify(response.data));
                this.setState({opciones_nivel2:response.data});
            })
            .catch(response => {
                console.log(response + ' error get_nivel1')
            }
        )
    }
    componentDidUpdate(prevProps, prevState){
        if (this.props.data !== prevProps.data) {
            this.fetchData(this.state.opciones_nivel2);
        }
    }
    render() {
        const { opciones_nivel2 } = this.state;
        //console.log('length evaluadores: '+evaluadores.length)
        let nivel2List = opciones_nivel2.length > 0
            && opciones_nivel2.map((item, i) => {
                return (
                    <option key={item.typ_nivel_2} value={item.typ_nivel_2}>{item.typ_nivel_2}</option>
                )
            }, this);
        return (
            <>
                {nivel2List}
            </>
        );
    }
}

export default Nivel2;