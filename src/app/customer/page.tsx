'use client';
import React from 'react';
import { ICustomerInfo } from '../components/customerInfo/ICustomerInfo';
import CustomerInfo from '../components/customerInfo/CustomerInfo';
import SliderWithThumbnails from '../components/slider-with-thumbnails/SliderWithThumbnails';

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
    <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-3">
      <div className="col-span-1 md:col-span-2">
        <SliderWithThumbnails />
      </div>
      <div className="col-span-1">
        <CustomerInfo customerInfo={customerInfo} />
      </div>
    </div>
  );
};

export default Page;
