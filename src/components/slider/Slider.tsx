// src/components/Slider.tsx
'use client'; // Use this directive to enable client-side rendering

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Slider.module.css';

const ImageSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        <div>
          <img
            className={styles.sliderItem}
            src="/images/slide1.jpg"
            alt="Slide 1"
          />
        </div>
        <div>
          <img
            className={styles.sliderItem}
            src="/images/slide2.jpg"
            alt="Slide 2"
          />
        </div>
        <div>
          <img
            className={styles.sliderItem}
            src="/images/slide3.jpg"
            alt="Slide 3"
          />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default ImageSlider;
