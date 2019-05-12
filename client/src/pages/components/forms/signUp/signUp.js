import React, {Component} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'
import { link } from 'fs';

class SignUp extends Component {
    componentDidMount() {
        M.AutoInit();
    }
    render() {
      return(
        <div class="row">
          <form class="col s12">
            <div class="row">

              {/* First Name w/ person icon */}
              <div class="input-field col s6">
                <i class="material-icons prefix">person_outline</i>
                <input placeholder="First Name" id="icon_prefix" type="text" class="validate"/>
                <label for="icon_prefix">First Name</label>
              </div>

              {/*  Last Name, next to First name in the same row */}
              <div class="input-field col s6">
                <input id="last_name" type="text" class="validate"/>
                <label for="last_name">Last Name</label>
              </div>

              {/*  Email w/ icon and validadation + custom error message */}
              <div class="input-field col s12">
                <i class="material-icons prefix">email</i>
                <input id="icon_prefix" type="text" class="validate"/>
                <label for="icon_prefix">Email</label>
                <span class="helper-text" data-error="Please enter a valid email address"></span>
              </div>

              {/*  Password w/ open lock icon */}
              <div class="input-field col s6">
                <i class="material-icons prefix">lock_open</i>
                <input id="icon_prefix" type="text" class="validate"/>
                <label for="icon_prefix">Password</label>
              </div>

              {/*  Phone next to password w/ phone icon */}
              <div class="input-field col s6">
                <i class="material-icons prefix">phone</i>
                <input id="icon_telephone" type="tel" data-length="10" class="validate"/>
                <label for="icon_telephone">Phone Number</label>
              </div>

            </div>
          </form>
        </div>
      )
    }
  }
export default SignUp;