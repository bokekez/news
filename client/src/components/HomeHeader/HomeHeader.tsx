import React from 'react';
import styles from './HomeHeader.module.scss';
import homeHeader from '../../../resources/homeHeader.svg';
import { HomeHeaderProps } from '../../types/componentProps';

const HomeHeader: React.FC<HomeHeaderProps> = ({ setShowHeader }) => {
  return (
    <div className={styles.homeHeaderContainer}>
      <span className={styles.title}>Make News your homepage</span>
      <img src={homeHeader} className={styles.homeHeader} alt="Home Header" />
      <span className={styles.subtitle}>Everyday discover what's trending on the internet!</span>
      <span className={styles.dismiss} onClick={() => setShowHeader(false)}>
        No, thanks
      </span>
    </div>
  );
};

export default HomeHeader;
