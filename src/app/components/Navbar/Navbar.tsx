'use client';
import React, { useEffect, useState } from 'react';
import { ICategories } from '@/common/interface';
import styles from './Navbar.module.css';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [categories, setCategories] = useState<ICategories[]>([]);

  const defaultCategories: ICategories[] = [
    { id: '1', name: 'კაფე', path: '/customer' },
    { id: '2', name: 'ბარი', path: '/customer' },
    { id: '3', name: 'რესტორანი', path: '/customer' },
    { id: '4', name: 'ბუნგალო', path: '/customer' },
    { id: '5', name: 'თეატრი', path: '/customer' },
    { id: '6', name: 'კინო', path: '/customer' },
    { id: '7', name: 'კლუბი', path: '/customer' },
    { id: '8', name: 'სამზარეულო', path: '/customer' },
  ];
  useEffect(() => {
    // Simulating fetching categories and handling failure
    try {
      // Fetching data would typically be done here
      setCategories(categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
      setCategories(defaultCategories);
    }
  }, []);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        {defaultCategories.map((category) => (
          <li key={category.id} className={styles.navItem}>
            <Link href={category.path || '/customer'}>
              <span className={styles.navLink}>{category.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
