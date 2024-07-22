'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './VoucherOrder.module.css';
import { PaymentTypeEnum } from '@/app/common/enums';
import PaymentItem from '../PaymentItem/PaymentItem';
import Button from '../ui/Button/Button';
import Counter from '../ui/Counter/Counter';
import VoucherOrderDetails from '../VoucherOrderDetails/VoucherOrderDetails';

interface VoucherOrderProps {}

const VoucherOrder: React.FC<VoucherOrderProps> = () => {
  const [paymentType, setPaymentType] = useState(PaymentTypeEnum.CODE);
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  const handleDecrement = () => {
    const newQuantity = quantity > 0 ? quantity - 1 : 0;
    setQuantity(newQuantity);
  };

  const handleClick = () => {
    console.log('Clicked!');
  };

  return (
    <div className={styles.container}>
      <VoucherOrderDetails />

      <div className={styles.payment}>
        <PaymentItem
          isActive={paymentType === PaymentTypeEnum.CODE}
          paymentType={PaymentTypeEnum.CODE}
          paymentItemTitle="ჯავშნის კოდის ღირებულების გადახდა"
          paymentItemValue={5.0}
          color="#FF6347"
          onClick={() => setPaymentType(PaymentTypeEnum.CODE)}
        />
        <PaymentItem
          paymentType={PaymentTypeEnum.CASH}
          isActive={paymentType === PaymentTypeEnum.CASH}
          paymentItemTitle="სრული ღირებულების გადახდა"
          paymentItemValue={150}
          color="#FF6347"
          onClick={() => setPaymentType(PaymentTypeEnum.CASH)}
        />
      </div>

      <div className={styles.ordering}>
        <Counter
          className={styles.newCounterStyle}
          width={'135px'}
          quantity={quantity}
          onIncrement={() => handleIncrement()}
          onDecrement={() => handleDecrement()}
        />
        <Button text={'ყიდვა'} color="#23447C" onClick={handleClick} />
      </div>

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

export default VoucherOrder;
