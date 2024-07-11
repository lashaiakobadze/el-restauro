'use client';
import React from 'react';
import SliderCenterMode from '../components/slider-center-mode/SliderCenterMode';
import styles from './page.module.css';
import DynamicTab from '../components/ui/DynamicTab/DynamicTab';
import Customer from '../components/Customer/Customer';

const Page = () => {
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
      </div>
    </>
  );
};

export default Page;
