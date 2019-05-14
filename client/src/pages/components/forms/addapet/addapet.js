import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'
import { link } from 'fs';
import API from "../../../../utils/API";

class Addapet extends Component {
  state =
    {
      petName: "",
      petType: "",
      birthMonth: "",
      birthYear: "",
      gender_input: "",
      neutered_input: ""
    }

  handleInputChange = event => {
    const { id, value } = event.target;
    this.setState({
      [id]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.petName && this.state.petType) {
      let neuteredValue = false;
      if (this.state.neutered === "Yes") {
        neuteredValue = true;
      }
      let genderValue;
      if (this.state.gender_input == "1") {
        genderValue = "Male"
      } else {
        genderValue = "Female"
      }
      API.addPet({
        petName: this.state.petName,
        petType: this.state.petType,
        birthMonth: this.state.birthMonth,
        birthYear: this.state.birthYear,
        gender: genderValue,
        neutered: neuteredValue
      })
        .then(result =>
          window.location.replace(result.data)
        )
        .catch(err => console.log(err));
    }
  };

  // {/* my code with Jam's updates included */}
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div class="row">
        <form class="col s12">
          <div class="row">

            {/* Pet Name w/ paw icon */}
            <div class="input-field col s6">
              <i class="material-icons prefix">pets</i>
              <input
                value={this.state.petName}
                onChange={this.handleInputChange}
                placeholder="Pet Name" id="petName" type="text" />
              <label for="petName">Pet Name</label>
            </div>

            {/* Date of Birth uses datepicker*/}
            <div class="input-field col s6">
              <input
                value={this.state.birthMonth}
                onChange={this.handleInputChange}
                id="birthMonth" type="text" />
              <label for="birthMonth">Birth Month</label>
            </div>
            <div class="input-field col s6">
              <input value={this.state.birthYear}
                onChange={this.handleInputChange}
                id="birthYear" type="text" />
              <label for="birthYear">Birth Year</label>
            </div>

            {/* Gender uses select*/}
            <div class="input-field col s6">
              <select value={this.state.gender_input} onChange={this.handleInputChange} id="gender_input">
                <option value="" disabled selected>Select Pet Gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
              </select>
              <label for="gender_input">Pet Gender</label>
            </div>

            {/* Sterilization uses select*/}
            <div class="input-field col s6">
              <select value={this.state.neutered_input} onChange={this.handleInputChange} id="neutered_input">
                <option value="" disabled selected>Please select an option</option>
                <option value="1">My pet IS sterilized</option>
                <option value="2">My Pet is NOT sterilized</option>
              </select>
              <label for="neutered_input">Sterilization</label>
            </div>

            {/* Pet Type with defualt pet images*/}
            <div class="input-field col s12 m6">
              <select value={this.state.petType} onChange={this.handleInputChange} id="petType">
                <option value="" disabled selected>Select a Pet Type</option>
                <option value="Dog" data-icon="https://www.disneyclips.com/imagesnewb5/images/puppy.gif">Dog</option>
                <option value="Cat" data-icon="https://www.irononsticker.com/images/2016/01/21/Aristocats%20v39%20iron%20on%20stickers%20(heat%20transfer).gif">Cat</option>
              </select>
              <label for="petType">Pet Type</label>
            </div>
            <div className="modal-footer">
              <button class="modal-close btn waves-effect waves-light" onClick={this.handleFormSubmit}>Add-A-Pet
                            <i className="material-icons right">send</i>
              </button>
              {/* this button has to be here in order to capture the this.state values */}
            </div>
          </div>
        </form>
      </div>
        )
      }
    }
export default Addapet;