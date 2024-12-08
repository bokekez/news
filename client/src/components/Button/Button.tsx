import React from 'react';
import styles from './Button.module.scss';
import { ButtonProps } from '../../types/componentProps';

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  const buttonClass = {
    primary: `${styles.button} ${styles.buttonSuccess}`,
    user: `${styles.button} ${styles.buttonUser}`,
    logout: `${styles.button} ${styles.logout}`,
    smallActive: `${styles.smallActive}`,
    smallInactive: `${styles.smallInactive}`,
  };

  return (
    <button className={buttonClass[variant]} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
