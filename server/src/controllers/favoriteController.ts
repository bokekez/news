import { Request, Response } from 'express';
import {
  saveFavorite,
  findFavoriteById,
  deleteFavorite,
  findFavoritesByUserId,
} from '../services/favoriteService';
import { handleError } from '../utils/errorHandler';

export const saveFavoriteHandler = async (req: Request, res: Response) => {
  try {
    const { userId, article } = req.body;
    const favorite = await saveFavorite(userId, article);
    res.status(201).json({ favorite });
  } catch (error) {
    const errorMessage = handleError(error);
    res.status(500).json({ error: errorMessage });
  }
};

export const findFavoriteHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const favorite = await findFavoriteById(Number(id));
    res.status(200).json({ favorite });
  } catch (error) {
    const errorMessage = handleError(error);
    res.status(500).json({ error: errorMessage });
  }
};

export const deleteFavoriteHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const message = await deleteFavorite(Number(id));
    res.status(200).json({ message });
  } catch (error) {
    const errorMessage = handleError(error);
    res.status(500).json({ error: errorMessage });
  }
};

export const findFavoritesByUserHandler = async (req: Request, res: Response) => {
  try {
    const { userId } = req.query;
    const favorites = await findFavoritesByUserId(Number(userId));
    res.status(200).json({ favorites });
  } catch (error) {
    const errorMessage = handleError(error);
    res.status(500).json({ error: errorMessage });
  }
};
