import React from 'react';
import Image from 'next/image';
import { logo } from '../../media';
import Navigation from './components/Navigation';
import LogoName from './components/LogoName';
import styles from './styles.module.css';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <Image src={logo} alt={'logo-icon'} />
        <LogoName />
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
