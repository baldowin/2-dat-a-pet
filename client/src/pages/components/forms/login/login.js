import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'
import { link } from 'fs';


// class Login extends Component {
function Login(props)
// componentDidMount() {
//     M.AutoInit();
// }



// render(props) 
{
  console.log(props);
  return (
    <div class="row">
      <form class="col s12">
        <div class="row">

          {/*  Email w/ icon and validadation + custom error message */}
          <div class="input-field col s12">
            <i class="material-icons prefix">person_outline</i>
            <input value={props.email} onChange={props.handleInputChange} id="email_input" type="text" class="validate" />
            <label for="email_input">Email</label>
            <span class="helper-text" data-error="The email you entered is not associated with a Dat-A-Pet account"></span>
          </div>

          {/*  Password w/ thin closed lock icon */}
          <div class="input-field col s6">
            <i class="material-icons prefix">lock_outline</i>
            <input value={props.password} onChange={props.handleInputChange} id="password_input" type="text" class="validate" />
            <label for="icon_prefix">Password</label>
            <span class="helper-text" data-error="Incorrect password entered"></span>
          </div>

        </div>
      </form>
    </div>
  )
}
  // }
export default Login;