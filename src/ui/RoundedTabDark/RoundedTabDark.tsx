'use client';
import React from 'react';
import styles from './RoundedTabDark.module.css';

interface RoundedTabDarkProps {
  content: string;
  isActive?: boolean;
}

const RoundedTabDark: React.FC<RoundedTabDarkProps> = ({
  content,
  isActive,
}) => {
  const tabClassName = isActive ? `${styles.tab} ${styles.active}` : styles.tab;

  return <div className={tabClassName}>{content}</div>;
};

export default RoundedTabDark;
