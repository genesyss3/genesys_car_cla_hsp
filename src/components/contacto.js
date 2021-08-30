import React, { Component } from 'react';
import axios from 'axios';
//import { Container} from "react-bootstrap";

let baseUrl = 'https://b316wmuwh1.execute-api.us-east-1.amazonaws.com/default/get_con_cont';
axios.defaults.headers.post['authorizationToken'] = '&S396b<eg5Zn(HiLe)BBNtc&';


class Contacto extends Component {
    constructor() {
        super();
        this.state = {
            opciones_contacto: []
        };
    }
    async componentDidMount() {
        //console.log('llamo servicio contacto')
        await axios.post(baseUrl,{cont_id: '506d64a7-9e0f-4d01-bff0-eb3505d67275'})
            .then(response => {
                //console.log('exito get_evaluadores: ' + JSON.stringify(response.data));
                this.setState({opciones_contacto:response.data});
            })
            .catch(response => {
                console.log(response + ' error get_evaluadores')
            }
        )

    }
    render() {
        const { opciones_contacto } = this.state;
        let contactoList = opciones_contacto.length > 0
            && opciones_contacto.map((item, i) => {
                return (
                    <option key={item.typ_contacto} value={item.typ_contacto}>{item.typ_contacto}</option>
                )
            }, this);
        return (
            <>
                {contactoList}
            </>
        );
    }
}

export default Contacto;