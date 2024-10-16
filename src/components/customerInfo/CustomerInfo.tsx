import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './CustomerInfo.module.css';
import { ICustomerInfo } from './ICustomerInfo';
import WorkingHoursDropdown from './workingHoursDropdown/WorkingHoursDropdown';
import ContactItem from '../../ui/ContactItem/ContactItem';

const CustomerInfo = ({ customerInfo }: { customerInfo: ICustomerInfo }) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const center = { lat: customerInfo.lat, lng: customerInfo.lng };
    const initMap = () => {
      const mapOptions = { center, zoom: 10 };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      new window.google.maps.Map(document.getElementById('map'), mapOptions);
    };

    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.src =
        'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places';
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
    };

    loadGoogleMapsScript();
  }, [customerInfo]);

  return (
    <div className={styles.customerInfo} onClick={() => setIsOpen(true)}>
      <h3 className={styles.title}>ლოკაცია და კონტაქტი</h3>
      <div className={styles.map} id="map"></div>
      <nav className={styles.contactList}>
        <ul>
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
              თბილისი, თამარ ჭოველიძის 7 ნომერი
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
          <li className={styles.listItem}>
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
            <span className={styles.scheduleTxt}>⋅ დახურვის დრო 11 PM ⋅</span>
            <WorkingHoursDropdown />
          </li>
        </ul>
      </nav>
      <div className={styles.socialMedia}>
        <ContactItem
          icon={'/images/contacts/fb.svg'}
          link="https://www.instagram.com"
        />

        <ContactItem
          icon={'/images/contacts/Instagram.svg'}
          link="https://www.instagram.com"
        />

        <ContactItem
          icon={'/images/contacts/LinkedIn.svg'}
          link="https://www.instagram.com"
        />
      </div>
    </div>
  );
};

export default CustomerInfo;
