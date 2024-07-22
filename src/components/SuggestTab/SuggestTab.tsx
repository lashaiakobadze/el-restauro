'use client';
import React from 'react';
import styles from './SuggestTab.module.css';

interface SuggestTabProps {
  title: string;
  description: string;
  timeLeft: string;
}

const SuggestTab: React.FC<SuggestTabProps> = ({
  title,
  description,
  timeLeft,
}) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.tabButton} ${styles.leftHalf}`}>{title}</div>
      <div className={`${styles.tabButton} ${styles.rightHalf}`}>
        <span className={styles.description}>{description}</span>
        <span className={styles.time}>{timeLeft}</span>
      </div>
    </div>
  );
};

export default SuggestTab;
