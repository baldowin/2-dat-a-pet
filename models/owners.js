module.exports = function (sequelize, DataTypes) {
    var Owner = sequelize.define("Owner", {
      ownerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      ownerName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phone: {
        type: DataTypes.BIGINT
      },
      authorizedOwners:
      {
        type: DataTypes.STRING,
      }
    });
    Owner.associate = function (models) {
      Owner.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    Owner.associate = function (models) {
      Owner.hasMany(models.Pet, {
        as: "Pet",
        onDelete: "cascade"
      });
    };
    return Owner;
  };