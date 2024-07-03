'use client';
import React from 'react';
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
          <div className={styles.header}>
            <Link href={'/'} passHref>
              <img
                className={styles.logo}
                src={'icons/black-logo.svg'}
                alt="logo"
              />
            </Link>
            <div className={styles.filters}>
              <GeneralFilter />
            </div>
            <MapBtn />

            <GeneralActions />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
