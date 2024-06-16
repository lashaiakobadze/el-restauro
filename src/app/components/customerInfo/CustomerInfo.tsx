'use client';
import React, { useEffect, useState } from 'react';
import { ICustomerInfo } from './ICustomerInfo';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';
// import {
//   FacebookIcon,
//   InstagramIcon,
//   LinkedInIcon,
// } from '@heroicons/react/24/solid';
import WorkingHoursDropdown from './workingHoursDropdown/WorkingHoursDropdown';

const CustomerInfo = (props: { customerInfo: ICustomerInfo }) => {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [isOpen, setIsOpen] = useState(true);
  const { customerInfo } = props;

  useEffect(() => {
    console.log('CustomerInfo component mounted', customerInfo);
    // Initialize Google Maps
    const center = { lat: customerInfo.lat, lng: customerInfo.lng };
    const initMap = () => {
      const mapOptions = {
        center,
        zoom: 10,
      };

      // Create a new map instance
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      new (window as any).google.maps.Map(
        document.getElementById('map'),
        mapOptions,
      );

      // Add any additional map functionality here
    };

    // Load the Google Maps API script
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
    };

    loadGoogleMapsScript();
  }, [customerInfo]);

  return (
    <div className="flex w-max flex-col items-start justify-start gap-4 rounded-lg bg-white p-5">
      <h3 className="font-noto text-14 text-left font-semibold leading-6">
        ლოკაცია და კონტაქტი
      </h3>

      <div className="h-52 rounded-lg" id="map"></div>

      <nav className="w-full">
        <ul className="m-0 p-0 font-bold">
          <li className="flex list-none items-center pb-3">
            <MapPinIcon className="mr-2 h-5 w-5 text-gray-500" />
            <a
              href="https://www.google.com/maps/search/?api=1&query=7+Tamar+Chovelidze+St,+Tbilisi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-14 hover:text-main font-medium leading-5 text-gray-600 no-underline transition-all duration-200 ease-in-out hover:underline"
            >
              თბილისი, თამარ ჭოველიძის 7 ნომერი
            </a>
          </li>
          <li className="flex list-none items-center pb-3">
            <PhoneIcon className="mr-2 h-5 w-5 text-gray-500" />
            <a
              href="tel:+995322123321"
              className="text-14 hover:text-main font-medium leading-5 text-gray-600 no-underline transition-all duration-200 ease-in-out hover:underline"
            >
              032 2 123 321
            </a>
          </li>
          <li className="flex list-none items-center pb-3">
            <EnvelopeIcon className="mr-2 h-5 w-5 text-gray-500" />
            <span className={isOpen ? 'text-green-500' : 'text-red-500'}>
              ღიაა
            </span>
            <span className="mx-2 text-gray-500">⋅ დახურვის დრო 11 PM ⋅</span>
            <WorkingHoursDropdown />
          </li>
        </ul>
      </nav>

      <div className="flex gap-2">
        <a
          href="#"
          className="hover:bg-main hover:border-main flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-lg transition-all duration-200 ease-in-out hover:text-white"
        >
          {/* <FacebookIcon className="h-5 w-5" /> */}
        </a>
        <a
          href="#"
          className="hover:bg-main hover:border-main flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-lg transition-all duration-200 ease-in-out hover:text-white"
        >
          {/* <InstagramIcon className="h-5 w-5" /> */}
        </a>
        <a
          href="#"
          className="hover:bg-main hover:border-main flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-lg transition-all duration-200 ease-in-out hover:text-white"
        >
          {/* <LinkedInIcon className="h-5 w-5" /> */}
        </a>
      </div>
    </div>
  );
};

export default CustomerInfo;
