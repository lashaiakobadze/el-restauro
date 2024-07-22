import React, { useState } from 'react';
import styles from './MenuItem.module.css';
import Counter from '../../ui/Counter/Counter';

type MenuItemProps = {
  imageSrc: string;
  title: string;
  price: number;
};

const MenuItem: React.FC<MenuItemProps> = ({ imageSrc, title, price }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div className={styles.card}>
      <img src={imageSrc} alt={title} className={styles.image} />

      <div className={styles.cardContainer}>
        <div className={styles.details}>
          <div className={styles.title}>{title}</div>
          <div className={styles.price}>{price} ლ</div>
        </div>
        <Counter
          quantity={quantity}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      </div>
    </div>
  );
};

export default MenuItem;
