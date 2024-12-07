import React, { useContext, useState } from 'react';
import Button from '../Button/Button';
import styles from './TopBar.module.scss';
import { AuthContext } from '../../context/authContext';
import { TopBarProps } from '../../types/componentProps';
import searchIcon from '../../../resources/search.png';

const TopBar: React.FC<TopBarProps> = ({ searchTerm, setSearchTerm, onSearch, onLogin }) => {
  const authContext = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);

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
        />
        <Button label="Search" onClick={onSearch} />
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
    </div>
  );
};

export default TopBar;
