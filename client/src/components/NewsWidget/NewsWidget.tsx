import React, { useEffect, useState } from 'react';
import styles from './NewsWidget.module.scss';
import Spinner from '../Spinner/Spinner';
import { fetchNewsByCategory } from '../../api/newsApi';
import { Article } from '../../types/articleModel';

interface NewsWidgetProps {
  category?: string;
}

const NewsWidget: React.FC<NewsWidgetProps> = ({ category = '' }) => {
  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    loadNews();
  }, [category]);

  const loadNews = async () => {
    if (!hasMore) return;

    setLoading(true);
    try {
      const newNews = await fetchNewsByCategory(category, page, 6);
      if (newNews.length > 0) {
        setNews((prevNews) => [...prevNews, ...newNews]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Failed to load news:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (scrollHeight - scrollTop === clientHeight && !loading) {
      loadNews();
    }
  };

  return (
    <div className={styles.newsWidget} onScroll={handleScroll}>
      {news.map((article, index) => (
        <div key={index} className={styles.newsCard}>
          <p className={styles.newsTime}>{article.publishedAt}</p>
          <p className={styles.newsTitle}>{article.title.slice(0, 65)}...</p>
        </div>
      ))}
      {loading && <Spinner />}
    </div>
  );
};

export default NewsWidget;
