import React from 'react';
import Image from 'next/image';
import styles from './rating.module.css';
import './rating.css';

// import fullstar from '/images/rating-imgs/full-star.svg';
// import emptysrat from '/images/rating-imgs/empty-star.svg';
// import halfstar from '/images/rating-imgs/half-star.svg';

export interface IRating {
  stars: number[];
}

function Rating(props: IRating) {
  const { stars } = props;

  return (
    <div className={styles.container}>
      <div className={styles.stars}>
        {stars.map((el, index) => (
          <Image
            key={index}
            src={getImageSource(el)}
            className="star"
            width={12}
            height={12}
            alt="star"
          />
        ))}
      </div>
      <p>(189 reviews)</p>
    </div>
  );
}

export default Rating;

const getImageSource = (value: number): string => {
  let path: string;
  if (value === 1) {
    path = '/icons/full-star.svg';
  } else if (value > 0 && value < 1) {
    path = '/icons/half-star.svg';
  } else if (value === 0) {
    path = '/icons/empty-star.svg';
  } else {
    // Default fallback if value is not recognized
    path = '';
  }

  return path;
};
