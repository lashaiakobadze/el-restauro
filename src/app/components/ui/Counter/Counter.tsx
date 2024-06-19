import React from 'react';
import styles from './Counter.module.css';

type CounterProps = {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  width?: string;
};

const Counter: React.FC<CounterProps> = ({
  quantity,
  onIncrement,
  onDecrement,
  width = '100px',
}) => {
  const isActive = quantity > 0;

  return (
    <div
      className={styles.counter}
      style={{ width, borderColor: !isActive ? 'grey' : '#000080' }}
    >
      <button
        onClick={onDecrement}
        className={`${styles.button}`}
        style={{ color: !isActive ? 'grey' : '#000080' }}
        disabled={!isActive}
      >
        -
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
        +
      </button>
    </div>
  );
};

export default Counter;
