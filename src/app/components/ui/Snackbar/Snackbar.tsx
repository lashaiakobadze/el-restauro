'use client';
import React, { useEffect } from 'react';
import styles from './Snackbar.module.css';

interface SnackbarProps {
  message: string;
  show: boolean;
  duration?: number; // Duration in milliseconds
  onClose: () => void; // Callback to set show to false
}

const Snackbar: React.FC<SnackbarProps> = ({
  message,
  show,
  duration = 3000,
  onClose,
}) => {
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (show) {
      timer = setTimeout(() => {
        onClose(); // Hide the snackbar after the duration
      }, duration);
    }
    return () => clearTimeout(timer); // Clean up the timer
  }, [show, duration, onClose]);

  return (
    <div className={`${styles.snackbar} ${show ? styles.show : ''}`}>
      {message}
    </div>
  );
};

export default Snackbar;
