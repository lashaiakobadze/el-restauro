'use client';
import React from 'react';
import styles from './Footer.module.css';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className={styles.container}>
      <h1>Footer</h1>
    </div>
  );
};

export default Footer;
