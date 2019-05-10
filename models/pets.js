module.exports = function (sequelize, DataTypes) {
  
    var Pet = sequelize.define("Pet", {
      petId:
      {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      petType:
      {
        type: DataTypes.STRING,
        allowNull: false
      },
    });
    Pet.associate = function (models) {
      Pet.belongsTo(models.Owner, {
        foreignKey: {
          allowNull: false
        }
      });
    //   pets.hasMany(models.petNotes, {
    //     onDelete: "cascade"
    //   });
      Pet.hasOne(models.Dog, {
        onDelete: "cascade"
      });
      Pet.hasOne(models.Cat, {
        onDelete: "cascade"
      });
    };
    return Pet;
  
  };