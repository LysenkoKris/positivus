import React from 'react';
import styles from './Navigation.module.css';
import { AppRoute } from '../../const';

type NavigationVariant = 'header' | 'footer';

interface NavigationProps {
  variant: NavigationVariant;
}

export const Navigation: React.FC<NavigationProps> = ({ variant }) => {
  return (
    <nav className={`${styles.navigation}`}>
      <ul className={styles.navigation__list}>
        <li className={styles.navigation__item}>
          <a href={AppRoute.AboutUs} className={`${styles[`navigation__link__${variant}`]}`}>
            About us
          </a>
        </li>
        <li className={styles.navigation__item}>
          <a href={AppRoute.Services} className={`${styles[`navigation__link__${variant}`]}`}>
            Services
          </a>
        </li>
        <li className={styles.navigation__item}>
          <a href={AppRoute.UseCases} className={`${styles[`navigation__link__${variant}`]}`}>
            Use Cases
          </a>
        </li>
        <li className={styles.navigation__item}>
          <a href={AppRoute.Pricing} className={`${styles[`navigation__link__${variant}`]}`}>
            Pricing
          </a>
        </li>
        <li className={styles.navigation__item}>
          <a href={AppRoute.Blog} className={`${styles[`navigation__link__${variant}`]}`}>
            Blog
          </a>
        </li>
      </ul>
    </nav>
  );
};


