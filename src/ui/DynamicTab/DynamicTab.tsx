'use client';
import React, { useState } from 'react';
import styles from './DynamicTab.module.css';

interface DynamicTabProps {
  children: React.ReactNode;
  isActive?: boolean;
  dropdownItems?: React.ReactNode[];
}

const DynamicTab: React.FC<DynamicTabProps> = ({
  children,
  isActive,
  dropdownItems = [],
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const tabClassName =
    isActive || isHovered
      ? `${styles.dynamicTab} ${styles.active}`
      : styles.dynamicTab;

  return (
    <div
      className={tabClassName}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && dropdownItems.length > 0 && (
        <div className={styles.dropdown}>
          {dropdownItems.map((item, index) => (
            <div key={index} className={styles.dropdownItem}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DynamicTab;
