'use strict';
module.exports = (sequelize, DataTypes) => {
  const File = sequelize.define('File', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    id_user: DataTypes.INTEGER,
    path: DataTypes.STRING,
    size:DataTypes.DOUBLE
  }, {});
  File.associate = function(models) {

  };
  return File;
};