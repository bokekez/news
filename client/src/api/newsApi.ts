import { Article } from '../types/articleModel';

export const fetchNewsBySearchTerm = async (term: string): Promise<Article[]> => {
  const response = await fetch(`http://localhost:8000/news/search?query=${encodeURIComponent(term)}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch news.');
  }

  const data = await response.json();
  return data.articles;
};
