import React from 'react';
import axios from 'axios';
//import { Container} from "react-bootstrap";

let baseUrl = 'https://b316wmuwh1.execute-api.us-east-1.amazonaws.com/default/get_benef_porcent';
axios.defaults.headers.post['authorizationToken'] = '&S396b<eg5Zn(HiLe)BBNtc&';


class PorcentajeBenef extends React.Component {
    constructor() {
        super();
        this.state = {
            opciones_porcentaje: []
        };
    }
    async componentDidMount() {
        /*console.log('llamo servicio contacto')
        console.log('llamo data '+ this.props.id_contacto)*/
        await axios.post(baseUrl,{id_contacto: this.props.id_contacto})
            .then(response => {
                console.log('get_benef_porcent: ' + JSON.stringify(response.data));
                this.setState({opciones_porcentaje:response.data});
            })
            .catch(response => {
                console.log(response + ' error get_evaluadores')
            })

    }
    render() {
        const { opciones_porcentaje } = this.state;
        let porcentajeList = opciones_porcentaje.length > 0
            && opciones_porcentaje.map((item, i) => {
                return (
                    <option key={item.porcentaje_disponible} value={item.porcentaje_disponible}>{item.porcentaje_disponible}</option>
                )
            }, this);
        return (
            <>
                {porcentajeList}
            </>
        );
    }
}

export default PorcentajeBenef;