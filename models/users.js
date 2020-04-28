/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    usename: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    psswd: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    isActive: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'users',
    timestamps: false,
    defaultScope: {
      attributes: { exclude: ["createdAt", "updatedAt"] }
    }
  });
};
