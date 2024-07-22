'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';
import MapBtn from '../MapBtn/MapBtn';
import GeneralFilter from '../GeneralFilter/GeneralFilter';
import GeneralActions from '../GeneralActions/GeneralActions';

interface HeaderProps {
  props?: string;
}

const Header: React.FC<HeaderProps> = ({ props }) => {
  props ? console.log(props) : null;
  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.maxWidth}>
          <Link href={'/'} passHref>
            <Image
              className={styles.logo}
              height={96}
              width={48}
              src={'logo.svg'}
              alt="logo"
            />
          </Link>
          <div className={styles.header}>
            <div className={styles.filters}>
              <GeneralFilter />
              <MapBtn />
            </div>

            <GeneralActions />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
