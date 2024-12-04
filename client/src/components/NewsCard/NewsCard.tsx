import React, { useContext } from 'react';
import styles from './NewsCard.module.scss';
import { saveFavorite, deleteFavorite } from '../../api/favoritesApi';
import { AuthContext } from '../../context/authContext';
import { showToastifyError, showToastifySuccess } from '../../config/toastifyConfig';
import { Article } from '../../types/articleModel';

const NewsCard: React.FC<Article> = ({ article, setLoading }) => {
  console.log('f', article)
  const { urlToImage, activeCategory, title, author, url} = article
  console.log(urlToImage, activeCategory, title, author, url)
  const authContext = useContext(AuthContext);

  const handleSaveFavorite = async () => {
    if (!authContext?.user) return;

    try {
      const userId = authContext.user.id;
      await saveFavorite(userId, article);
      showToastifySuccess('Article saved to favorites!');
    } catch (error) {
      showToastifyError(error.message || 'Failed to save the article');
    }
  };

  const handleRemoveFavorite = async () => {
    await deleteFavorite(article?.id)
    showToastifySuccess('Article removed from favorites!');
    setLoading(true)
  }

  return (
    <div className={styles.card}>
      <img src={urlToImage} alt={title} className={styles.image} />
      <div className={styles.content}>
        {authContext?.user && (
          <button onClick={handleSaveFavorite} className={styles.favoriteButton}>
            ❤️
          </button>
        )}
        {authContext?.user && article?.id &&(
          <button onClick={handleRemoveFavorite}>
            ❤️
          </button>
        )}
        <span className={styles.category}>{activeCategory}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.author}>{author }</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className={styles.link}>
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
