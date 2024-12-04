import React, { useContext, useState } from 'react';
import Button from '../Button/Button';
import styles from './TopBar.module.scss';
import { AuthContext } from '../../context/authContext';
import { TopBarProps } from '../../types/componentProps';

const TopBar: React.FC<TopBarProps> = ({ searchTerm, setSearchTerm, onSearch, onRefresh, onLogin }) => {
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
      <Button label="MyNews" onClick={onRefresh} variant="primary" />
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search news..."
          className={styles.searchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button label="Search" onClick={onSearch} variant="success" />
      </div>
      {authContext?.user?.id ? (
        <div className={styles.userMenu}>
          <button onClick={toggleDropdown} className={styles.userButton}>
            {authContext.user.username}
          </button>
          {showDropdown && (
            <div className={styles.dropdown}>
              <button onClick={handleLogout} className={styles.logoutButton}>
                Logout
              </button>
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
