'use client';
import React from 'react';
import styles from './PaymentItem.module.css';
import ItemIndicator from '../ui/ItemIndicator/ItemIndicator';
import { PaymentTypeEnum } from '@/app/common/types/paymentType.enum';

interface PaymentItemProps {
  isActive: boolean;
  paymentType: PaymentTypeEnum;
  paymentItemTitle: string;
  paymentItemValue: number;
  onClick: () => void;
}

const PaymentItem: React.FC<PaymentItemProps> = ({
  paymentItemTitle,
  paymentItemValue,
  isActive,
  onClick,
}) => {
  return (
    <div className={styles.paymentItem} onClick={onClick}>
      <div className={styles.paymentType}>
        <ItemIndicator isActive={isActive} />
        <span className={styles.paymentItemTitle}>{paymentItemTitle}</span>
      </div>

      <span className={styles.paymentItemValue}>{paymentItemValue}₾</span>
    </div>
  );
};

export default PaymentItem;
