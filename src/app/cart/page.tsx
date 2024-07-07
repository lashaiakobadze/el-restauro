'use client';
import React from 'react';
import styles from './page.module.css';
import VoucherOrder from '../components/VoucherOrder/VoucherOrder';
import CartItem from '../components/CartItem/CartItem';

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

        <VoucherOrder />
      </div>
    </div>
  );
};

export default Page;
