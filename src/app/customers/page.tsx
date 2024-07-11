'use client';
import React, { useState } from 'react';
import SliderCenterMode from '../components/slider-center-mode/SliderCenterMode';
import styles from './page.module.css';
import DynamicTab from '../components/ui/DynamicTab/DynamicTab';
import Customer from '../components/Customer/Customer';
import Pagination from '../components/ui/Pagination/Pagination';

const Page = () => {
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 8;

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <>
      <SliderCenterMode />
      <div className={styles.customers}>
        <h2 className={styles.customerTitle}>რესტორანი</h2>
        <div className={styles.customersFilters}>
          <div className={styles.dynamicTabs}>
            <DynamicTab isActive={false}>
              <div className={styles.dynamicTabContent}>
                <span style={{ fontWeight: 900 }}>რეიტინგი</span>
                <img src="/icons/Vector.svg" alt="Vector svg" />
              </div>
            </DynamicTab>

            <DynamicTab isActive={false}>
              <div className={styles.dynamicTabContent}>
                <span style={{ fontWeight: 900 }}>ქალაქი</span>
                <img src="/icons/Vector.svg" alt="Vector svg" />
              </div>
            </DynamicTab>

            <DynamicTab isActive={false}>
              <div className={styles.dynamicTabContent}>
                <span style={{ fontWeight: 900 }}>შეთავაზება</span>
                <img src="/icons/Vector.svg" alt="Vector svg" />
              </div>
            </DynamicTab>
          </div>

          <div className={styles.customFilters}>
            გაფილტვრა რეკომენდირებულია
            <img
              src={'/icons/filter.svg'}
              alt="filter"
              width={16}
              height={15}
            />
          </div>
        </div>

        <div className={styles.customersItems}>
          <div className={styles.customersItem}>
            <Customer />
          </div>

          <div className={styles.customersItem}>
            <Customer />
          </div>

          <div className={styles.customersItem}>
            <Customer />
          </div>
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Page;
