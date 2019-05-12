// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isOwner: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: true
    },
    isCSR: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: false
    },
    isAdmin: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: false
    }
  });

  User.associate = function(models){
    User.hasOne(models.Owner, {
      onDelete: "cascade"
    });
  };
  //leverage bcrypt library for our check password hashes
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // the below adds a function that runs when a user record is being created through this model
  User.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    console.log("beforeCreate hook");
  });
  User.addHook("beforeBulkCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    console.log("bulkCreate hook");
  });
  return User;
};