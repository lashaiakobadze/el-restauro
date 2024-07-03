'use client';
import React from 'react';
import Image from 'next/image';
import styles from './GeneralActionsItem.module.css';

interface GeneralActionsItemProps {
  icon: string;
  iconHeight?: number;
  iconWidth?: number;
  hoverIcon?: string;
  text: string;
}

const GeneralActionsItem: React.FC<GeneralActionsItemProps> = ({
  icon,
  text,
  iconHeight = 22,
  iconWidth = 22,
}) => {
  return (
    <div className={`${styles.actionItem}`}>
      <Image
        width={iconWidth}
        height={iconHeight}
        src={`icons/${icon}.svg`}
        alt={`${text} icon`}
      />

      <span className={styles.actionItemText}>{text}</span>
    </div>
  );
};

export default GeneralActionsItem;
