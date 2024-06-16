// app/components/Navbar.tsx
'use client';

import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { ICategories } from '@/common/interface';

const Navbar: React.FC = () => {
  const [categories, setCategories] = useState<ICategories[]>([]);

  const defaultCategories: ICategories[] = [
    { id: '1', name: 'კაფე' },
    { id: '2', name: 'ბარი' },
    { id: '3', name: 'რესტორანი' },
    { id: '4', name: 'საცხობი' },
    { id: '5', name: 'პიცერია' },
    { id: '6', name: 'სწრაფი კვება' },
    { id: '7', name: 'ბურგერი' },
    { id: '8', name: 'კარაოკე' },
    { id: '9', name: 'სამზარეულო' },
  ];

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // const response = await axios.get('http://192.168.88.22:8080/api/categories');
        // setCategories(response.data);
        setCategories(defaultCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setCategories(defaultCategories);
      }
    };

    fetchCategories();
  }, []);

  return (
    <nav className="bg-gray-100 px-10 py-4">
      <div className="flex justify-center">
        <ul className="flex space-x-[38px]">
          {categories.map((category) => (
            <li key={category.id} className="text-center">
              <a
                href={`#${category.name}`}
                className="text-black no-underline transition-all duration-300 ease-in-out hover:text-customRed"
              >
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
