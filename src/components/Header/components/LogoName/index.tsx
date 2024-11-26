'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './styles.module.css';

const LogoName = () => {
  const logoName = useRef<HTMLHeadingElement | null>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(logoName.current, {
        duration: 1,
        text: 'Danylo Pidhornyi',
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <h3 ref={logoName} data-testid='logo' className={styles.logoName}></h3>
  );
};

export default LogoName;
