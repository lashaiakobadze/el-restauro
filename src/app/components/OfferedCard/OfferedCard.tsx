import React from 'react';
import Image from 'next/image';

import styles from './offered-card.module.css';

export interface IOfffedCard {
  name: string;
  image: string;
  percent: string;
  timeLeft: string;
}

export default function OfferedCard(props: IOfffedCard) {
  const { name, image, percent, timeLeft } = props;
  return (
    <div className={styles.box}>
      <div className={styles['img-box']}>
        <Image
          src={image}
          alt={name}
          width={318}
          height={238}
          className={styles.img}
        />
        <div className={styles.sale}>{percent}%</div>
      </div>
      <p className={styles['box-name']}>{name}</p>
      <p className={styles.time}>დარჩენილია {timeLeft} დღე</p>
    </div>
  );
}
