// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
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
    owner: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: true
    },
    CSR: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: false
    },
    admin: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: false
    }
  });

  users.associate = function(models){
    users.hasOne(models.owners, {
      as: "owners",
      onDelete: "cascade"
    });
  };
  //leverage bcrypt library for our check password hashes
  users.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // the below adds a function that runs when a user record is being created through this model
  users.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    console.log("beforeCreate hook");
  });
  users.addHook("beforeBulkCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    console.log("bulkCreate hook");
  });
  return users;
};