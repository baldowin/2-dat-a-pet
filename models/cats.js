module.exports = function (sequelize, DataTypes) {
  
    var cats = sequelize.define("cats", {
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
      FVRCP_2_months:
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: false
        },
    FVRCP_3_months:
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: false
        },
    FELV_3_months:
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: false
        },
    FVRCP_4_months:
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: false
        },
    FELV_4_months:
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: false
        },
    RABIES_4_months:
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: false
        },
    FVRCP_Booster:
        {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: "00;00"
        },
    FELV_Booster:
        {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: "00;00"
        }
    });
    cats.associate = function (models) {
      cats.belongsTo(models.pets, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    return cats;
  
  };