import React from 'react';
import Image from 'next/image';
import styles from './Counter.module.css';

type CounterProps = {
  withInput?: boolean;
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onQuantityChange?: (quantity: number) => void;
  width?: string;
  hasBorder?: boolean;
  className?: string;
};

const Counter: React.FC<CounterProps> = ({
  quantity,
  onIncrement,
  onDecrement,
  onQuantityChange,
  withInput = false,
  hasBorder = true,
  width = '70px',
  className,
}) => {
  const isActive = quantity > 0;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (withInput && onQuantityChange) {
      isNaN(value) ? onQuantityChange(1) : onQuantityChange(value);
    }
  };

  return (
    <div
      className={className ? `${className} ${styles.counter}` : styles.counter}
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

      <div className={styles.divider} />

      {!withInput && (
        <span
          className={styles.quantity}
          style={{ color: !isActive ? 'grey' : '#000080' }}
        >
          {quantity}
        </span>
      )}

      {withInput && (
        <input
          type="number"
          className={`${styles.quantity} ${styles.quantityInput} ${isActive ? styles.active : ''}`}
          value={quantity}
          onChange={handleChange}
          min="0"
        />
      )}

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
