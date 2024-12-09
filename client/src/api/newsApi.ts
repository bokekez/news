import { Article } from '../types/articleModel';
const BASE_URL = 'http://localhost:8000/news/';

export const fetchNewsBySearchTerm = async (term: string): Promise<Article[]> => {
  // const response = await fetch(`${BASE_URL}search?query=${encodeURIComponent(term)}`, {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });
  // if (!response.ok) {
  //   const data = await response.json();
  //   throw new Error(data.error);
  // }
  // const data = await response.json();
  // return data.articles;
  // return []
};

export const fetchNewsByCategory = async (
  category: string | null,
  page: number = 1,
  pageSize: number = 16
): Promise<Article[]> => {
  // const categorySearch = category === 'Home' || '' ? '' : category;
  // const response = await fetch(
  //   `${BASE_URL}latest/?category=${categorySearch}&page=${page}&pageSize=${pageSize}`
  // );
  // if (!response.ok) {
  //   const data = await response.json();
  //   throw new Error(data.error);
  // }
  // const data = await response.json();
  // return data.articles;
  // return []
};
