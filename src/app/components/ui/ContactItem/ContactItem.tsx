import React from 'react';
import Image from 'next/image';
import styles from './ContactItem.module.css';

interface ContactItemProps {
  icon: string;
  link: string;
  width?: number;
  height?: number;
  borderColor?: string;
  borderOpacity?: number;
}

const ContactItem: React.FC<ContactItemProps> = ({
  icon,
  link,
  width = 36,
  height = 36,
  borderColor = '#0A142F',
  borderOpacity = 0.06,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.contactItem}
      style={
        {
          '--border-color': borderColor,
          '--border-opacity': borderOpacity,
        } as React.CSSProperties
      }
    >
      <Image src={icon} alt="icon" width={width / 2} height={height / 2} />
    </a>
  );
};

export default ContactItem;
