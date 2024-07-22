'use client';
import React, { useState } from 'react';
import styles from './OrderItem.module.css';
import Counter from '../../ui/Counter/Counter';

interface OrderItemProps {
  title: string;
  price: number;
  onQuantityChange: (title: string, quantity: number) => void;
}

const OrderItem: React.FC<OrderItemProps> = ({
  title,
  price,
  onQuantityChange,
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(title, newQuantity);
  };

  const handleDecrement = () => {
    const newQuantity = quantity > 0 ? quantity - 1 : 0;
    setQuantity(newQuantity);
    onQuantityChange(title, newQuantity);
  };

  return (
    <div className={styles.orderItem}>
      <span className={styles.orderItemTitle}>{title}</span>
      <div className={styles.orderItemPricing}>
        <span className={styles.orderItemPrice}>{price} ლ</span>
        <span className={styles.orderItemQuantity}>
          <Counter
            quantity={quantity}
            onIncrement={() => handleIncrement()}
            onDecrement={() => handleDecrement()}
            hasBorder={false}
          />
        </span>
        <span className={styles.orderItemTotal}>{price * quantity} ლ</span>
      </div>
    </div>
  );
};

export default OrderItem;
