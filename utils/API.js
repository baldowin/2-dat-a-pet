//this file is copied form Project 2, needs modification for project 3

import axios from "axios";

export default {
  // Gets all pets
  adminPet: function() {
    return axios.get("/api/admin/pet");
  },
  //Gets all Owners
  adminOwner: function() {
    return axios.get("/api/admin/owner");
  },
  // Gets all the pets of a user
  getUserPets: function(id) {
    return axios.get("/api/user/" + id+"/pet");
  },
  // Gets info of a user
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  //Gets a single pet
  getPet: function(id){
    return axios.get("/api/pet/"+id);
  },
  // Deletes the book with the given id
  deletePet: function(id) {
    return axios.delete("/api/pet/" + id);
  },
  // Saves a book to the database
  addPet: function(bookData) {
    return axios.post("/api/pet", bookData);
  }
};
