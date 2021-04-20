import React,{ Component} from 'react';
import axios from 'axios';

class HomeContainer extends Component{

    componentDidMount(){
        axios.get(' https://u1ju2wslr5.execute-api.us-east-1.amazonaws.com/default/get_contacto')
        .then(result =>{
            console.log(result)
        })
        .catch(console.log)
    }
    render(){
        return <h1>App</h1>
    }

}
export default HomeContainer;