import React, { useContext} from 'react';
import Button from '../Button/Button';
import styles from './TopBar.module.scss';
import { AuthContext } from '../../context/authContext';
import { TopBarProps } from '../../types/componentProps';

const TopBar: React.FC<TopBarProps> = ({ searchTerm, setSearchTerm, onSearch, onRefresh, onLogin }) => {
  const authContext = useContext(AuthContext);
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
      {authContext?.user?.id 
      ? <p>{authContext?.user?.username}</p> :
      <Button label="Login" onClick={onLogin} variant="primary" />}
    </div>
  );
};

export default TopBar;
