'use client';
// components/SliderWithThumbnails.js
import React, { SetStateAction, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './SliderWithThumbnails.module.css';

const SliderWithThumbnails = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const settingsMain = {
    asNavFor: nav2,
    ref: (slider: SetStateAction<null>) => setNav1(slider),
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
  };

  const settingsThumbs = {
    asNavFor: nav1,
    ref: (slider: SetStateAction<null>) => setNav2(slider),
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
  };

  const images = [
    '/images/slide1.jpg',
    '/images/slide2.jpg',
    '/images/slide3.jpg',
    '/images/slide4.jpg',
  ];

  return (
    <div className={styles.container}>
      <div className={styles.thumbnails}>
        <Slider {...settingsThumbs}>
          {images.map((img, index) => (
            <div key={index} className={styles.thumbnail}>
              <img src={img} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
      <div className={styles.mainSlider}>
        <Slider {...settingsMain}>
          {images.map((img, index) => (
            <div key={index} className={styles.mainImage}>
              <img src={img} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderWithThumbnails;
