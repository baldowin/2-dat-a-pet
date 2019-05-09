module.exports = function (sequelize, DataTypes) {
  
    var dogs = sequelize.define("dogs", {
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
      },
      DHPP_2_months:
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: false
        },
    DHPP_3_months:
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: false
        },
    DHPP_4_months:
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: false
        },
    Rabies_4_months:
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: false
        },
    Bordetella_4_months:
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: false
        },
    DHPP_5_months:
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: false
        },
    DHPP_Booster:
        {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: "00;00"
        },
    Bordetella_Booster:
        {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: "00;00"
        },
    Rabies_Booster:
        {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: "00;00"
        }
    });
    dogs.associate = function (models) {
      dogs.belongsTo(models.pets, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    return dogs;
  
  };