import React, {Component} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'
import { link } from 'fs';
import API from "../../../../utils/API";

class Addauthorizeduser extends Component {
  state =
  {
    associatesEmail: ""
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
  console.log(this.state)
    API.createAssociation({associatesEmail: this.state.associatesEmail})
      .then(result =>{
        console.log(result)
        
        window.location.reload();
      })
      .catch(err => console.log(err));
};

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
                <input value={this.state.associatesEmail} onChange={this.handleInputChange} id="associatesEmail" type="text" class="validate"/>
                <label for="associatesEmail">Additional Authorized User's Email</label>
                <span class="helper-text" data-error="Please enter a valid email address"></span>
                <button className="waves-light btn" onClick={this.handleFormSubmit}>Grant Access</button>
              </div>

            </div>
          </form>
        </div>
      )
    }
  }
export default Addauthorizeduser;
