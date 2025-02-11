import React from 'react';
import logoHeader from '../../../assets/images/logo-header.svg';
import logoFooter from '../../../assets/images/logo-footer.svg';
import styles from './Logo.module.css';

type LogoVariant = 'header' | 'footer';

interface LogoProps {
  variant: LogoVariant;
}

export const Logo: React.FC<LogoProps> = ({ variant }) => {
  const logoPath = variant === 'header' ? logoHeader : logoFooter;

  return (
    <div className={styles.logo}>
      <a href="/">
        <img 
          src={logoPath} 
          alt="Логотип"
          className={`${styles[`logo_variant_${variant}`]}`}
        />
      </a>
    </div>
  );
}; 