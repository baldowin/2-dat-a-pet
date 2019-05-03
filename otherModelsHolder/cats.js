//pasted from project 2, needs updating for project 3
//does not need petType
//need primary key for this table
//association to bridge table

module.exports = function (sequelize, DataTypes) {
  
    var cats = sequelize.define("cats", {
      petId:
      {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      petName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      imageURL: {
        type: DataTypes.STRING
      },
      birthMonth: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      birthYear:
      {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      petType:
      {
        type: DataTypes.STRING,
        allowNull: false
      },
      petSubtype:
      {
        type: DataTypes.STRING,
      },
      gender:
      {
        type: DataTypes.STRING,
        allowNull: false
      },
      neutered:
      {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      medicalHistory:
      {
        type: DataTypes.TEXT,
      }
    });
    cats.associate = function (models) {
      cats.belongsTo(models.owners, {
        foreignKey: {
          allowNull: false
        }
      });
      cats.hasMany(models.petNotes, {
        onDelete: "cascade"
      });
      pets.hasOne(models.dogImmunizations, {
        onDelete: "cascade"
      });
      pets.hasOne(models.catImmunizations, {
        onDelete: "cascade"
      });
    };
    return pets;
  
  };