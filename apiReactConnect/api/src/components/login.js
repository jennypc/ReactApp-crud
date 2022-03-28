import React, { Component } from 'react';
import '../css/login.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends Component {
    constructor() {
        super();
        this.changeUsername = this.changeUsername.bind(this);
        this.changePassword = this.changePassword.bind(this);
      }
    
    changeUsername(event) {
        this.props.changeUsername(event.target.value);
      }
      changePassword(event) {
        this.props.changePassword(event.target.value);
      }
    
    render() {
        return (
    <div isOpen={this.props.show} className="containerPrincipal">
        <div className="containerSecundario">
          <div className="form-group">
            <label>Usuario: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={this.changeUsername}
            />
            <br />
            <label>Contraseña: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.changePassword}
            />
            <br />
            <button className="btn btn-primary" onClick={()=> this.props.iniciarSesion()}>Iniciar Sesión</button>
          </div>
        </div>
      </div>
        );
    }
}
export default Login;