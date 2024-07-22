'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import SliderCenterMode from '../../components/slider-center-mode/SliderCenterMode';
import styles from './page.module.css';
import DynamicTab from '../../ui/DynamicTab/DynamicTab';
import Customer from '../../components/Customer/Customer';
import Pagination from '../../ui/Pagination/Pagination';
import ItemIndicator from '../../ui/ItemIndicator/ItemIndicator';

const Page = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 8;

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleFiltersOpen = (open: boolean) => {
    setIsFiltersOpen(open);

    if (!open) {
      setActive(false);
    }
  };

  //  const handleFilterChange = (active: boolean) => {
  //     setActive(active);
  //   }

  const dropdownItems = [
    <span key="item1">Item 1</span>,
    <span key="item2">Item 2</span>,
    <span key="item3">Item 3</span>,
  ];

  return (
    <>
      <SliderCenterMode />
      <h2 className={styles.customerTitle}>რესტორანი</h2>

      <div className={styles.customers}>
        {isFiltersOpen && (
          <div className={styles.customMainFilters}>
            <div className={styles.customMainFiltersTabs}>
              <span className={styles.customFiltersTitle}>ფილტრი</span>
              <span
                onClick={() => handleFiltersOpen(false)}
                className={styles.customFiltersBtn}
              >
                <img
                  src={'/icons/tryAgain.svg'}
                  alt="filter"
                  width={16}
                  height={15}
                />
                გაასაუფთავე
              </span>
            </div>

            <div className={styles.customMainFiltersCategory}>
              <h3 className={styles.customMainFiltersCategoryTitle}>
                სამზარეულო
              </h3>

              <div className={styles.customMainFiltersCategoryItems}>
                <div className={styles.customMainFiltersCategoryItem}>
                  <div className={styles.circle}>
                    <ItemIndicator isActive={active} />
                  </div>
                  <span className={styles.customMainFiltersCategoryItemName}>
                    მეგრული
                  </span>
                  <span className={styles.customMainFiltersCategoryItemCount}>
                    (10)
                  </span>
                </div>

                <div className={styles.customMainFiltersCategoryItem}>
                  <div className={styles.circle}>
                    <ItemIndicator isActive={active} />
                  </div>
                  <span className={styles.customMainFiltersCategoryItemName}>
                    იტალიური
                  </span>
                  <span className={styles.customMainFiltersCategoryItemCount}>
                    (12)
                  </span>
                </div>

                <div className={styles.customMainFiltersCategoryItem}>
                  <div className={styles.circle}>
                    <ItemIndicator isActive={active} />
                  </div>
                  <span className={styles.customMainFiltersCategoryItemName}>
                    უკრაინული
                  </span>
                  <span className={styles.customMainFiltersCategoryItemCount}>
                    (5)
                  </span>
                </div>

                <div className={styles.customMainFiltersCategoryItem}>
                  <div className={styles.circle}>
                    <ItemIndicator isActive={active} />
                  </div>
                  <span className={styles.customMainFiltersCategoryItemName}>
                    იაპონური
                  </span>
                  <span className={styles.customMainFiltersCategoryItemCount}>
                    (15)
                  </span>
                </div>

                <div className={styles.customMainFiltersCategoryItem}>
                  <div className={styles.circle}>
                    <ItemIndicator isActive={active} />
                  </div>
                  <span className={styles.customMainFiltersCategoryItemName}>
                    ჩინური
                  </span>
                  <span className={styles.customMainFiltersCategoryItemCount}>
                    (13)
                  </span>
                </div>

                <div className={styles.customMainFiltersCategoryItem}>
                  <div className={styles.circle}>
                    <ItemIndicator isActive={active} />
                  </div>
                  <span className={styles.customMainFiltersCategoryItemName}>
                    მექსიკური
                  </span>
                  <span className={styles.customMainFiltersCategoryItemCount}>
                    (10)
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.customMainFiltersCategory}>
              <h3 className={styles.customMainFiltersCategoryTitle}>
                ფილტრები
              </h3>

              <div className={styles.customMainFiltersCategoryItems}>
                <div className={styles.customMainFiltersCategoryItem}>
                  <div className={styles.circle}>
                    <ItemIndicator isActive={active} />
                  </div>
                  <span className={styles.customMainFiltersCategoryItemName}>
                    მეგრული
                  </span>
                  <span className={styles.customMainFiltersCategoryItemCount}>
                    (10)
                  </span>
                </div>

                <div className={styles.customMainFiltersCategoryItem}>
                  <div className={styles.circle}>
                    <ItemIndicator isActive={active} />
                  </div>
                  <span className={styles.customMainFiltersCategoryItemName}>
                    იტალიური
                  </span>
                  <span className={styles.customMainFiltersCategoryItemCount}>
                    (12)
                  </span>
                </div>

                <div className={styles.customMainFiltersCategoryItem}>
                  <div className={styles.circle}>
                    <ItemIndicator isActive={active} />
                  </div>
                  <span className={styles.customMainFiltersCategoryItemName}>
                    უკრაინული
                  </span>
                  <span className={styles.customMainFiltersCategoryItemCount}>
                    (5)
                  </span>
                </div>

                <div className={styles.customMainFiltersCategoryItem}>
                  <div className={styles.circle}>
                    <ItemIndicator isActive={active} />
                  </div>
                  <span className={styles.customMainFiltersCategoryItemName}>
                    იაპონური
                  </span>
                  <span className={styles.customMainFiltersCategoryItemCount}>
                    (15)
                  </span>
                </div>

                <div className={styles.customMainFiltersCategoryItem}>
                  <div className={styles.circle}>
                    <ItemIndicator isActive={active} />
                  </div>
                  <span className={styles.customMainFiltersCategoryItemName}>
                    ჩინური
                  </span>
                  <span className={styles.customMainFiltersCategoryItemCount}>
                    (13)
                  </span>
                </div>

                <div className={styles.customMainFiltersCategoryItem}>
                  <div className={styles.circle}>
                    <ItemIndicator isActive={active} />
                  </div>
                  <span className={styles.customMainFiltersCategoryItemName}>
                    მექსიკური
                  </span>
                  <span className={styles.customMainFiltersCategoryItemCount}>
                    (10)
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.customMainFiltersCategory}>
              <h3 className={styles.customMainFiltersCategoryTitle}>
                ფილტრები
              </h3>

              <div className={styles.customMainFiltersCategoryItems}>
                <div className={styles.customMainFiltersCategoryItem}>
                  <div className={styles.circle}>
                    <ItemIndicator isActive={active} />
                  </div>
                  <Image
                    width={12}
                    height={12}
                    src={'/icons/full-star.svg'}
                    alt="star"
                  />
                </div>

                <div className={styles.customMainFiltersCategoryItem}>
                  <div className={styles.circle}>
                    <ItemIndicator isActive={active} />
                  </div>
                  <Image
                    width={12}
                    height={12}
                    src={'/icons/full-star.svg'}
                    alt="star"
                  />
                  <Image
                    width={12}
                    height={12}
                    src={'/icons/full-star.svg'}
                    alt="star"
                  />
                </div>

                <div className={styles.customMainFiltersCategoryItem}>
                  <div className={styles.circle}>
                    <ItemIndicator isActive={active} />
                  </div>
                  <Image
                    width={12}
                    height={12}
                    src={'/icons/full-star.svg'}
                    alt="star"
                  />
                  <Image
                    width={12}
                    height={12}
                    src={'/icons/full-star.svg'}
                    alt="star"
                  />
                  <Image
                    width={12}
                    height={12}
                    src={'/icons/full-star.svg'}
                    alt="star"
                  />
                </div>

                <div className={styles.customMainFiltersCategoryItem}>
                  <div className={styles.circle}>
                    <ItemIndicator isActive={active} />
                  </div>
                  <Image
                    width={12}
                    height={12}
                    src={'/icons/full-star.svg'}
                    alt="star"
                  />
                  <Image
                    width={12}
                    height={12}
                    src={'/icons/full-star.svg'}
                    alt="star"
                  />
                  <Image
                    width={12}
                    height={12}
                    src={'/icons/full-star.svg'}
                    alt="star"
                  />
                  <Image
                    width={12}
                    height={12}
                    src={'/icons/full-star.svg'}
                    alt="star"
                  />
                </div>

                <div className={styles.customMainFiltersCategoryItem}>
                  <div className={styles.circle}>
                    <ItemIndicator isActive={active} />
                  </div>
                  <Image
                    width={12}
                    height={12}
                    src={'/icons/full-star.svg'}
                    alt="star"
                  />
                  <Image
                    width={12}
                    height={12}
                    src={'/icons/full-star.svg'}
                    alt="star"
                  />
                  <Image
                    width={12}
                    height={12}
                    src={'/icons/full-star.svg'}
                    alt="star"
                  />
                  <Image
                    width={12}
                    height={12}
                    src={'/icons/full-star.svg'}
                    alt="star"
                  />
                  <Image
                    width={12}
                    height={12}
                    src={'/icons/full-star.svg'}
                    alt="star"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <div>
          <div className={styles.customersFilters}>
            {isFiltersOpen && (
              <span className={styles.customFiltersCounter}>80 რესტორანი</span>
            )}

            <div className={styles.dynamicTabs}>
              <DynamicTab isActive={false} dropdownItems={dropdownItems}>
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

            {!isFiltersOpen && (
              <div
                className={styles.customFilters}
                onClick={() => handleFiltersOpen(true)}
              >
                გაფილტვრა რეკომენდირებულია
                <img
                  src={'/icons/filter.svg'}
                  alt="filter"
                  width={16}
                  height={15}
                />
              </div>
            )}
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
      </div>
    </>
  );
};

export default Page;
