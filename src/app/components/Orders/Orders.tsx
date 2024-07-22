'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { PaymentTypeEnum } from '@/app/common/enums';
import styles from './Orders.module.css';
import OrderItem from '../OrderItem/OrderItem';
import PaymentItem from '../PaymentItem/PaymentItem';
import Button from '../ui/Button/Button';

interface OrdersProps {}

const Orders: React.FC<OrdersProps> = () => {
  const [paymentType, setPaymentType] = useState(PaymentTypeEnum.CODE);
  const [orderQuantities, setOrderQuantities] = useState<{
    [key: string]: number;
  }>({});

  const handleQuantityChange = (title: string, quantity: number) => {
    setOrderQuantities((prev) => {
      const newOrderQuantities = { ...prev, [title]: quantity };
      console.log('newOrderQuantities', newOrderQuantities), orderQuantities;
      return newOrderQuantities;
    });
  };

  const handleClick = () => {
    console.log('Clicked!');
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.headerItem}>შეკვეთა</span>
        <span className={styles.headerItemSecond}>შეკვეთის შეცვლა</span>
      </div>
      <div className={styles.orderItems}>
        <OrderItem
          title="ავაოკადოს სალათა"
          price={20}
          onQuantityChange={handleQuantityChange}
        />
        <OrderItem
          title="ავაოკადოს სალათა"
          price={20}
          onQuantityChange={handleQuantityChange}
        />
        <OrderItem
          title="ავაოკადოს სალათა"
          price={20}
          onQuantityChange={handleQuantityChange}
        />
        <OrderItem
          title="ავაოკადოს სალათა"
          price={20}
          onQuantityChange={handleQuantityChange}
        />
        <OrderItem
          title="ავაოკადოს სალათა"
          price={20}
          onQuantityChange={handleQuantityChange}
        />
        <OrderItem
          title="ავაოკადოს სალათა"
          price={20}
          onQuantityChange={handleQuantityChange}
        />
        <OrderItem
          title="ავაოკადოს სალათა"
          price={20}
          onQuantityChange={handleQuantityChange}
        />
        <OrderItem
          title="ავაოკადოს სალათა"
          price={20}
          onQuantityChange={handleQuantityChange}
        />
        <OrderItem
          title="ავაოკადოს სალათა"
          price={20}
          onQuantityChange={handleQuantityChange}
        />
        <OrderItem
          title="ავაოკადოს სალათა"
          price={20}
          onQuantityChange={handleQuantityChange}
        />
      </div>
      <div className={styles.payment}>
        <PaymentItem
          isActive={paymentType === PaymentTypeEnum.CODE}
          paymentType={PaymentTypeEnum.CODE}
          paymentItemTitle="ჯავშნის კოდის ღირებულების გადახდა"
          paymentItemValue={5.0}
          onClick={() => setPaymentType(PaymentTypeEnum.CODE)}
        />
        <PaymentItem
          paymentType={PaymentTypeEnum.CASH}
          isActive={paymentType === PaymentTypeEnum.CASH}
          paymentItemTitle="სრული ღირებულების გადახდა"
          paymentItemValue={150}
          onClick={() => setPaymentType(PaymentTypeEnum.CASH)}
        />
      </div>

      <Button text={'ყიდვა'} color="#23447C" onClick={handleClick} />

      <div className={styles.footer}>
        <Image
          src="/images/payments/visa-logo.svg"
          alt="visa-logo"
          width={35}
          height={24}
        />
        <Image
          src="/images/payments/Mastercard.svg"
          alt="Mastercard"
          width={35}
          height={24}
        />
        <Image
          src="/images/payments/PayPal.svg"
          alt="PayPal"
          width={35}
          height={24}
        />
        <Image
          src="/images/payments/ApplePay.svg"
          alt="ApplePay"
          width={35}
          height={24}
        />
        <Image
          src="/images/payments/BitPay.svg"
          alt="BitPay"
          width={35}
          height={24}
        />
        <Image
          src="/images/payments/Amex.svg"
          alt="Amex"
          width={35}
          height={24}
        />
      </div>
    </div>
  );
};

export default Orders;
