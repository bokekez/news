import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  label: string; 
  onClick: () => void; 
  variant?: 'primary' | 'success'; 
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  const buttonClass =
    variant === 'success'
      ? `${styles.button} ${styles.buttonSuccess}`
      : `${styles.button} ${styles.buttonPrimary}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
