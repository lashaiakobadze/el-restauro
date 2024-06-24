import React from 'react';
import styles from './ads.module.css';
import Image from 'next/image';

export interface IAds {
  mainBg: string;
  bgImg: string;
  saleImg: string;
  name: string;
  text: string;
}

export default function AdsCard(props: IAds) {
  const { mainBg, bgImg, saleImg, name, text } = props;
  return (
    <div className={styles.box}>
      <Image
        src={mainBg}
        className={styles.mainBg}
        layout="intrinsic"
        width={645}
        height={358}
        alt={mainBg}
      />
      <Image
        src={bgImg}
        className={styles.bgImg}
        width={410}
        height={285}
        alt={bgImg}
      />
      <Image
        src={saleImg}
        width={138}
        height={138}
        alt={saleImg}
        className={styles.price}
      />
      <h2>{name}</h2>
      <p>{text}</p>
    </div>
  );
}
