'use client';
import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  text: string;
  width?: string;
  color?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  width = '100%',
  color = '#23447C',
  onClick,
}) => {
  return (
    <button
      className={styles.button}
      style={{ width, backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
