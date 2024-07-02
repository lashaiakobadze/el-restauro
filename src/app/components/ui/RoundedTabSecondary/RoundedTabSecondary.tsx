'use client';
import React from 'react';
import styles from './RoundedTabSecondary.module.css';

interface RoundedTabSecondaryProps {
  name: string;
  isActive?: boolean;
}

const RoundedTabSecondary: React.FC<RoundedTabSecondaryProps> = ({
  name,
  isActive,
}) => {
  const tabClassName = isActive ? `${styles.tab} ${styles.active}` : styles.tab;

  return <div className={tabClassName}>{name}</div>;
};

export default RoundedTabSecondary;
