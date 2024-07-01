'use client';
// import SliderWithThumbnails from '@/app/components/slider-with-thumbnails/SliderWithThumbnails';
// import ImageSlider from './components/slider/Slider';
// import SliderCenterMode from '@/app/components/slider-center-mode/SliderCenterMode';
import CountryCard from './components/CountryCard/CountryCard';
import FoodCard from './components/FoodCard.tsx/FoodCard';
import Resto from './components/Resto/Resto';
import OfferedCard from './components/OfferedCard/OfferedCard';
import { FavoriteEnum } from './common/enums/favorite.enum';
import { SetStateAction, useState } from 'react';
import RoundedTabSecondary from './components/ui/RoundedTabSecondary/RoundedTabSecondary';
import RoundedTabPrimary from './components/ui/RoundedTabPrimary/RoundedTabPrimary';
import RoundedTabDark from './components/ui/RoundedTabDark/RoundedTabDark';
import DynamicTab from './components/ui/DynamicTab/DynamicTab';

export default function Home() {
  const [favoriteState, setFavoriteState] = useState(FavoriteEnum.UNFAVORITE);

  const handleFavoriteChange = (newFavorite: SetStateAction<FavoriteEnum>) => {
    setFavoriteState(newFavorite);
  };

  const tabsContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    padding: '20px',
  };

  const dynamicTabContent = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
  };

  return (
    <>
      <div style={tabsContainer}>
        <RoundedTabPrimary name={'უკრაინული'} isActive={false} />
        <RoundedTabPrimary name={'უკრაინული'} isActive={true} />

        <RoundedTabSecondary name={'რესტორანი'} isActive={false} />
        <RoundedTabSecondary name={'რესტორანი'} isActive={true} />

        <RoundedTabDark content={'სახლი'} isActive={false} />
        <RoundedTabDark content={'სახლი'} isActive={true} />

        <DynamicTab isActive={false}>
          <div style={dynamicTabContent}>
            <span style={{ color: '#787878' }}>Sort by option</span>{' '}
            <span style={{ fontWeight: 900 }}>ქალაქი</span>
            <img src="/icons/Vector.svg" alt="Vector svg" />
          </div>
        </DynamicTab>

        <DynamicTab isActive={true}>
          <div style={dynamicTabContent}>
            <span style={{ color: '#787878' }}>Sort by option</span>{' '}
            <span style={{ fontWeight: 900 }}>ქალაქი</span>
            <img src="/icons/Vector.svg" alt="Vector svg" />
          </div>
        </DynamicTab>
      </div>

      {/* <SliderCenterMode />
      <SliderWithThumbnails />
      <ImageSlider /> */}

      <CountryCard name={'test'} image={'/images/country-imgs/khingali.svg'} />
      <FoodCard
        images={[
          { name: '/images/food-imgs/food1.png' },
          { name: '/images/food-imgs/food2.png' },
          { name: '/images/food-imgs/food1.png' },
          { name: '/images/food-imgs/food2.png' },
        ]}
        name={'ბურგერ ბარი'}
        address={'ვაჯა-ფშაველას 32'}
        price={'60 ლ'}
        favorite={favoriteState}
        onFavoriteChange={handleFavoriteChange}
      />
      <Resto name={'test'} image={'/images/resto-imgs/dro.svg'} />
      <OfferedCard
        name={'პიცა რუმი'}
        image={'/images/offered-imgs/offeredPizza.png'}
        percent={'30'}
        timeLeft={'6'}
      />
    </>
  );
}
