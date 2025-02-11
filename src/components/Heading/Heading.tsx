import React from 'react';
import styles from './Heading.module.css';

type HeadingVariant = 'green' | 'white' | 'black';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant?: HeadingVariant;
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({ 
  variant = 'green', 
  children
}) => {

  return (
    <h2 className={`${styles.heading} ${styles[variant]}`}>
        {children}
    </h2>
  );
};