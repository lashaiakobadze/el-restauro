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

export default function Home() {
  const [favoriteState, setFavoriteState] = useState(FavoriteEnum.UNFAVORITE);

  const handleFavoriteChange = (newFavorite: SetStateAction<FavoriteEnum>) => {
    setFavoriteState(newFavorite);
  };
  return (
    <>
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
