'use client';

import React, { useState } from 'react';
import styles from './WorkingHoursDropdown.module.css';

const WorkingHoursDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const workingHours = {
    Monday: '9 AM - 5 PM',
    Tuesday: '9 AM - 5 PM',
    Wednesday: '9 AM - 5 PM',
    Thursday: '9 AM - 5 PM',
    Friday: '9 AM - 5 PM',
    Saturday: '10 AM - 2 PM',
    Sunday: 'Closed',
  };

  return (
    <div className={styles.container}>
      <span className={styles.dropdownLabel} onClick={() => setIsOpen(!isOpen)}>
        სამუშაო დროები
      </span>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {Object.entries(workingHours).map(([day, hours]) => (
            <li key={day} className={styles.dropdownItem}>
              {day}: {hours}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WorkingHoursDropdown;
