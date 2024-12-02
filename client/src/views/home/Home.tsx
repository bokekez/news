import React, { useState } from 'react';
import { fetchNewsBySearchTerm } from '../../api/newsApi';
import styles from './Home.module.scss'
import { Article } from '../../types/articleModel';
import TopBar from '../../components/TopBar/TopBar';
import Spinner from '../../components/Spinner/Spinner';
import NewsCard from '../../components/NewsCard/NewsCard';

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [news, setNews] = useState<Article[]>([]);

  const handleSearch = async () => {
    try {
      const fetchedNews = await fetchNewsBySearchTerm(searchTerm);
      setNews(fetchedNews);
    } catch (error) {
      console.error('Failed to fetch news:', error);
    }
  };

  const refreshNews = () => window.location.reload();
  const goToLogin = () => (window.location.href = '/login');

  return (
    <div>
      <TopBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearch}
        onRefresh={refreshNews}
        onLogin={goToLogin}
      />
      <div className={styles.newsContent}>
      {news.length > 0 ? (
        news.map((article, index) => (
          <NewsCard
            key={index}
            image={article.urlToImage}
            category={'General'}
            title={article.title}
            author={article.author || 'Unknown'}
            url={article.url}
          />
        ))
      ) : (
        <Spinner />
      )}
    </div>;
    </div>
  );
};

export default Home;