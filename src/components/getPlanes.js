import React, { Component } from 'react';
import axios from 'axios';

let baseUrl = 'https://b316wmuwh1.execute-api.us-east-1.amazonaws.com/default/get_producto';
axios.defaults.headers.post['authorizationToken'] = '&S396b<eg5Zn(HiLe)BBNtc&';


class Planes extends Component {
    constructor() {
        super();
        this.state = {
            opciones_planes: []
        };
    }
    async componentDidMount() {
        //console.log('llamo servicio planes')
        await axios.post(baseUrl,{pro_id: 6})
            .then(response => {
                //console.log('exito get_evaluadores: ' + JSON.stringify(response.data));
                this.setState({opciones_planes:response.data});
            })
            .catch(response => {
                console.log(response + ' error get_evaluadores')
            })

    }
    render() {
        var contador = 0;
        const { opciones_planes } = this.state;
        let planesList = opciones_planes.length > 0
            && opciones_planes.map((item, i) => {
                return (
                    <option key={contador++} value={item.pro_name_cam+'*'+item.pro_cod_plan+'*'+
                    item.pro_desc_plan+'*'+item.pro_valu_plan+'*'+
                    item.pro_cod_plan_sponsor+'*'+item.pro_sponsor}>{item.pro_cod_plan+' UF '+item.pro_valu_plan}</option>
                )
            }, this);
        return (
            <>
                {planesList}
            </>
        );
    }
}

export default Planes;