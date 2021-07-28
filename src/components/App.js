import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
//import Titular from '../pages/titular';
import Tipificaciones from '../pages/tipificaciones';
import NotFound from '../pages/404';
import Titular from '../pages/Titular'

/** Url para pruebas
 * http://localhost:3000/users/1/idcontacto/2/idinteraccion/3/idcampana/4/idcontactogenesys/5/fono/123456789
*/
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path ="/users/:idEjecutivo/idcontacto/:idContacto/idinteraccion/:idGestion/idcampana/:idCampana/idcontactogenesys/:idContactoGenesys/fono/:fono" component ={Tipificaciones}/>
        <Route exact path ="/formulario/users/:idEjecutivo/idcontacto/:idContacto/idinteraccion/:idGestion/idcampana/:idCampana/idcontactogenesys/:idContactoGenesys/fono/:fono" component ={Titular}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
} 

export default Routes;
