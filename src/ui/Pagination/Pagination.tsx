'use client';
import React from 'react';
import Image from 'next/image';
import styles from './Pagination.module.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`${styles.pageButton} ${i === currentPage ? styles.pageButtonActive : ''}`}
          onClick={() => onPageChange(i)}
        >
          {i < 10 ? `0${i}` : i}
        </button>,
      );
    }
    return pageNumbers;
  };

  return (
    <div className={styles.paginationContainer}>
      <button
        className={styles.pageButton}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Image width={8} height={8} src="/icons/arrow-left.svg" alt="arrow" />
      </button>
      {currentPage > 3 && (
        <button className={styles.pageButton} onClick={() => onPageChange(1)}>
          01
        </button>
      )}
      {currentPage > 3 && <span className={styles.ellipsis}>...</span>}
      {renderPageNumbers().slice(Math.max(0, currentPage - 3), currentPage + 2)}
      {currentPage < totalPages - 2 && (
        <span className={styles.ellipsis}>...</span>
      )}
      {currentPage < totalPages - 2 && (
        <button
          className={styles.pageButton}
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages < 10 ? `0${totalPages}` : totalPages}
        </button>
      )}
      <button
        className={styles.pageButton}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <Image width={8} height={8} src="/icons/arrow-right.svg" alt="arrow" />
      </button>
    </div>
  );
};

export default Pagination;
