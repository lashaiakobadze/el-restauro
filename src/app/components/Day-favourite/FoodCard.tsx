'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

import styles from './day-fav.module.css';
import './food-card.css';

import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export interface IFoodResto {
  images: { name: string }[];
  name: string;
  address: string;
  price: string;
}

// const data = [
//   {
//     images: [
//       { name: '/images/food.png' },
//       { name: '/images/food1.png' },
//       { name: '/images/food2.png' },
//       { name: '/images/food3.png' },
//     ],
//     name: 'ბურგერ ბარი',
//     address: 'ვაჯა-ფშაველას 32',
//     price: '60 ლ',
//   },
// ];

export default function FoodCard(props: IFoodResto) {
  const { images, name, address, price } = props;
  return (
    <div className={`${styles['food-card']} food-card`}>
      <Swiper
        spaceBetween={1}
        loop={true}
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        navigation
      >
        {images.map((el, index) => (
          <SwiperSlide key={index}>
            <Image
              src={el.name}
              alt={el.name}
              className={styles['fc-img']}
              width={300}
              height={200}
            />
          </SwiperSlide>
        ))}
        {/* <div className="swiperNext"></div>
        <div className="swiperPrev"></div> */}
      </Swiper>
      <div className={styles['fc-info']}>
        <div className={styles['fc-title']}>{name}</div>
        <p>{address}</p>
        <div className={styles['fc-prize']}>{price}</div>
      </div>
    </div>
  );
}
