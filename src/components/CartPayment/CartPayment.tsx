'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { PaymentTypeEnum } from '@/common/enums';
import styles from './CartPayment.module.css';
import PaymentItem from '../PaymentItem/PaymentItem';
import Link from 'next/link';
import Button from '../../ui/Button/Button';

interface CartPaymentProps {}

const CartPayment: React.FC<CartPaymentProps> = () => {
  const [paymentType, setPaymentType] = useState(PaymentTypeEnum.CODE);

  return (
    <div className={styles.container}>
      <div className={styles.paymentContent}>
        <h2 className={styles.paymentContentTitle}>ანგარიშსწორება</h2>

        <div className={styles.paymentContentQuantity}>
          <span>რაოდენობა:</span>
          <span>5</span>
        </div>

        <div className={styles.paymentContentLink}>
          <Link href={'/'}>
            <span className={styles.navLink}>დაამატე პრომო კოდი </span>

            <Image
              src="/icons/arrow-right.svg"
              alt="arrow-right"
              width={10}
              height={10}
            />
          </Link>
          <a href="#"> </a>
        </div>
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

      <Button text={'ყიდვა'} color="#23447C" />

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

export default CartPayment;
