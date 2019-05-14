var passport = require("./config/passport");
var db = require("./models");
var express = require("express");
var session = require("express-session");
var app = express();
var PORT = process.env.PORT || 3001;
require("dotenv").config();
//tion stuff need to be here

// var isAuthenticated = require("../config/middleware/isAuthenticated");
// var isOwner = require("../config/middleware/isOwner");
// var isAdmin = require("../config/middleware/isAdmin")
// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({ secret: "jamesCat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


var syncOptions = { force: false };
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static("public"));
}

require("./routes/apiRoutes")(app);


// Send every other request to the React app
// Define any API routes before this runs


// app.listen(PORT, () => {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });


// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
} else {
  syncOptions.force = true;
}

// UserProject = sequelize.define('user_project', {
//   role: Sequelize.STRING
// });
// User.belongsToMany(Project, { through: UserProject });
// Project.belongsToMany(User, { through: UserProject });
// // through is required!

// user.addProject(project, { through: { role: 'manager' }});
// All methods allow you to pass either a persisted instance, its primary key, or a mixture:

// Project.create({ id: 11 }).then(project => {
//   user.addProjects([project, 12]);
// });

Agents = db.sequelize.define('agents');
db.Pet.belongsToMany(db.Owner, { through: Agents });
db.Owner.belongsToMany(db.Pet, { through: Agents });

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });

  //initial seed
  // if (process.env.NODE_ENV === "production") {
  //   //do nothing
  // } else {
  db.User.create({
    //if we use bulkCreate you have to add [array]
    email: "unique@email.com",
    password: "TEST",
    isOwner: true,
    isCSR: true,
    isAdmin: true
  }).then(function () {
    db.Owner.create({
      //if we use bulkCreate you have to add [array]
      ownerName: "Tucker",
      UserEmail: "unique@email.com",
      phone: 5558675309,
      authorizedAgents: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }).then(function (view) {
      db.Pet.bulkCreate([
        {
          petType: "Dog",
          OwnerOwnerId: view.dataValues.ownerId,
          PetOwnerId: view.dataValues.ownerId,
          //tbe above becomes view[i] if we use bulkCreate for owners
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          petType: "Dog",
          OwnerOwnerId: view.dataValues.ownerId,
          PetOwnerId: view.dataValues.ownerId,
          createdAt: new Date(),
          updatedAt: new Date()
        }]).then(function (view) {
          db.Dog.create({
            PetPetId: view[0].dataValues.petId,
            petName: "Evil",
            imageURL: " ",
            birthMonth: 06,
            birthYear: 66,
            petSubtype: "Weiner",
            gender: "A-gendered Demon",
            neutered: true,
            medicalHistory: "chronic possessions",
            createdAt: new Date(),
            updatedAt: new Date()
          });
          db.Dog.create({
            PetPetId: view[1].dataValues.petId,
            petName: "Floyd",
            imageURL: " ",
            birthMonth: 01,
            birthYear: 18,
            petType: "Cat",
            petSubtype: "Red Healer",
            gender: "Male",
            neutered: false,
            medicalHistory: "chews everything",
            createdAt: new Date(),
            updatedAt: new Date(),
            FVRCP_2_months: true
          });
          db.User.create({
            //if we use bulkCreate you have to add [array]
            email: "TEST@email.com",
            password: "TEST"
          }).then(function () {
            db.Owner.create({
              //if we use bulkCreate you have to add [array]
              ownerName: "Dale",
              UserEmail: "TEST@email.com",
              phone: 5558675309,
              authorizedAgents: "",
              createdAt: new Date(),
              updatedAt: new Date()
            }).then(function (view) {
              db.Pet.create({
                petType: "Dog",
                OwnerOwnerId: view.dataValues.ownerId,
                PetOwnerId: view.dataValues.ownerId,
                //tbe above becomes view[i] if we use bulkCreate for owners
                createdAt: new Date(),
                updatedAt: new Date()
              }).then(function (view) {
                db.Dog.create({
                  PetPetId: view.dataValues.petId,
                  petName: "Tomas",
                  imageURL: " ",
                  birthMonth: 06,
                  birthYear: 66,
                  petSubtype: "Shitzu",
                  gender: "Female",
                  neutered: true,
                  medicalHistory: "some Medical History",
                  createdAt: new Date(),
                  updatedAt: new Date()
                }).then(function (view) {
                  //id's in the database have an index of 1
                  db.Pet.findOne({ where: { petId: 1 } }).then(function (Pet) {
                    Pet.addOwner(ownerOwnerId = 2);
                  });
                  db.Pet.findOne({ where: { petId: 2 } }).then(function (Pet) {
                    Pet.addOwner(ownerOwnerId = 2);
                  });
                  db.Pet.findOne({ where: { petId: 3 } }).then(function (Pet) {
                    Pet.addOwner(ownerOwnerId = 1);
                  });
                });
              });
            });
          });
        });
    });
  });
});