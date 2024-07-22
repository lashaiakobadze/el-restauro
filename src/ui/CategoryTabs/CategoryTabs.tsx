import React, { useState } from 'react';
import styles from './CategoryTabs.module.css';
import MenuItem from '../../components/MenuItem/MenuItem';
import { IMenuItemData } from '../../components/MenuItem/MenuItemData.interface';
import { Tab } from '@/common/types';

type TabsProps = {
  tabs: Tab[];
  menuItems: IMenuItemData[];
};

const CategoryTabs: React.FC<TabsProps> = ({ tabs, menuItems }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const filteredMenuItems = menuItems.filter(
    (item) => item.category === activeTab,
  );

  return (
    <div className={styles.CategoryContainer}>
      <div className={styles.tabList}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>
        {filteredMenuItems.map((item) => (
          <MenuItem
            key={item.id}
            imageSrc={item.imageSrc}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
