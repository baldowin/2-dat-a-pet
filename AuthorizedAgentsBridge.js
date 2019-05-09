// module.exports = function (sequelize) {
  
//     var authorizedAgentsBridge = sequelize.define("authorizedAgentsBridge", {
//     });
//     authorizedAgentsBridge.associate= function(models){
//     models.owners.belongsToMany(models.pets, {through: 'agents'});
//     models.pets.belongsToMany(models.owners, {through: 'agents'});
//     };
//     return authorizedAgentsBridge;
  
//   };