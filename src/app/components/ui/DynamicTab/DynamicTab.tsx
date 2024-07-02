'use client';
import React from 'react';
import styles from './DynamicTab.module.css';

interface DynamicTabProps {
  children: React.ReactNode;
  isActive?: boolean;
}

const DynamicTab: React.FC<DynamicTabProps> = ({ children, isActive }) => {
  const tabClassName = isActive
    ? `${styles.dynamicTab} ${styles.active}`
    : styles.dynamicTab;
  return <div className={tabClassName}>{children}</div>;
};

export default DynamicTab;
