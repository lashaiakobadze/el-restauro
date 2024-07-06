'use client';
import React from 'react';
import styles from './VoucherOrderDetails.module.css';

interface VoucherOrderDetailsProps {}

const VoucherOrderDetails: React.FC<VoucherOrderDetailsProps> = () => {
  return (
    <div className={styles.voucherOrderDetails}>
      <div className={styles.voucherOrderDetailsContent}>
        <span className={styles.voucherOrderDetailsTitle}>
          ისარგებლე ფასდაკლებით რესტორან იასამანში
        </span>
        <span className={styles.voucherOrderDetailsDesc}>ვაუჩერის შეძენა</span>
      </div>

      <div className={styles.voucherOrderDetailsCompare}>
        <div className={styles.voucherOrderDetailsComparePayment}>
          <span className={styles.voucherOrderDetailsCurrent}>50.00ლ</span>
          <span className={styles.voucherOrderDetailsReal}>100ლ</span>
        </div>

        <div className={styles.voucherOrderDetailsSaved}>
          <span>დაზოგილი თანხა</span> <strong>45ლ</strong>
        </div>
      </div>
    </div>
  );
};

export default VoucherOrderDetails;
