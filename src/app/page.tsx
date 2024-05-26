// src/app/page.tsx

import SliderWithThumbnails from '@/components/slider-with-thumbnails/SliderWithThumbnails';
import ImageSlider from '../components/slider/Slider';
import SliderCenterMode from '@/components/slider-center-mode/SliderCenterMode';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Slider</h1>
      <SliderCenterMode />
      <SliderWithThumbnails />
      <ImageSlider />
    </div>
  );
}
