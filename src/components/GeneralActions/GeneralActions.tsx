'use client';
import React from 'react';
import styles from './GeneralActions.module.css';
import GeneralActionsItem from '../GeneralActionsItem/GeneralActionsItem';
import Link from 'next/link';

interface GeneralActionsProps {
  props?: string;
}

const GeneralActions: React.FC<GeneralActionsProps> = ({ props }) => {
  props ? console.log(props) : null;

  return (
    <div className={styles.actions}>
      <div className={styles.useActions}>
        <GeneralActionsItem text={'შენახული'} icon={'saved'} />

        <Link href={'/cart'}>
          <GeneralActionsItem text={'კალათა'} icon={'cart'} />
        </Link>
      </div>

      <div className={styles.useActionsAuth}>
        <div className={styles.useActionsAuthImg}>
          <img src="/icons/user.svg" alt="user" />
          <img src="/icons/user_hover.svg" alt="user" />
        </div>
        <div className={styles.useActionsAuthTxt}>User</div>
      </div>

      <div className={styles.lang}>
        <div className={styles.item}>
          GE <img src={'icons/arrow-down.svg'} alt="arrow" />
        </div>
        {/* <ul>
          <li>GE</li>
          <li>RU</li>
          <li>EN</li>
        </ul> */}
      </div>
    </div>
  );
};

export default GeneralActions;
