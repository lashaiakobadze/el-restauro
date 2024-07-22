'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './SearchedItem.module.css';

interface SearchedItemProps {}

const SearchedItem: React.FC<SearchedItemProps> = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div className={styles.searchedItem}>
      <div className={styles.logo}>
        <Image
          className={styles.logoImg}
          width={60}
          height={60}
          src="/images/customer/tabla.png"
          alt="customer-logo"
        />
      </div>

      <div className={styles.info}>
        <div className={styles.about}>
          <div className={styles.name}>რესტორანი ტაბლა</div>
          <div className={styles.rating}>
            <Image width={16} height={16} src={'/icons/star.svg'} alt="star" />{' '}
            4.5
          </div>
        </div>

        <div onClick={handleClick} className={styles.contact}>
          <Image width={16} height={16} src={'/icons/clock.svg'} alt="clock" />
          <span
            className={`${isOpen ? styles.textGreen : styles.textRed} ${styles.scheduleTxt}`}
          >
            ღიაა
          </span>
          <span className={styles.scheduleTxt}>⋅ დახურვის დრო 11 PM</span>
        </div>
      </div>
    </div>
  );
};

export default SearchedItem;
