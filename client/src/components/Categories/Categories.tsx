import React, { useContext, useState, useEffect} from 'react';
import styles from './Categories.module.scss';
import { AuthContext } from '../../context/authContext';

interface CategorySidebarProps {
  onCategorySelect: (category: string) => void;
  activeCategory: string;
}

const CategorySidebar: React.FC<CategorySidebarProps> = ({
  onCategorySelect,
  activeCategory,
}) => {
  const [categories, setCategories] = useState<string[]>([
    'Home',
    'General',
    'Business',
    'Health',
    'Science',
    'Sport',
    'Technology'
  ])
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (authContext?.user?.id && !categories.includes('Favorites')) {
      setCategories((prevCategories) => [...prevCategories, 'Favorites']);
    }
    if (!authContext?.user?.id && categories.includes('Favorites')) {
      setCategories(categories.filter(category => category !== 'Favorites'));
    }
  }, [authContext?.user?.id, categories]);

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
