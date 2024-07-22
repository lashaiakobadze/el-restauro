'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Breadcrumb.module.css';

const Breadcrumb: React.FC = () => {
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((x) => x);

  return (
    <nav className={styles.breadcrumb}>
      <ol className={styles.breadcrumbList}>
        <li className={styles.breadcrumbItem}>
          <Link href="/">მთავარი გვერდი</Link>
        </li>
        {pathnames.map((value, index) => {
          const isLast = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return isLast ? (
            <li
              key={to}
              className={`${styles.breadcrumbItem} ${styles.active}`}
            >
              {decodeURIComponent(value)}
            </li>
          ) : (
            <li key={to} className={styles.breadcrumbItem}>
              <Link href={to}>{decodeURIComponent(value)}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
