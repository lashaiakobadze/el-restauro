'use client';
import SearchedItem from '@/components/SearchedItem/SearchedItem';
import styles from './page.module.css';
import Image from 'next/image';
import MapComponent from '@/components/Map/Map';
import { MapProvider } from '@/components/Map/map-provider';

const Page = () => {
  return (
    <div className={styles.mapContainer}>
      <div className={styles.mapSearch}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="რესტორანი"
          />
          <button className={styles.searchButton}>
            <Image
              width={14}
              height={14}
              src={'icons/search.svg'}
              alt="search"
            />
          </button>
        </div>

        <div className={styles.mapFilterContainer}>
          <div>
            <span className={styles.filterTxt}>Show me:</span>
            <button className={styles.filterButton}>
              ღიაა
              <Image
                width={14}
                height={14}
                src={'icons/Vector.svg'}
                alt="filter"
              />
            </button>
          </div>

          <div>
            <span className={styles.filterTxt}>Sort by:</span>
            <button className={styles.filterButton}>
              უახლოესი
              <Image
                width={14}
                height={14}
                src={'icons/Vector.svg'}
                alt="filter"
              />
            </button>
          </div>

          <div>
            <button className={styles.filterButton}>
              <Image
                width={14}
                height={14}
                src={'icons/filter.svg'}
                alt="filter"
              />
              ფილტრი
            </button>
          </div>
        </div>

        <div className={styles.searchedItems}>
          <SearchedItem />
          <SearchedItem />
          <SearchedItem />
          <SearchedItem />
          <SearchedItem />
          <SearchedItem />
          <SearchedItem />
        </div>
      </div>
      <div className={styles.map}>
        <MapProvider>
          <MapComponent />
        </MapProvider>
      </div>
    </div>
  );
};

export default Page;
