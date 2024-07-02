import React from 'react';
import Image from 'next/image';
import styles from './Counter.module.css';

type CounterProps = {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  width?: string;
  hasBorder?: boolean;
};

const Counter: React.FC<CounterProps> = ({
  quantity,
  onIncrement,
  onDecrement,
  hasBorder = true,
  width = '70px',
}) => {
  const isActive = quantity > 0;

  return (
    <div
      className={styles.counter}
      style={{
        width,
        borderColor: !isActive ? 'grey' : '#000080',
        borderStyle: hasBorder ? 'solid' : 'none',
      }}
    >
      <button
        onClick={onDecrement}
        className={`${styles.button}`}
        style={{ color: !isActive ? 'grey' : '#000080' }}
        disabled={!isActive}
      >
        <Image
          src={`icons/minus${!isActive ? '-grey' : ''}.svg`}
          alt="icon"
          width={12}
          height={12}
        />
      </button>
      <span
        className={styles.quantity}
        style={{ color: !isActive ? 'grey' : '#000080' }}
      >
        {quantity}
      </span>
      <button
        onClick={onIncrement}
        className={`${styles.button}`}
        style={{ color: !isActive ? 'grey' : '#000080' }}
      >
        <Image
          src={`icons/plus${!isActive ? '-grey' : ''}.svg`}
          alt="icon"
          width={12}
          height={12}
        />
      </button>
    </div>
  );
};

export default Counter;
