import React, { useContext, useState } from 'react';
import Button from '../Button/Button';
import styles from './TopBar.module.scss';
import { AuthContext } from '../../context/authContext';
import { TopBarProps } from '../../types/componentProps';
import searchIcon from '../../../resources/search.png';
import menuIcon from '../../../resources/menuIcon.svg';
import menuClose from '../../../resources/menuClose.svg';

const TopBar: React.FC<TopBarProps> = ({
  searchTerm,
  setSearchTerm,
  onSearch,
  onLogin,
  isSmallScreen,
  setShowSmallCat,
  showSmallCat,
}) => {
  const authContext = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);

  console.log(showSmallCat);

  const handleLogout = () => {
    authContext?.logout();
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <div className={styles.topBar}>
      <span className={styles.headline}>
        <span className={styles.my}>My</span>
        <span className={styles.news}>News</span>
      </span>
      <div className={styles.searchContainer}>
        <img src={searchIcon} />
        <input
          type="text"
          placeholder="Search news"
          className={styles.searchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              onSearch();
            }
          }}
        />
        {!isSmallScreen && <Button label="Search" onClick={onSearch} />}
      </div>
      {authContext?.user?.id ? (
        <div className={styles.userMenu}>
          <Button label={authContext.user.username || ''} onClick={toggleDropdown} variant="user" />
          {showDropdown && (
            <div className={styles.dropdown}>
              <Button label="Logout" onClick={handleLogout} variant="logout" />
            </div>
          )}
        </div>
      ) : (
        <Button label="Login" onClick={onLogin} variant="primary" />
      )}
      {!showSmallCat && (
        <img
          src={menuIcon}
          className={styles.smallCategories}
          onClick={() => setShowSmallCat(true)}
        />
      )}
      {showSmallCat && (
        <img
          src={menuClose}
          className={styles.smallCategories}
          onClick={() => setShowSmallCat(false)}
        />
      )}
    </div>
  );
};

export default TopBar;
