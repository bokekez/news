'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate(models) {
      Favorite.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Favorite.init(
    {
      userId: DataTypes.INTEGER,
      foreignId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Favorite',
    }
  );
  return Favorite;
};
