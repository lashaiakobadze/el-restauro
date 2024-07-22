'use client';
import React from 'react';
import Image from 'next/image';
import styles from './DailyDiscountItem.module.css';

interface DailyDiscountItemProps {
  imgUrl: string;
  title: string;
}

const DailyDiscountItem: React.FC<DailyDiscountItemProps> = ({
  imgUrl,
  title,
}) => {
  return (
    <div className={styles.dailyDiscountItem}>
      <Image
        className={styles.dailyDiscountItemImg}
        src={imgUrl}
        width={160}
        height={160}
        alt={title}
      ></Image>
      <h3 className={styles.dailyDiscountItemTitle}>{title}</h3>
    </div>
  );
};

export default DailyDiscountItem;
