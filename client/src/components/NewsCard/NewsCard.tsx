import React from 'react';
import styles from './NewsCard.module.scss';

interface NewsCardProps {
  image: string;
  category: string;
  title: string;
  author: string;
  url: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ image, category, title, author, url }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <span className={styles.category}>{category}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.author}>{author}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className={styles.link}>
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
