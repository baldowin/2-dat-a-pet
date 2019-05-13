import React, {Component} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'
import { link } from 'fs';

class Addapet extends Component {
    componentDidMount() {
        M.AutoInit();
    }
    render() {
      return(
        <div class="row">
          <form class="col s12">
            <div class="row">

                {/* Pet Name w/ paw icon */}
                <div class="input-field col s6">
                    <i class="material-icons prefix">pets</i>
                    <input placeholder="Pet Name" id="paw_prefix" type="text"/>
                    <label for="paw_prefix">Pet Name</label>
                </div>

                {/* Date of Birth uses datepicker*/}
                <div class="input-field col s6">
                    <input id="dob" type="text" class="datepicker"/>
                    <label for="dob">Date of Birth</label>
                </div>

                {/* Gender uses select*/}
                <div class="input-field col s6">
                    <select>
                    <option value="" disabled selected>Select Pet Gender</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    </select>
                    <label>Pet Gender</label>
                </div>
{/*  */}
                {/* Neutered uses select*/}
                <div>
                    <label>Is your Pet Neutered?</label>
                    <p>
                        <label>
                            <input name="group1" type="radio" checked />
                            <span>Yes</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input name="group1" type="radio" />
                            <span>No</span>
                        </label>
                    </p>
                </div>
{/*  */}
            </div>
          </form>
        </div>
      )
    }
  }
export default Addapet;
