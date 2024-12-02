import { Request, Response } from 'express';
import { fetchLatestNews, searchNews } from '../services/newsService';
import { handleError } from '../utils/errorHandler';
import { MESSAGES } from '../constants/Messages';

export const getLatestNewsHandler = async (_req: Request, res: Response): Promise<void> => {
  try {
    const articles = await fetchLatestNews();
    res.status(200).json({ articles });
  } catch (error) {
    const errorMessage = handleError(error);  
    res.status(500).json({ error: errorMessage });
  }
};

export const searchNewsHandler = async (req: Request, res: Response): Promise<void> => {
  const { query } = req.query;

  if (!query || typeof query !== 'string') {
    res.status(400).json({ error: MESSAGES.GENERAL.MISSING_PARAMETERS });
    return;
  }

  try {
    const articles = await searchNews(query);
    res.status(200).json({ articles });
  } catch (error) {
    throw new Error(`${MESSAGES.GENERAL.FAILED_TO_FETCH} ${handleError(error)}`);
  }
};
