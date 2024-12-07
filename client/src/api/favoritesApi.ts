import { Article, ArticleResposne } from '../types/articleModel';
import { MESSAGES } from '../constants/Messages';
const BASE_URL = 'http://localhost:8000/favorites/';

export const fetchFavorites = async (userId: string): Promise<Article> => {
  try {
    const response = await fetch(`${BASE_URL}?userId=${userId}`);
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to fetch favorites');
    }
    const data = await response.json();
    data.favorites.forEach((fav: ArticleResposne) => {
      if (fav.article) {
        fav.article.id = fav.id;
      }
    });
    return data.favorites.map((fav: ArticleResposne) => fav.article);
  } catch (error: unknown) {
    throw new Error(error instanceof Error ? error.message : MESSAGES.ERROR.UNKNOWN);
  }
};

export const saveFavorite = async (userId: number, article: Article): Promise<Article[]> => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, article }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to save favorite');
    }

    const data = await response.json();
    return data.favorite;
  } catch (error: unknown) {
    throw new Error(error instanceof Error ? error.message : MESSAGES.ERROR.UNKNOWN);
  }
};

export const deleteFavorite = async (favoriteId: number): Promise<string> => {
  try {
    const response = await fetch(`${BASE_URL}${favoriteId}`, { method: 'DELETE' });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to delete favorite');
    }
    const data = await response.json();
    return data.message;
  } catch (error: unknown) {
    throw new Error(error instanceof Error ? error.message : MESSAGES.ERROR.UNKNOWN);
  }
};
