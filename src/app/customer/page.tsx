'use client';
import React from 'react';
import { ICustomerInfo } from '../components/customerInfo/ICustomerInfo';
import CustomerInfo from '../components/customerInfo/CustomerInfo';
import SliderWithThumbnails from '../components/slider-with-thumbnails/SliderWithThumbnails';
import Tabs from '../components/ui/Tabs/Tabs';
import { Tab } from '../types';
import styles from './page.module.css';
import Snackbar from '../components/ui/Snackbar/Snackbar';

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

const tabs: Tab[] = [
  { id: 'tab1', name: 'თითოეული მომწერი' },
  { id: 'tab2', name: 'დაჯავშნა' },
  { id: 'tab3', name: 'მონაცემები' },
];

const handleTabClick = (tabId: string) => {
  console.log(`Active tab is now: ${tabId}`);
};

const setShowSnackbar = (show: boolean) => {
  console.log(`Snackbar is now: ${show}`);
};

const Page = () => {
  return (
    <>
      <div className={styles.pageContainer}>
        <div className={styles.slider}>
          <Snackbar
            message="შენახვა მაღლავს!"
            show={true} // Fix: Change show prop to showSnackbar
            onClose={() => setShowSnackbar(false)}
          />
          <SliderWithThumbnails />
        </div>
        <div className={styles.info}>
          <CustomerInfo customerInfo={customerInfo} />
        </div>
      </div>
      <Tabs tabs={tabs} defaultActiveId="tab2" onTabClick={handleTabClick} />
    </>
  );
};

export default Page;
