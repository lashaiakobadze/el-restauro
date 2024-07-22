import React, { useState } from 'react';
import Tabs from '../../ui/Tabs/Tabs';
import CategoryTabs from '../../ui/CategoryTabs/CategoryTabs';
import { IMenuItemData } from '../MenuItem/MenuItemData.interface';
import { Tab } from '@/common/types';
import styles from './CustomerDetails.module.css';

const mainTabs: Tab[] = [
  { id: 'ცხელი-კერძები', name: 'ზოგადი ინფორმაცია' },
  { id: 'ცივი-ერძები', name: 'მინიუ' },
  { id: 'სალათები', name: 'ინტერიერი' },
];

const menuItems: IMenuItemData[] = [
  {
    id: '1',
    imageSrc: '/images/menu-item.png',
    title: 'ავაოკადოს სალათა',
    price: 20,
    category: 'ცხელი-კერძები',
  },
  {
    id: '2',
    imageSrc: '/images/menu-item.png',
    title: 'სალათის ფურცლის სალათა',
    price: 25,
    category: 'ცივი-კერძები',
  },
  {
    id: '3',
    imageSrc: '/images/menu-item.png',
    title: 'ბერძნული სალათა',
    price: 30,
    category: 'სალათები',
  },
  {
    id: '11',
    imageSrc: '/images/menu-item.png',
    title: 'ავაოკადოს სალათა',
    price: 20,
    category: 'ცხელი-კერძები',
  },
  {
    id: '22',
    imageSrc: '/images/menu-item.png',
    title: 'სალათის ფურცლის სალათა',
    price: 25,
    category: 'ცივი-კერძები',
  },
  {
    id: '33',
    imageSrc: '/images/menu-item.png',
    title: 'ბერძნული სალათა',
    price: 30,
    category: 'სალათები',
  },
  {
    id: '111',
    imageSrc: '/images/menu-item.png',
    title: 'ავაოკადოს სალათა',
    price: 20,
    category: 'ცხელი-კერძები',
  },
  {
    id: '222',
    imageSrc: '/images/menu-item.png',
    title: 'სალათის ფურცლის სალათა',
    price: 25,
    category: 'ცივი-კერძები',
  },
  {
    id: '333',
    imageSrc: '/images/menu-item.png',
    title: 'ბერძნული სალათა',
    price: 30,
    category: 'სალათები',
  },
];

const categoryTabs: Tab[] = Array.from(
  new Set(menuItems.map((item) => item.category)),
).map((category) => {
  return { id: category, name: category };
});

const CustomerDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState(mainTabs[0].id);

  const handleTabClick = (tabId: string) => {
    console.log(`Active tab is now: ${tabId}`);
    setActiveTab(tabId);
  };

  return (
    <div className={styles.customerDetailsContainer}>
      <Tabs
        tabs={mainTabs}
        defaultActiveId={activeTab}
        onTabClick={handleTabClick}
      />
      <CategoryTabs tabs={categoryTabs} menuItems={menuItems} />
    </div>
  );
};

export default CustomerDetails;
