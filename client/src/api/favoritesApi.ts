import { Article } from '../types/articleModel';
const BASE_URL='http://localhost:8000/favorites/'

export const fetchFavorites = async (userId: number): Promise<Article> => {
  try {
    const response = await fetch(`${BASE_URL}?userId=${userId}`);
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to fetch favorites');
    }
    const data = await response.json();
    data.favorites.forEach(el => {
      if (el.article) {
        el.article.id = el.id; 
      }
    });   
    console.log('test', data)
    return data.favorites.map(el => el.article);
  } catch (error: any) {
    throw new Error(error.message || 'An unknown error occurred');
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
  } catch (error: any) {
    throw new Error(error.message || 'An unknown error occurred');
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
  } catch (error: any) {
    throw new Error(error.message || 'An unknown error occurred');
  }
};