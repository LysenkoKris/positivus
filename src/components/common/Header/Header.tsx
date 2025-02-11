import React from 'react';
import styles from './Header.module.css';
import { Logo } from '../../ui/Logo/Logo';
import { Navigation } from '../../Navigation/Navigation';
import { Button } from '../../Button/Button';

export const Header: React.FC = () => {
  return <header className={styles.header}>
    <Logo variant="header" />
    <div className={styles.header__content}>
      <Navigation variant="header" />
      <Button variant="secondary">Request a quote</Button>
    </div>
  </header>;
};

