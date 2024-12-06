import React, { useContext, useState, useEffect} from 'react';
import styles from './Categories.module.scss';
import { AuthContext } from '../../context/authContext';
import Home from '../../../resources/categories/home.png'
import General from '../../../resources/categories/news.png'
import Business from '../../../resources/categories/business.png'
import Health from '../../../resources/categories/health.png'
import Science from '../../../resources/categories/science.png'
import Sports from '../../../resources/categories/sports.png'
import Technology from '../../../resources/categories/tech.png'
import Favorites from '../../../resources/favorite.png'

interface CategorySidebarProps {
  onCategorySelect: (category: string) => void;
  activeCategory: string;
}

const CategorySidebar: React.FC<CategorySidebarProps> = ({
  onCategorySelect,
  activeCategory,
}) => {
  const [categories, setCategories] = useState<object[]>([
    {name: 'Home', img: Home},
    {name: 'General', img: General},
    {name: 'Business', img: Business},
    {name: 'Health', img: Health},
    {name: 'Science', img: Science},
    {name: 'Sports', img: Sports},
    {name: 'Technology', img: Technology},
  ])
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (authContext?.user?.id && !categories.some(cat => cat.name === 'Favorites')) {
      setCategories((prevCategories) => [...prevCategories, {name: 'Favorites', img:Favorites}]);
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
          className={`${styles.categoryButton} ${
            activeCategory === category.name ? styles.active : ''
          }`}
          onClick={() => onCategorySelect(category.name.toLowerCase())}
        >
          <img src={category.img}/>
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategorySidebar;
