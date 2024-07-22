'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './MapLocation.module.css';

interface MapLocationProps {}

const MapLocation: React.FC<MapLocationProps> = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div className={styles.mapLocation}>
      <Image
        className={styles.image}
        src="/images/customer/tabla.png"
        alt="Restaurant"
        width={236}
        height={165}
      />

      <div className={styles.customerInfo}>
        <h3 className={styles.customerName}>რესტორანი რესპუბლიკა</h3>

        <ul className={styles.contactList}>
          <li className={styles.listItem}>
            <Image
              width={16}
              height={16}
              src={'/icons/map-pin.svg'}
              alt="clock"
            />
            <a
              href="https://www.google.com/maps/search/?api=1&query=7+Tamar+Chovelidze+St,+Tbilisi"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              თბილისი, ვაჟა-ფშაველას ქუჩა
            </a>
          </li>
          <li className={styles.listItem}>
            <Image
              width={16}
              height={16}
              src={'/icons/phone-call.svg'}
              alt="clock"
            />
            <a href="tel:+995322123321" className={styles.link}>
              032 2 123 321
            </a>
          </li>
          <li className={styles.listItem} onClick={handleClick}>
            <Image
              width={16}
              height={16}
              src={'/icons/clock.svg'}
              alt="clock"
            />
            <span
              className={`${isOpen ? styles.textGreen : styles.textRed} ${styles.scheduleTxt}`}
            >
              ღიაა
            </span>
            <span className={styles.scheduleTxt}>⋅ დახურვის დრო 11 PM</span>
          </li>

          <div className={styles.rating}>
            <Image width={16} height={16} src={'/icons/star.svg'} alt="star" />{' '}
            4.5
          </div>
        </ul>
      </div>
    </div>
  );
};

export default MapLocation;
