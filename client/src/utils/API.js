//this file is copied form Project 2, needs modification for project 3

import axios from "axios";

export default {
  //Gets all associatedPets
  adminAssociatedPets: function() {
    return axios.get("/api/associatedPets/:email")
  },
  //Gets all pets for single owner
  //this includes owner data for that single owner
  adminPets: function(email){
    console.log("inside adminPets api.js "+email)
    return axios.get("/admin/api/pets/"+email)
  },
  // Gets all pets under all Owners
  adminAllPets: function() {
    return axios.get("/api/pets");
  },
  //Gets all Owners
  adminAllOwners: function() {
    return axios.get("/api/owner");
  },
  getUserAssociatedPets: function(email){
    return axios.get("/api/user/associatedPets/"+email);
  },
  // Gets all the pets of a user
  getUserPets: function() {
    console.log("getUserPets API.js")
    return axios.get("/api/users/pets/");
  },
  // Gets info of a user
  getUser: function(email) {
    return axios.get("/api/users/" + email);
  },
  // Deletes the User with the given id
  deleteUser: function(email) {
    return axios.delete("/api/users/" + email);
  },
  // Saves a User to the database
  addUser: function(userData) {
    return axios.post("/api/signup", userData);
  },
   // Saves a User to the database
   loginUser: function(userData) {
     console.log("inside loginUser API util")
    return axios.post("/api/login", userData);
  },
  // Updates a User
  updateUser: function(id,userData) {
    return axios.put("/api/users/"+id,userData);
  },
  //Gets a single pet
  getPet: function(id){
    return axios.get("/api/pets/"+id);
  },
  // Deletes the book with the given id
  deletePet: function(id) {
    return axios.delete("/api/pets/" + id);
  },
  // Saves a Pet to the database
  addPet: function(petData) {
    return axios.post("/api/pets", petData);
  },
  // Updates a Pet
  updatePet: function(id,petData) {
    return axios.put("/api/pets/"+id,petData);
  }
};
