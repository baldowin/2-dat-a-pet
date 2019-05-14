import React, {Component} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'
import { link } from 'fs';

class Addauthorizeduser extends Component {
    componentDidMount() {
        M.AutoInit();
    }
    render() {
      return(
        <div class="row">
          <form class="col s12">
            <div class="row">
            
              {/*  Email w/ icon and validadation + custom error message */}
              <div class="input-field col s12">
                <i class="material-icons prefix">person_add</i>
                <input id="icon_prefix" type="text" class="validate"/>
                <label for="icon_prefix">Additional Authorized User's Email</label>
                <span class="helper-text" data-error="Please enter a valid email address"></span>
              </div>

            </div>
          </form>
        </div>
      )
    }
  }
export default Addauthorizeduser;
