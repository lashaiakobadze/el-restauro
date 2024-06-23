'use client';
import React from 'react';
import { ICustomerInfo } from '../components/customerInfo/ICustomerInfo';
import CustomerInfo from '../components/customerInfo/CustomerInfo';
import SliderWithThumbnails from '../components/slider-with-thumbnails/SliderWithThumbnails';

import styles from './page.module.css';
import CustomerDetails from '../components/CustomerDetails/CustomerDetails';
import Orders from '../components/Orders/Orders';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';

const customerInfo: ICustomerInfo = {
  lat: 41.7151,
  lng: 44.8271,
  address: 'თბილისი, თამარ ჭოველიძის 7 ნომერი',
  phone: '032 2 123 321',
  workingHours: [
    'Monday: 9 AM - 5 PM',
    'Tuesday: 9 AM - 5 PM',
    'Wednesday: 9 AM - 5 PM',
    'Thursday: 9 AM - 5 PM',
    'Friday: 9 AM - 5 PM',
    'Saturday: 10 AM - 2 PM',
    'Sunday: Closed',
  ],
};

const Page = () => {
  return (
    <>
      <div className={styles.breadcrumb}>
        <Breadcrumb />
      </div>
      <div className={styles.pageContainer}>
        <div className={styles.slider}>
          <SliderWithThumbnails />
        </div>
        <div className={styles.info}>
          <CustomerInfo customerInfo={customerInfo} />
        </div>
      </div>
      <div className={styles.divider}>
        <div className={styles.customerDetails}>
          <CustomerDetails />
        </div>
        <div className={styles.orders}>
          <Orders />
        </div>
      </div>
    </>
  );
};

export default Page;
