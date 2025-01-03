// eslint-disable-next-line @typescript-eslint/no-require-imports
const NewsAPI = require('newsapi');
import { Article } from '../types/articleModel';
import { handleError } from '../utils/errorHandler';
import { MESSAGES } from '../constants/Messages';

const newsapi = new NewsAPI(process.env.NEWS_API_KEY || '');

export const fetchLatestNews = async (
  category: string = '',
  page: number = 1,
  pageSize: number = 16
): Promise<Article> => {
  try {
    const response = await newsapi.v2.topHeadlines({
      category: category,
      language: 'en',
      pageSize,
      page,
    });
    return response.articles;
  } catch (error) {
    throw new Error(`${MESSAGES.GENERAL.FAILED_TO_FETCH} ${handleError(error)}`);
  }
};

export const searchNews = async (query: string): Promise<Article[]> => {
  try {
    const response = await newsapi.v2.everything({
      q: query,
      language: 'en',
      pageSize: 16,
    });
    return response.articles;
  } catch (error) {
    throw new Error(`${MESSAGES.GENERAL.FAILED_TO_FETCH} ${handleError(error)}`);
  }
};
