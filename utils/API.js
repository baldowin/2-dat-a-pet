//this file is copied form Project 2, needs modification for project 3

import axios from "axios";

export default {
  //Gets all associatedPets
  adminAssociatedPets: function() {
    return axios.get("/api/admin/associatedPets/:email")
  },
  //Gets all pets for single owner
  //this includes owner data for that single owner
  adminPets: function(){
    return axios.get("api/admin/Pets/:email")
  },
  // Gets all pets under all Owners
  adminAllPets: function() {
    return axios.get("/api/admin/pets");
  },
  //Gets all Owners
  adminAllOwners: function() {
    return axios.get("/api/admin/owner");
  },
  getUserAssociatedPets: function(email){
    return axios.get("api/user/associatedPets/"+email);
  },
  // Gets all the pets of a user
  getUserPets: function(email) {
    return axios.get("/api/users/pets/"+email);
  },
  // Gets info of a user
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the User with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a Pet to the database
  addUser: function(userData) {
    return axios.post("/api/users", userData);
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
