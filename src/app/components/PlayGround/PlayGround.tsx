'use client';
import React, { useState } from 'react';
import styles from './PlayGround.module.css';
import ActionButton from '../ui/ActionButton/ActionButton';
import DynamicTab from '../ui/DynamicTab/DynamicTab';
import RoundedTabDark from '../ui/RoundedTabDark/RoundedTabDark';
import RoundedTabPrimary from '../ui/RoundedTabPrimary/RoundedTabPrimary';
import RoundedTabSecondary from '../ui/RoundedTabSecondary/RoundedTabSecondary';
import Button from '../ui/Button/Button';
import Tabs from '../ui/Tabs/Tabs';
import { Tab } from '@/app/types';
import ItemIndicator from '../ui/ItemIndicator/ItemIndicator';
import Counter from '../ui/Counter/Counter';
import ContactItem from '../ui/ContactItem/ContactItem';

interface PlayGroundProps {}

const PlayGround: React.FC<PlayGroundProps> = () => {
  const mainTabs: Tab[] = [
    { id: 'ცხელი-კერძები', name: 'ზოგადი ინფორმაცია' },
    { id: 'ცივი-ერძები', name: 'მინიუ' },
    { id: 'სალათები', name: 'ინტერიერი' },
  ];

  const [activeTab, setActiveTab] = useState(mainTabs[0].id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  const handleDecrement = () => {
    const newQuantity = quantity > 0 ? quantity - 1 : 0;
    setQuantity(newQuantity);
  };

  return (
    <div className={styles.container}>
      <h2>Tabs</h2>
      <div className={styles.items}>
        <RoundedTabPrimary name={'უკრაინული'} isActive={false} />
        <RoundedTabPrimary name={'უკრაინული'} isActive={true} />

        <RoundedTabSecondary name={'რესტორანი'} isActive={false} />
        <RoundedTabSecondary name={'რესტორანი'} isActive={true} />

        <RoundedTabDark content={'სახლი'} isActive={false} />
        <RoundedTabDark content={'სახლი'} isActive={true} />

        <DynamicTab isActive={false}>
          <div className={styles.dynamicTabContent}>
            <span style={{ color: '#787878' }}>Sort by option</span>
            <span style={{ fontWeight: 900 }}>ქალაქი</span>
            <img src="/icons/Vector.svg" alt="Vector svg" />
          </div>
        </DynamicTab>

        <DynamicTab isActive={true}>
          <div className={styles.dynamicTabContent}>
            <span style={{ color: '#787878' }}>Sort by option</span>
            <span style={{ fontWeight: 900 }}>ქალაქი</span>
            <img src="/icons/Vector.svg" alt="Vector svg" />
          </div>
        </DynamicTab>

        <Tabs
          tabs={mainTabs}
          defaultActiveId={activeTab}
          onTabClick={handleTabClick}
        />
      </div>

      <h2>Buttons</h2>
      <div className={styles.items}>
        <ActionButton label="Primary" onClick={() => console.log('Primary')} />
        <Button
          text={'ყიდვა'}
          color="#23447C"
          onClick={() => console.log('click!')}
        />
      </div>

      <h2>UI elements</h2>
      <div className={styles.items}>
        <ContactItem
          icon={'/images/contacts/fb.svg'}
          link="https://www.instagram.com"
        />

        <ItemIndicator isActive={true} />
        <ItemIndicator isActive={false} />

        <Counter
          quantity={quantity}
          onIncrement={() => handleIncrement()}
          onDecrement={() => handleDecrement()}
          hasBorder={true}
        />
        <Counter
          quantity={quantity}
          onIncrement={() => handleIncrement()}
          onDecrement={() => handleDecrement()}
          hasBorder={false}
        />
      </div>
    </div>
  );
};

export default PlayGround;
