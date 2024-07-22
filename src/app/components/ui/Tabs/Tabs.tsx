'use client';
import React, { useState } from 'react';
import styles from './Tabs.module.css';
import { Tab } from '@/app/common/types/tab.interface';

interface TabsProps {
  tabs: Tab[];
  defaultActiveId: string;
  onTabClick: (tabId: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, defaultActiveId, onTabClick }) => {
  const [activeTabId, setActiveTabId] = useState<string>(defaultActiveId);

  const handleTabClick = (tabId: string) => {
    setActiveTabId(tabId);
    onTabClick(tabId);
  };

  return (
    <div className={styles.tabsContainer}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`${styles.tabButton} ${activeTabId === tab.id ? styles.active : styles.inactive}`}
          onClick={() => handleTabClick(tab.id)}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
