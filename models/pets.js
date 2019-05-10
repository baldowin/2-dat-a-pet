module.exports = function (sequelize, DataTypes) {
  
    var pets = sequelize.define("pets", {
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
    pets.associate = function (models) {
      pets.belongsTo(models.owners, {
        foreignKey: {
          allowNull: false
        }
      });
    //   pets.hasMany(models.petNotes, {
    //     onDelete: "cascade"
    //   });
      pets.hasOne(models.dogs, {
        onDelete: "cascade"
      });
      pets.hasOne(models.cats, {
        onDelete: "cascade"
      });
    };
    return pets;
  
  };