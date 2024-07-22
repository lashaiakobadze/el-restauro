'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

import styles from './food-card.module.css';
import './food-card.css';

import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Rating from '../Rating/Rating';
import { FavoriteEnum } from '@/app/common/enums';

export interface IFoodResto {
  images: { name: string }[];
  name: string;
  address: string;
  price: string;
  favorite: FavoriteEnum;
  // eslint-disable-next-line no-unused-vars
  onFavoriteChange: (newFavorite: FavoriteEnum) => void;
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
  const { images, name, address, price, favorite, onFavoriteChange } = props;

  const [isFavorite, setIsFavorite] = useState(favorite === 'FAVORITED');

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite); // Toggle favorite state

    if (favorite === FavoriteEnum.UNFAVORITE) {
      onFavoriteChange(FavoriteEnum.NORMAL); // Update to NORMAL if current state is UNFAVORITE
    } else {
      const newFavorite = isFavorite
        ? FavoriteEnum.NORMAL
        : FavoriteEnum.FAVORITED;
      onFavoriteChange(newFavorite); // Update to FAVORITED or NORMAL based on current toggle state
    }
  };

  return (
    <div className={`${styles['food-card']} food-card`}>
      <div className={styles.heartIcon} onClick={toggleFavorite}>
        <Image
          src={
            favorite === 'NORMAL'
              ? '/images/food-imgs/emptyHeart.svg'
              : favorite === 'FAVORITED'
                ? '/images/food-imgs/filledHeart.svg'
                : '/images/food-imgs/x.svg'
          }
          width={14}
          height={12}
          alt="Heart Icon"
          style={{ marginTop: '2px' }}
        />
      </div>
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
            <div className={styles.imageContainer}>
              <Image
                src={el.name}
                alt={el.name}
                className={styles['fc-img']}
                width={300}
                height={200}
              />
              {/* <div className={styles.heartIcon} onClick={toggleFavorite}>
                <Image
                  src={
                    favorite === 'NORMAL'
                      ? '/images/food-imgs/emptyHeart.svg'
                      : favorite === 'FAVORITED'
                        ? '/images/food-imgs/filledHeart.svg'
                        : '/images/food-imgs/x.svg'
                  }
                  width={14}
                  height={12}
                  alt="Heart Icon"
                  style={{ marginTop: '2px' }}
                />
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles['fc-info']}>
        <div className={styles['fc-title']}>{name}</div>
        <p>{address}</p>
        <div className={styles['fc-prize']}>{price}</div>
        <Rating stars={[1, 1, 1, 0.5, 0]} />
      </div>
    </div>
  );
}
