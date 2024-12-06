import React, { useContext, useState, useEffect} from 'react';
import styles from './Categories.module.scss';
import { AuthContext } from '../../context/authContext';
import Home2 from '../../../resources/categories/home2.svg';
import General from '../../../resources/categories/news.png'
import Business from '../../../resources/categories/business.png'
import Health from '../../../resources/categories/health.png'
import Science from '../../../resources/categories/science.png'
import Sports from '../../../resources/categories/sports.png'
import Technology from '../../../resources/categories/tech.png'
import Favorites from '../../../resources/favorite.png'

import categoryIcons from './CategoryIcons'

interface CategorySidebarProps {
  onCategorySelect: (category: string) => void;
  activeCategory: string;
}

const CategorySidebar: React.FC<CategorySidebarProps> = ({
  onCategorySelect,
  activeCategory,
}) => {
  const [categories, setCategories] = useState<object[]>([
    {name: 'Home', img: categoryIcons.home},
    {name: 'General', img: categoryIcons.general},
    {name: 'Business', img: categoryIcons.business},
    {name: 'Health', img: categoryIcons.health},
    {name: 'Science', img: categoryIcons.science},
    {name: 'Sports', img: categoryIcons.sports},
    {name: 'Technology', img: categoryIcons.technology},
  ])
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (authContext?.user?.id && !categories.some(cat => cat.name === 'Favorites')) {
      setCategories((prevCategories) => [...prevCategories, {name: 'Favorites', img: categoryIcons.favorites}]);
    }
    if (!authContext?.user?.id && categories.some(cat => cat.name === 'Favorites')) {
      setCategories(categories.filter(category => category.name !== Favorites));
    }
  }, [authContext?.user?.id, categories]);

  console.log(categories)

  return (
    <div className={styles.sidebar}>
      {categories.map((category) => (
        <button
          key={category.name}
          className={`${styles.categoryButton} ${activeCategory === category.name ? styles.active : ''}`}
          onClick={() => onCategorySelect(category.name)}
        >
          <div
            className={`catImg ${activeCategory === category.name ? styles.activeIcon : ''}`}
          >
            {category.img}
          </div>
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategorySidebar;
