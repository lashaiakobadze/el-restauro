'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Favorite.module.css';

interface FavoriteProps {
  isActive?: boolean;
}

const Favorite: React.FC<FavoriteProps> = ({ isActive = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`${styles.favorite} ${isActive ? styles.active : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        className={styles.favoriteIcon}
        src={
          isActive || isHovered ? '/icons/heart_hover.svg' : '/icons/heart.svg'
        }
        width={14}
        height={12}
        alt="favorite icon"
      />
    </button>
  );
};

export default Favorite;
