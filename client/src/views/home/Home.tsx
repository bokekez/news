import React, { useEffect, useState, useContext } from 'react';
import { fetchNewsBySearchTerm } from '../../api/newsApi';
import { fetchFavorites } from '../../api/favoritesApi';
import styles from './Home.module.scss';
import { ArticleCards } from '../../types/articleModel';
import TopBar from '../../components/TopBar/TopBar';
import Spinner from '../../components/Spinner/Spinner';
import NewsCard from '../../components/NewsCard/NewsCard';
import Categories from '../../components/Categories/Categories';
import { fetchNewsByCategory } from '../../api/newsApi';
import NewsWidget from '../../components/NewsWidget/NewsWidget';
import { showToastifyError } from '../../config/toastifyConfig';
import LoginDialog from '../../components/LoginDialog/LoginDialog';
import { AuthContext } from '../../context/authContext';

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [news, setNews] = useState<ArticleCards[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('Home');
  const [loading, setLoading] = useState<boolean>(true);
  const [loginDialog, setLoginDialog] = useState<boolean>(false);
  const authContext = useContext(AuthContext);

  const handleSearch = async () => {
    setLoading(true);
  };

  const handleCategorySelect = (category: string) => {
    setSearchTerm('');
    setActiveCategory(category);
  };

  const fetchOrSearchNews = () => {
    if (searchTerm) return fetchNewsBySearchTerm(searchTerm);
    if (activeCategory !== 'Favorites') return fetchNewsByCategory(activeCategory);
    if (authContext?.user?.id) return fetchFavorites(authContext.user.id);
  };

  useEffect(() => {
    const getNews = async () => {
      try {
        const fetchedNews = await fetchOrSearchNews();
        setNews((fetchedNews as ArticleCards[]) || []);
      } catch (error) {
        showToastifyError(String(error));
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, [activeCategory, loading]);

  const goToLogin = () => setLoginDialog(true);

  if (news.length === 16) news.splice(2, 0, { widget: true });

  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeHeader}> </div>
      <TopBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearch}
        onLogin={goToLogin}
      />
      <div className={styles.dividerBar} />
      <div className={styles.newsContent}>
        <Categories onCategorySelect={handleCategorySelect} activeCategory={activeCategory} />
        <div className={styles.cardsAndWidgetContainer}>
          <span className={styles.newsHeader}>News</span>
          <div className={styles.cardsContainer}>
            {news.length > 0 ? (
              news.map((item, index) =>
                item.widget ? (
                  <NewsWidget key={`widget-${index}`} category="general" />
                ) : (
                  <NewsCard key={index} article={item} setLoading={setLoading} category={activeCategory}/>
                )
              )
            ) : (
              <Spinner />
            )}
          </div>
        </div>
      </div>
      {loginDialog && <LoginDialog handleClose={() => setLoginDialog(false)} />}
    </div>
  );
};

export default Home;
