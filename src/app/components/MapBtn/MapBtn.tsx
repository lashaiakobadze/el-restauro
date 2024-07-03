'use client';
import React from 'react';
import Image from 'next/image';
import styles from './MapBtn.module.css';

interface MapBtnProps {
  props?: string;
}

const MapBtn: React.FC<MapBtnProps> = ({ props }) => {
  props ? console.log(props) : null;
  return (
    <button className={styles.map}>
      <Image width={22} height={22} src={'icons/map.svg'} alt="map" />
      რუკა
    </button>
  );
};

export default MapBtn;
