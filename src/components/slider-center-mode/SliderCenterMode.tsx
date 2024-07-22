'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './SliderCenterMode.module.css';
import './SliderCenterMode.css';

function SliderCenterMode() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: '10px',
  };

  return (
    <div className="main-page-slider">
      <Slider {...settings}>
        <div className={styles.slide}>
          <img
            src="/images/slide1.jpg"
            alt="Slide 1"
            className={styles.slideImage}
          />
        </div>
        <div className={styles.slide}>
          <img
            src="/images/slide2.jpg"
            alt="Slide 2"
            className={styles.slideImage}
          />
        </div>
        <div className={styles.slide}>
          <img
            src="/images/slide3.jpg"
            alt="Slide 3"
            className={styles.slideImage}
          />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
}

export default SliderCenterMode;
