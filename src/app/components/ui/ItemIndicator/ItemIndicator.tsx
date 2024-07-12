import React, { useState } from 'react';
import styles from './ItemIndicator.module.css';

type ItemIndicatorProps = {
  isActive: boolean;
};

const ItemIndicator: React.FC<ItemIndicatorProps> = ({ isActive }) => {
  const [active, setActive] = useState(false);

  return (
    <div
      onClick={() => setActive(!active)}
      className={`${styles.indicator} ${isActive || active ? styles.active : styles.inactive}`}
    />
  );
};

export default ItemIndicator;
