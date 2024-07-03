'use client';
import React from 'react';
import styles from './GeneralFilter.module.css';
import Image from 'next/image';

interface GeneralFilterProps {
  props?: string;
}

const GeneralFilter: React.FC<GeneralFilterProps> = ({ props }) => {
  props ? console.log(props) : null;
  return (
    <div className={styles.search}>
      <div className={styles.find}>
        <input type="text" placeholder="მოძებნე" />
      </div>
      <div className={styles.category}>
        <div className={styles.item}>
          კატეგორია{' '}
          <Image
            width={12}
            height={12}
            src={'icons/arrow-down.svg'}
            alt="arrow"
          />
        </div>
        {/* <ul>
          <li>კაფე</li>
          <li>ბარი</li>
          <li>რესტორანი</li>
          <li>საცხობი</li>
        </ul> */}
      </div>
      <div className={styles.location}>
        <div className={styles.item}>
          ლოკაცია{' '}
          <Image
            width={12}
            height={12}
            src={'icons/arrow-down.svg'}
            alt="arrow"
          />
        </div>
        {/* <ul>
          <li>თბილის</li>
          <li>ბათუმი</li>
          <li>ქუთაისი</li>
        </ul> */}
      </div>
      <div className={styles.findIcon}>
        <Image width={14} height={14} src={'icons/search.svg'} alt="search" />
      </div>
    </div>
  );
};

export default GeneralFilter;
