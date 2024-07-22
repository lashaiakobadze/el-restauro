import React from 'react';
import Image from 'next/image';

export interface ICard {
  name: string;
  image: string;
}

import styles from './country-card.module.css';

export default function Card(props: ICard) {
  const { name, image } = props;
  return (
    <>
      <div className={styles['country-card']}>
        <Image src={image} width={100} height={100} alt={name} />
        <p>{name}</p>
      </div>
    </>
  );
}
