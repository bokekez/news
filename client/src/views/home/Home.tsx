import React, { useEffect, useState } from 'react';
import { fetchNewsBySearchTerm } from '../../api/newsApi';
import styles from './Home.module.scss'
import { Article } from '../../types/articleModel';
import TopBar from '../../components/TopBar/TopBar';
import Spinner from '../../components/Spinner/Spinner';
import NewsCard from '../../components/NewsCard/NewsCard';
import Categories from '../../components/Categories/Categories';
import { fetchNewsByCategory } from '../../api/newsApi';
import NewsWidget from '../../components/NewsWidget/NewsWidget';

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [news, setNews] = useState<Article[]>([]);
  const [activeCategory, setActiveCategory] = useState('home');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    console.log(searchTerm)
    try {
      const fetchedNews = await fetchNewsBySearchTerm(searchTerm);
      setNews(fetchedNews);
    } catch (error) {
      console.error('Failed to fetch news:', error);
    }
  };

  const handleCategorySelect = (category: string) => {
    setSearchTerm('')
    setActiveCategory(category);
  }  

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      try {
        const fetchedNews = await fetchNewsByCategory(activeCategory);
        setNews(fetchedNews);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    getNews()
  }, [activeCategory])
  

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
      <Categories
          onCategorySelect={handleCategorySelect}
          activeCategory={activeCategory}
        />
      <div> 
      {news.length > 0 ? (
        news.map((article, index) => (
          <NewsCard
            key={index}
            image={article.urlToImage}
            category={activeCategory}
            title={article.title}
            author={article.author || 'Unknown'}
            url={article.url}
          />
        ))
      ) : (
        <Spinner />
      )}
      </div> 
      <NewsWidget category="general" />
    </div>
    </div>
  );
};

export default Home;