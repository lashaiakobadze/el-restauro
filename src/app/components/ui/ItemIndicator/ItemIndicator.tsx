import React from 'react';
import styles from './ItemIndicator.module.css';

type ItemIndicatorProps = {
  isActive: boolean;
};

const ItemIndicator: React.FC<ItemIndicatorProps> = ({ isActive }) => {
  return (
    <div
      className={`${styles.indicator} ${isActive ? styles.active : styles.inactive}`}
    />
  );
};

export default ItemIndicator;
