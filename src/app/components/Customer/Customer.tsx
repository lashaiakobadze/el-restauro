'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Customer.module.css';
import './Customer.css';
import Rating from '../Rating/Rating';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface CustomerProps {}

const Customer: React.FC<CustomerProps> = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => setIsOpen(!isOpen);

  const images = [
    { name: '/images/customer/restaurant-republic.png' },
    { name: '/images/customer/tabla.png' },
    { name: '/images/customer/odobade.png' },
    { name: '/images/customer/iasamani.png' },
  ];

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
              className={`${isOpen ? styles.textGreen : styles.textRed} ${styles.link}`}
            >
              ღიაა
            </span>
            <span className={styles.link}>⋅ დახურვის დრო 11 PM ⋅</span>
          </li>

          <Rating stars={[1, 1, 1, 0.5, 0]} />
        </ul>
      </div>

      <div className={`${styles.customerGallery} customer-gallery`}>
        <Swiper
          spaceBetween={1}
          loop={true}
          slidesPerView={1}
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          navigation
        >
          {images.map((el, index) => (
            <SwiperSlide key={index}>
              <Image
                src={el.name}
                alt={el.name}
                className={styles.customerGalleryImg}
                width={200}
                height={200}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Customer;
