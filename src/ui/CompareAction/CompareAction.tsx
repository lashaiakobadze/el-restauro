'use client';
import React from 'react';
import Image from 'next/image';
import styles from './CompareAction.module.css';

interface CompareActionProps {
  isActive?: boolean;
}

const CompareAction: React.FC<CompareActionProps> = ({ isActive = false }) => {
  return (
    <button className={`${styles.compare} ${isActive ? styles.active : ''}`}>
      <Image
        className={styles.compareIcon}
        src="/icons/compare.svg"
        width={14}
        height={12}
        alt="compare icon"
      />
    </button>
  );
};

export default CompareAction;
