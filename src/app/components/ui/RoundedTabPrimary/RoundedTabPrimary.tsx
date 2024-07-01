'use client';
import React from 'react';
import styles from './RoundedTabPrimary.module.css';

interface RoundedTabPrimaryProps {
  name: string;
  isActive?: boolean;
}

const RoundedTabPrimary: React.FC<RoundedTabPrimaryProps> = ({
  name,
  isActive,
}) => {
  const tabClassName = isActive ? `${styles.tab} ${styles.active}` : styles.tab;

  return <div className={tabClassName}>{name}</div>;
};

export default RoundedTabPrimary;
