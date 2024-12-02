import { Request, Response } from 'express';
import { fetchLatestNews } from '../services/newsService';
import { handleError } from '../utils/errorHandler';

export const getLatestNewsHandler = async (_req: Request, res: Response): Promise<void> => {
  try {
    const articles = await fetchLatestNews();
    res.status(200).json({ articles });
  } catch (error) {
    const errorMessage = handleError(error);  
    res.status(500).json({ error: errorMessage });
  }
};
