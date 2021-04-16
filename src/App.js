import './App.css';
import React from 'react';
class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {value: 'coconut'};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {    this.setState({value: event.target.value});  }
    handleSubmit(event) {
      alert('tu favorito es: ' + this.state.value);
      // inicio post
      const requestOptions = {
          method: 'POST',
          headers: { 
              'Content-Type': 'application/json',
              'authorizationToken': '&S396b<eg5Zn(HiLe)BBNtc&',
          },
          body: JSON.stringify({ descripcion: 'exito' })
      };
      fetch('https://b316wmuwh1.execute-api.us-east-1.amazonaws.com/default/res_json_formulario', requestOptions)
          .then(response => response.json())
          .then(response => {console.log(response)});
      event.preventDefault();
    }
  render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <label>
              item seleccionable:
              <select value={this.state.value} onChange={this.handleChange}>            <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
      );
  }
}
export { App }; 
export default App;