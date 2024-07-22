'use client';
import React from 'react';
import Image from 'next/image';
import styles from './DailyDiscountBanner.module.css';

interface DailyDiscountBannerProps {
  bannerBackground: string;
  bannerDescription: string;
}

const DailyDiscountBanner: React.FC<DailyDiscountBannerProps> = ({
  bannerBackground,
  bannerDescription,
}) => {
  return (
    <div className={styles.dailyDiscountBanner}>
      <Image
        className={styles.dailyDiscountBannerImg}
        src={bannerBackground}
        width={358}
        height={542}
        alt="Daily Discount Banner"
      />
      <div className={styles.dailyDiscountBannerItem}>{bannerDescription}</div>
    </div>
  );
};

export default DailyDiscountBanner;
