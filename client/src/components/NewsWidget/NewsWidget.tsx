import React, { useEffect, useState } from 'react';
import styles from './NewsWidget.module.scss';
import Spinner from '../Spinner/Spinner';
import { fetchNewsByCategory } from '../../api/newsApi';
import { Article } from '../../types/articleModel';
import latestIcon from '../../../resources/latest_news.png';
import { NewsWidgetProps } from '../../types/componentProps';
import { showToastifyError } from '../../config/toastifyConfig';

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
      const loadNumber = news.length ? 16 : 6;
      const newNews = await fetchNewsByCategory(category, page, loadNumber);
      if (newNews.length > 0) {
        setNews((prevNews) => [...prevNews, ...newNews]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      showToastifyError(error);
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
      <span className={styles.widgetHeader}>
        <img src={latestIcon} />
        Latest news
      </span>
      {!news.length && <Spinner />}
      {news.map((article, index) => (
        <div key={index} className={styles.newsCard}>
          <p className={styles.newsTime}>
            {new Date(article.publishedAt).toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
              hour12: false,
            })}
          </p>
          <p
            className={styles.newsTitle}
            onClick={() => window.open(article.url, '_blank', 'noopener,noreferrer')}
          >
            {article.title}
          </p>
        </div>
      ))}
      {loading && <Spinner />}
    </div>
  );
};

export default NewsWidget;
