import { Model, DataTypes, ModelStatic } from 'sequelize';
import { FavoriteAttributes } from '../../types/favoriteModel';
import sequelize from '../connection';

export interface Models {
  User: ModelStatic<Model>;
}

class Favorite extends Model<FavoriteAttributes> implements FavoriteAttributes {
  public id!: number;
  public userId!: number;
  public article!: object;

  static associate(models: Models) {
    Favorite.belongsTo(models.User, { foreignKey: 'userId' });
  }
}

Favorite.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    article: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Favorite',
    tableName: 'Favorites',
    timestamps: true,
  }
);

export default Favorite;
