import React from 'react';
import Image from 'next/image';
import styles from './resto.module.css';

export interface IResto {
  name: string;
  image: string;
}

export default function Resto(props: IResto) {
  const { name, image } = props;
  return (
    <div className={styles['food-card']}>
      <Image src={image} width={100} height={100} alt={name} />
      <p>{name}</p>
    </div>
  );
}
