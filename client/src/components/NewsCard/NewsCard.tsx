import React, { useContext } from 'react';
import styles from './NewsCard.module.scss';
import { saveFavorite, deleteFavorite } from '../../api/favoritesApi';
import { AuthContext } from '../../context/authContext';
import { showToastifyError, showToastifySuccess } from '../../config/toastifyConfig';
import { NewsCardProps, Article } from '../../types/articleModel';
import saveImage from '../../../resources/add_favorite.png';
import favoritImage from '../../../resources/delete_favorite.png';
import { MESSAGES } from '../../constants/Messages';

const NewsCard: React.FC<NewsCardProps> = ({ article, setLoading, category }) => {
  const { urlToImage, title, author, url } = article;
  const authContext = useContext(AuthContext);

  const handleSaveFavorite = async () => {
    if (!authContext?.user) return;

    try {
      const userId = authContext.user.id;
      await saveFavorite(Number(userId), article as Article);
      showToastifySuccess('Article saved to favorites!');
    } catch (error: unknown) {
      showToastifyError(error instanceof Error ? error.message : MESSAGES.ERROR.UNKNOWN);
    }
  };

  const handleRemoveFavorite = async () => {
    await deleteFavorite(Number(article?.id));
    showToastifySuccess('Article removed from favorites!');
    setLoading(true);
  };

  console.log(category)

  return (
    <div className={styles.card}>
      <img src={urlToImage} alt={title} className={styles.image} />
      <div className={styles.content}>
        {authContext?.user && !article?.id && (
          <img src={saveImage} onClick={handleSaveFavorite} className={styles.favoriteImage} />
        )}
        {authContext?.user && article?.id && (
          <img src={favoritImage} onClick={handleRemoveFavorite} className={styles.favoriteImage} />
        )}
        <span className={styles.category}>{category}</span>
        <h3
          className={styles.title}
          onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
        >
          {title}
        </h3>
        <p className={styles.author}>{author}</p>
      </div>
    </div>
  );
};

export default NewsCard;
