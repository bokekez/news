import { Article } from '../types/articleModel';
const BASE_URL='http://localhost:8000/news/'

export const fetchNewsBySearchTerm = async (term: string): Promise<Article[]> => {
  const response = await fetch(`${BASE_URL}search?query=${encodeURIComponent(term)}`, {
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

export const fetchNewsByCategory = async (category: string | null, page: number = 1, pageSize: number = 2): Promise<Article[]> => {
  const categorySearch = category === 'home' || '' ? '' : category
  const response = await fetch(`${BASE_URL}latest/?category=${categorySearch}&page=${page}&pageSize=${pageSize}`);
  if (!response.ok) {
    throw new Error('Failed to fetch news');
  }
  const data = await response.json();
  return data.articles;
};
