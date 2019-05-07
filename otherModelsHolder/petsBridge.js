//this needs petID as primary key
//foreignKey of Dog table
//foreignKey of Cat table
//petType
//needs ownerId foreign key

module.exports = function (sequelize, DataTypes) {
  
    var petsBridge = sequelize.define("petsBridge", {
      petId:
      {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      }
    })
    return petsBridge;
}