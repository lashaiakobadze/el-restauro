import SliderWithThumbnails from '@/app/components/slider-with-thumbnails/SliderWithThumbnails';
import ImageSlider from './components/slider/Slider';
import SliderCenterMode from '@/app/components/slider-center-mode/SliderCenterMode';

export default function Home() {
  return (
    <>
      <SliderCenterMode />
      <SliderWithThumbnails />
      <ImageSlider />
    </>
  );
}
