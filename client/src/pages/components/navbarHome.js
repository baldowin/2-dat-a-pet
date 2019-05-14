import React, {Component} from 'react';
import Login from '../components/forms/login/login';
import API from "../../utils/API";

// Import Materialize
import M from 'materialize-css/dist/js/materialize.min.js';

class NavbarHome extends Component {
    state={
        email_input: "",
        password_input: ""
      }
    componentDidMount() {
        M.AutoInit();
    }

    handleInputChange = event => {
        const { id, value } = event.target;
        this.setState({
          [id]: value
        });
      };
        
      handleFormSubmit = event => {
        event.preventDefault();
          API.loginUser({
            email: this.state.email_input,
            password: this.state.password_input
          })
            .then(result => 
              window.location.replace(result.data)
              )
            .catch(err => console.log(err));
      };

    render() {
        return (
            <div>

                <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Log in</a>
                    <div id="modal1" class="modal">
                        <div class="modal-content">
                            <h4>Login</h4>
                                < Login handleInputChange={this.handleInputChange} password={this.state.password} email={this.state.email}/>
                        </div>

                        <div class="modal-footer">
                            {/* <a href="#!" class="modal-close waves-effect waves-green btn-flat" type="submit" name="action">Login In</a>
                            <i class="material-icons right">send</i> */}
                            <button onClick={this.handleFormSubmit} class="modal-close btn waves-effect waves-light" type="submit" name="action">Login
                            <i class="material-icons right">send</i>
                            </button>
                        </div>

                    </div>
                <a class="waves-effect waves-light btn-flat" href="/signup"></a>
            </div>
        )
    }
}

export default NavbarHome