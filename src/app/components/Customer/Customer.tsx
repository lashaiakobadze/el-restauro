'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/16/solid';
import styles from './Customer.module.css';

interface CustomerProps {}

const Customer: React.FC<CustomerProps> = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div className={styles.customer}>
      <div className={styles.customerLogo}>
        <Image
          width={80}
          height={80}
          src="/images/customer/restaurant-republic-logo.png"
          alt="customer-logo"
        />
      </div>

      <div className={styles.customerInfo}>
        <h3 className={styles.customerName}>რესტორანი რესპუბლიკა</h3>

        <ul className={styles.contactList}>
          <li className={styles.listItem}>
            <MapPinIcon className={styles.icon} />
            <a
              href="https://www.google.com/maps/search/?api=1&query=7+Tamar+Chovelidze+St,+Tbilisi"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              თბილისი, თამარ ჭოველიძის 7 ნომერი
            </a>
          </li>
          <li className={styles.listItem}>
            <PhoneIcon className={styles.icon} />
            <a href="tel:+995322123321" className={styles.link}>
              032 2 123 321
            </a>
          </li>
          <li className={styles.listItem} onClick={handleClick}>
            <EnvelopeIcon className={styles.icon} />
            <span
              className={`${isOpen ? styles.textGreen : styles.textRed} ${styles.link}`}
            >
              ღიაა
            </span>
            <span className={styles.link}>⋅ დახურვის დრო 11 PM ⋅</span>
          </li>
        </ul>
      </div>

      <div className={styles.customerGallery}>
        <Image
          width={280}
          height={200}
          src="/images/customer/restaurant-republic.png"
          alt="customer"
        />
      </div>
    </div>
  );
};

export default Customer;
