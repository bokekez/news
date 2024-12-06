import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  label?: string; 
  onClick: () => void; 
  variant?: string; 
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  const buttonClass = {
    primary: `${styles.button} ${styles.buttonSuccess}`,
    user: `${styles.button} ${styles.buttonUser}`,
    logout: `${styles.button} ${styles.logout}`
  }
    // variant === 'primary'
    //   ? `${styles.button} ${styles.buttonSuccess}`
    //   : `${styles.button} ${styles.buttonUser}`;

  return (
    <button className={buttonClass[variant]} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
