import Favorite from '../database/models/favorite';
import { FavoriteAttributes } from '../types/favoriteModel';
import { MESSAGES } from '../constants/Messages';

export const saveFavorite = async ( userId: number, article: object): Promise<FavoriteAttributes> => {
  const existingFavorite = await Favorite.findOne({
    where: {
      userId,
      article, 
    },
  });

  if (existingFavorite) {
    throw new Error(MESSAGES.FAVORITE.ALREADY_EXISTS);
  }

  const favorite = await Favorite.create({ userId, article });
  return favorite.toJSON();
};

export const findFavoriteById = async (id: number): Promise<FavoriteAttributes | null> => {
  const favorite = await Favorite.findByPk(id);
  if (!favorite) {
    throw new Error(MESSAGES.FAVORITE.NOT_FOUND);
  }
  return favorite.toJSON();
};

export const deleteFavorite = async (id: number): Promise<string> => {
  const favorite = await Favorite.findByPk(id);
  if (!favorite) {
    throw new Error(MESSAGES.FAVORITE.NOT_FOUND);
  }
  await favorite.destroy();
  return MESSAGES.OPERATIONS.DELETE;
};

export const findFavoritesByUserId = async (userId: number): Promise<FavoriteAttributes[]> => {
  const favorites = await Favorite.findAll({ where: { userId } });
  return favorites.map(favorite => favorite.toJSON());
};
