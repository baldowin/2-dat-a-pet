import React, {Component} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'
import { link } from 'fs';
import API from "../../../../utils/API";

class SignUp extends Component {
  state=
  {
    first_name: "",
    last_name: "",
    phone_input: "",
    email_input: "",
    password_input:""
  }

  handleInputChange = event => {
    const { id, value } = event.target;
    console.log(event.target);
    this.setState({
      [id]: value
    });
    console.log(this.state[id]);
  };
    
  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.email_input)
    if (this.state.first_name && this.state.email_input) {
      console.log("inside if statement before API call")
      API.addUser({
        ownerName: this.state.first_name+" "+this.state.last_name,
        phone: this.state.phone_input,
        email: this.state.email_input,
        password: this.state.password_input
      })
        .then(result => 
          // console.log(result)
          // ,
          window.location.replace(result.data)
          )
        .catch(err => console.log(err));
    }
  };

    componentDidMount() {
        M.AutoInit();
    }
    render() {
      console.log("reRender");
      console.log(this.state);
      return(
        <div class="row">
          <form id="signUp_form" class="col s12">
            <div class="row">

              {/* First Name w/ person icon */}
              <div class="input-field col s6">
                <i class="material-icons prefix">person_outline</i>
                <input value={this.state.first_name} onChange={this.handleInputChange} placeholder="First Name" id="first_name" type="text" class="validate"/>
                <label for="first_name">First Name</label>
              </div>

              {/*  Last Name, next to First name in the same row */}
              <div class="input-field col s6">
                <input value={this.state.last_name} onChange={this.handleInputChange} id="last_name" type="text" class="validate"/>
                <label for="last_name">Last Name</label>
              </div>

              {/*  Email w/ icon and validadation + custom error message */}
              <div class="input-field col s12">
                <i class="material-icons prefix">email</i>
                <input value={this.state.email_input} onChange={this.handleInputChange} id="email_input" type="text" class="validate"/>
                <label for="email_input">Email</label>
                <span class="helper-text" data-error="Please enter a valid email address"></span>
              </div>

              {/*  Password w/ open lock icon */}
              <div class="input-field col s6">
                <i class="material-icons prefix">lock_open</i>
                <input value={this.state.password_input} onChange={this.handleInputChange} id="password_input" type="text" class="validate"/>
                <label for="password_input">Password</label>
              </div>

              {/*  Phone next to password w/ phone icon */}
              <div class="input-field col s6">
                <i class="material-icons prefix">phone</i>
                <input value={this.state.phone_input} onChange={this.handleInputChange} id="phone_input" type="tel" data-length="10" class="validate"/>
                <label for="phone_input">Phone Number</label>
              </div>

               <button onClick= {this.handleFormSubmit} class="btn waves-effect waves-light" type="submit" name="action">Join!
                            <i class="material-icons right">send</i>
                            </button>

            </div>
          </form>
        </div>
      )
    }
  }
export default SignUp;
