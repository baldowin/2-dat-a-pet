var db = require("../models");
var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");
var isOwner = require("../config/middleware/isOwner");
var isAdmin = require("../config/middleware/isOwner");
var path = require("path");
var Sequelize = require("sequelize");
var Op = Sequelize.Op;



////////////////////THIS FILE HAS ISAUTHENTICATED AND ISOWNER REMOVED/////////////////////




module.exports = function (app) {
  ///////////////////////ADMIN ADMIN ADMIN ADMIN ADMIN//////////////////////////////

  //admin route - find all owners and list pets
  //updated for newschema
  //does not include a security check
  app.get("/api/admin/pets", function (req, res) {
    db.Owner.findAll({
      include: [{
        model: db.Pet,
        as: "Pet", include: [{ model: db.Dog, attribute: ["petName"] }, { model: db.Cat, attribute: ["petName"] }]
      }]
    }).then(function (view) {
      res.json(view);
    });
  });

  //admin route- find all owners ONLY
  //updated for newschema
  //does not include a security check
  app.get("/api/admin/owners", function (req, res) {
    db.Owner.findAll({
    }).then(function (view) {
      res.json(view);
    });
  });

  //admin route- find all pet data for single Owner
  //updated for newschema
  //does not include a security check
  app.get("/api/admin/pets/:email", function (req, res) {
    db.Owner.findOne({
      where: { UserEmail: req.params.email },
      include: [{
        model: db.Pet,
        as: "Pet",
        include: [{ model: db.Dog }, { model: db.Cat }]
      }]
    }).then(function (view) {
      res.json(view);
    });
  });

  //admin route- find all Associatedpet data for single Owner
  //updated for newschema
  //does not include a security check
  app.get("/api/admin/associatedPets/:email", function (req, res) {
    db.Owner.findOne({
      where: { UserEmail: req.params.email },
      include: [{
        model: db.Pet,
        through: Agents,
        include: [{ model: db.Dog }, { model: db.Cat }]
      }]
    }).then(function (view) {
      console.log(view);
      res.json(view);
    });
  });

  ///////////////////USER USER USER USER USER///////////////////////////////////

  //get all associated pets for a user
  //updated for newschema
  //does not include a security check
  app.get("/api/users/associatedPets/:email", function (req, res) {
    db.Owner.findOne({
      where: { UserEmail: req.params.email },
      include: [{
        model: db.Pet,
        through: Agents,
        include: [{ model: db.Dog }, { model: db.Cat }]
      }]
    }).then(function (view) {
      console.log(view);
      res.json(view);
    });
  });

  // Get all pets of user
  //updated for newschema
  //does not include a security check
  app.get("/api/users/pets/:email", function (req, res) {
    db.Owner.findOne({
      where: { UserEmail: req.params.email },
      include: [{
        model: db.Pet,
        as: "Pet",
        include: [{ model: db.Dog }, { model: db.Cat }]
      }]
    }).then(function (view) {
      res.json(view);
    });
  });


  // Get user info
  //does not include a security checkS
  app.get("/api/users/:email", function (req, res) {
    db.Owner.findOne({
      where: { id: req.params.email }
    }).then(function (view) {
      res.json(view);
    });
  });

  // Get a single pet
  //updated for newschema
  //does not include a security check
  app.get("/api/pets/:id", function (req, res) {
    db.Pet.findOne({
      where: { id: req.params.id },
      include: [{ model: db.Dog }, { model: db.Cat }]
    }).then(function (view) {
      res.json(view);
    });
  });

  // Creates a Pet and puts it in the database
  app.post("/api/pets", function (req, res) {

    db.Owner.findOne({
      where: {
        ownerEmail: req.user.email
      }
    }).then(function (view) {
      req.body.ownerOwnerId = view.dataValues.ownerId;
      //view.dataValues.ownerId
      db.pet.create(req.body).then(function (result) {
        switch (result.dataValues.petType) {
          case "Dog":
            db.Dog.create({
              PetPetId: result.dataValues.petId
            }).then(function (res) {
              res.json("/dashboard");
            });
            break;
          case "Cat":
            db.Cat.create({
              PetPetId: result.dataValues.petId
            }).then(function (res) {
              res.json("/dashboard");
            });
            break;
        }
      });
    });
  });

  // Delete a pet
  // updated for newschema
  // does not include security check
  app.delete("/api/pets/:id", function (req, res) {
    db.Pet.destroy({ where: { petId: req.params.id } }).then(function (result) {
      res.json(result);
    });
  });


  // Updates a pet
  // updated for newschema
  //does not include a security check
  app.put("/api/pets/:id", function (req, res) {

    db.Pet.FindOne({
      where: { id: req.params.id }
    }).then(function (result) {
      console.log(result);
      if (result.pet.petType === "Dog") {
        db.Dog.update(req.body, {
          where: { PetPetId: req.params.id }
        }).then(function (result) {
          res.json(result);
        });
      } else {
        db.Cat.update(req.body, {
          where: { PetPetId: req.params.id }
        }).then(function (result) {
          res.json(result);
        });
      }
    })
  });


  ////START OF AUTH APIS//////////////
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    console.log("api/login was hit");
    res.json("/dashboard");//this should be something else
  });

  app.get("/login", function (req, res) {
    console.log("login route works");
    if (req.user) {
      res.redirect("/dashboard");
    } else {
      // res.render("login");
      res.redirect("/signup");
    }
  });

  // Auth // Signup - new user creation - 
  app.post("/api/signup", function (req, res) {
    console.log("api/signup was hit");
    console.log(req);
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      owner: true
    }).then(function(){
      db.Owner.create({
        UserEmail: req.body.email,
        ownerName: req.body.ownerName,
        phone: req.body.phone,
      }).then(function () {
        // res.json("success");
        res.redirect(307, "/api/login");
      }).catch(function (err) {
        console.log(err);
        res.json(err);
      });
      

    }).catch(function (err) {
      res.json(err);
    });
  });

  // Auth // Logout
  app.get('/logout', function (req, res){
    console.log('logout was hit');
    req.session.destroy(function (err) {
      res.redirect('/');
    });
  });

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
};
