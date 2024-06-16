'use client';

import React, { useState } from 'react';

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
    <div className="relative">
      <span
        className="ml-1 cursor-pointer text-blue-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        სამუშაო დროები
      </span>
      {isOpen && (
        <ul className="absolute z-50 mt-2 w-48 border border-gray-300 bg-gray-100">
          {Object.entries(workingHours).map(([day, hours]) => (
            <li
              key={day}
              className="cursor-pointer list-none px-3 py-2 hover:bg-gray-200"
            >
              {day}: {hours}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WorkingHoursDropdown;
