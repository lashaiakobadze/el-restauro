'use client';
import React from 'react';
import styles from './page.module.css';
import CartItem from '../../components/CartItem/CartItem';
import CartPayment from '../../components/CartPayment/CartPayment';

const Page = () => {
  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartHeader}>
        <h2>ჩემი კალათა</h2>
        <div className={styles.cartCount}>4 Items</div>
      </div>

      <div className={styles.cartLayout}>
        <div className={styles.cartList}>
          <CartItem />
          <CartItem />
        </div>

        <CartPayment />
      </div>
    </div>
  );
};

export default Page;
