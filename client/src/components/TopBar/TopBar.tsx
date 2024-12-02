import React from 'react';
import Button from '../Button/Button';
import styles from './TopBar.module.scss';

interface TopBarProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => void;
  onRefresh: () => void;
  onLogin: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ searchTerm, setSearchTerm, onSearch, onRefresh, onLogin }) => {
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
      <Button label="Login" onClick={onLogin} variant="primary" />
    </div>
  );
};

export default TopBar;
