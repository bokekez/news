import React from 'react';
import styles from './Categories.module.scss';

interface CategorySidebarProps {
  onCategorySelect: (category: string) => void;
  activeCategory: string;
}

const categories = [
  'Home',
  'General',
  'Business',
  'Health',
  'Science',
  'Sport',
  'Technology',
  'Favorites',
];

const CategorySidebar: React.FC<CategorySidebarProps> = ({
  onCategorySelect,
  activeCategory,
}) => {
  return (
    <div className={styles.sidebar}>
      {categories.map((category) => (
        <button
          key={category}
          className={`${styles.categoryButton} ${
            activeCategory === category ? styles.active : ''
          }`}
          onClick={() => onCategorySelect(category.toLowerCase())}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategorySidebar;
