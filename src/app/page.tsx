import SliderWithThumbnails from '@/app/components/slider-with-thumbnails/SliderWithThumbnails';
import ImageSlider from './components/slider/Slider';
import SliderCenterMode from '@/app/components/slider-center-mode/SliderCenterMode';
import CountryCard from './components/CountryCard/CountryCard';
import FoodCard from './components/Day-favourite/FoodCard';
import Resto from './components/Resto/Resto';
import OfferedCard from './components/OfferedCard/OfferedCard';
import { FavoriteEnum } from '@/app/common/enums/favorite.enum';

export default function Home() {
  return (
    <>
      <SliderCenterMode />
      <SliderWithThumbnails />
      <ImageSlider />

      <CountryCard name={'test'} image={'/images/country-imgs/khinkali.png'} />
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
        favorite={FavoriteEnum.NORMAL}
      />
      <Resto name={'test'} image={'/images/resto-imgs/respublic.png'} />
      <OfferedCard
        name={'პიცა რუმი'}
        image={'/images/offered-imgs/offeredPizza.png'}
        percent={'30'}
        timeLeft={'6'}
      />
    </>
  );
}
