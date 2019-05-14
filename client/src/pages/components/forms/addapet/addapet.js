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
    console.log(event.target);
    this.setState({
      [id]: value
    });
    console.log(this.state[id]);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.email_input)
    if (this.state.petName && this.state.petType) {
      console.log("inside if statement before API call")
      let neuteredValue = false;
      if (this.state.neutered === "Yes") {
        neuteredValue = true;
      }
      let petTypeValue;
      if(this.state.petType=="1"){
        petTypeValue = "Dog"
      } else {
        petTypeValue = "Cat"
      }
      let genderValue;
      if(this.state.gender_input =="1"){
        genderValue="Male"
      }else{
        genderValue="Female"
      }
      API.addPet({
        petName: this.state.petName,
        petType: petTypeValue,
        birthMonth: this.state.birthMonth,
        birthYear: this.state.birthYear,
        gender: genderValue,
        neutered: neuteredValue
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
    return (
      <div class="row">
        <form class="col s12">
          <div class="row">

            {/* Pet Name w/ paw icon */}
            <div class="input-field col s6">
              <i class="material-icons prefix">pets</i>
              <input
              value= {this.state.petName}
              onChange={this.handleInputChange}
              placeholder="Pet Name" id="petName" type="text" />
              <label for="petName">Pet Name</label>
            </div>
            <div class="input-field col s6">
              <select value= {this.state.petType}
              onChange={this.handleInputChange} id="petType">
                <option value="" disabled selected>Pet Type</option>
                <option value="1">Dog</option>
                <option value="2">Cat</option>
              </select>
              <label for="gender_input">Pet Type</label>
            </div>
            {/* Date of Birth uses datepicker*/}
            <div class="input-field col s6">
              <input value= {this.state.birthMonth}
              onChange={this.handleInputChange} id="birthMonth" type="text" />
              <label for="birthMonth">Birth Month</label>
            </div>
            <div class="input-field col s6">
              <input value= {this.state.birthYear}
              onChange={this.handleInputChange} id="birthYear" type="text" />
              <label for="birthYear">Birth Year</label>
            </div>

            {/* Gender uses select*/}
            <div class="input-field col s6">
              <select value= {this.state.gender_input}
              onChange={this.handleInputChange} id="gender_input">
                <option value="" disabled selected>Select Pet Gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
              </select>
              <label for="gender_input">Pet Gender</label>
            </div>

            {/*  */}
            {/* Neutered uses select*/}
            <div class="input-field col s6">
              <select value= {this.state.neutered_input}
              onChange={this.handleInputChange} id="neutered_input">
                <option value="1">Yes</option>
                <option value="2">No</option>
              </select>
              <label for="neutered_input">Is your pet neutered?</label>
            </div>
            {/*  */}
            <button onClick={this.handleFormSubmit} class="btn waves-effect waves-light" type="submit" name="action">Add my Pet!
                            <i class="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    )
  }
}
export default Addapet;
