'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Cross.module.css';

interface CrossProps {
  isActive?: boolean;
}

const Cross: React.FC<CrossProps> = ({ isActive = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`${styles.cross} ${isActive ? styles.active : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={
          isActive || isHovered ? '/icons/cross_hover.svg' : '/icons/cross.svg'
        }
        width={9}
        height={9}
        alt="cross"
      />
    </button>
  );
};

export default Cross;
