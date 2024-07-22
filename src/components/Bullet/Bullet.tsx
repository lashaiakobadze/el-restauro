'use client';
import React from 'react';
import styles from './Bullet.module.css';

interface BulletProps {
  isActive?: boolean;
}

const Bullet: React.FC<BulletProps> = ({ isActive = false }) => {
  return (
    <div className={`${styles.bullet}  ${isActive ? '' : styles.inactive}`}>
      <div
        className={`${styles.bulletCenter} ${isActive ? styles.active : styles.inactive}`}
      ></div>
    </div>
  );
};

export default Bullet;
