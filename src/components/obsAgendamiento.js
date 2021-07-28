import React, { Component } from 'react';
import axios from 'axios';
import { Alert} from "react-bootstrap";
import {Container} from "react-bootstrap";

let baseUrl = 'https://b316wmuwh1.execute-api.us-east-1.amazonaws.com/default/get_agendamientos';
axios.defaults.headers.post['authorizationToken'] = '&S396b<eg5Zn(HiLe)BBNtc&';

class ObsAgendamiento extends Component {
    constructor() {
        super();
        this.state = {
            obserbaciones_contacto: []
        };
    }
    async componentDidMount() {
        
        //console.log('llamo servicio mostrar obserbacion')
        //console.log('valido dato:  ' +this.props.data)
        const body = JSON.stringify({
            con_id: this.props.data
        })
        //console.log(body)
        await axios.post(baseUrl,body)
            .then(response => {
                //console.log('exito get_evaluadores: ' + JSON.stringify(response.data));
                this.setState({obserbaciones_contacto:response.data});
                //console.log(response)
            })
            .catch(response => {
                console.log(response + ' error get_evaluadores')
            }
        )
        
    }
    render() {
        const { obserbaciones_contacto } = this.state;
        //console.log('length evaluadores: '+evaluadores.length)
        let contactoList = obserbaciones_contacto.length > 0
            && obserbaciones_contacto.map((item, i) => {
                return (
                    <Alert variant="info" key={item.jso_rel_date} size='sm'>
                    <h5>Datos del Agendamiento</h5>
                        <p>
                            <b>Fecha de Observación:</b> {item.jso_rel_date}
                        </p>
                        <p>
                            <b>Observación:</b> {item.observacion}
                        </p>
                    </Alert>
                )
            }, this);
        return (
            <Container>
                {contactoList}  
            </Container>
        );
    }

}

export default ObsAgendamiento;