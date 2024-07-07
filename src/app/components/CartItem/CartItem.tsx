'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import styles from './CartItem.module.css';
import Cross from '../ui/Cross/Cross';
import Counter from '../ui/Counter/Counter';
import Favorite from '../ui/Favorite/Favorite';
import CompareAction from '../ui/CompareAction/CompareAction';

interface CartItemProps {}

const CartItem: React.FC<CartItemProps> = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemImage}>
        <div className={styles.cartItemActions}>
          <Favorite />
          <CompareAction />
        </div>
        <Image
          className={styles.cartItemImg}
          width={200}
          height={128}
          src={'/images/cart-item.png'}
          alt="product"
        />
      </div>
      <div className={styles.cartItemInfo}>
        <div className={styles.cartItemDetails}>
          <div className={styles.cartItemName}>კაფე ლოლიტა</div>
          <div className={styles.cartItemQuantity}>
            <span>რაოდენობა</span>
            {/* ToDo: switch it with custom design as in figma */}
            <Counter
              withInput={true}
              quantity={quantity}
              hasBorder={false}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              onQuantityChange={(newQuantity) => setQuantity(newQuantity)}
            />
          </div>
          <span className={styles.cartItemPrice}>
            60 <Image src={'/icons/GEL.svg'} width={10} height={10} alt="GEL" />
          </span>

          <Cross />
        </div>
        <span className={styles.cartItemAddress}>ვაჟა-ფშაველას 32</span>
        <p className={styles.cartItemDescription}>
          შეთავაზება 6 სტუმარზე! სასიამოვნო გარემო, უგემრიელესი კერძები და
          ცოცხალი მუსიკა
        </p>
      </div>
    </div>
  );
};

export default CartItem;
