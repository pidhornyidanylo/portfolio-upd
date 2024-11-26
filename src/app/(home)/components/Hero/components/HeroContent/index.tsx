'use client';
import React, { useEffect } from 'react';
import { useRef } from 'react';
import { gsap } from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import styles from './styles.module.css';

gsap.registerPlugin(TextPlugin);

const HeroContent = () => {
  const heroName = useRef<HTMLHeadingElement | null>(null);
  const infoRef = useRef<HTMLParagraphElement | null>(null);

  const leftVerticalLine = useRef<HTMLSpanElement | null>(null);
  const leftHorizontalLine = useRef<HTMLSpanElement | null>(null);
  const rightVerticalLine = useRef<HTMLSpanElement | null>(null);
  const rightHorizontalLine = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const matchMedia = gsap.matchMedia();

    const desktopContext = matchMedia.add('(min-width: 769px)', () => {
      const ctx = gsap.context(() => {
        gsap.from(heroName.current, {
          delay: 0.5,
          duration: 2,
          text: '',
        });
        gsap.from(infoRef.current, {
          delay: 0,
          duration: 2,
          text: '',
        });
      });
      gsap.to(leftVerticalLine.current, {
        height: '90px',
        opacity: 1,
        delay: 2.3,
      });
      gsap.to(leftHorizontalLine.current, {
        width: '90px',
        opacity: 1,
        delay: 2.3,
      });
      gsap.to(rightVerticalLine.current, {
        height: '90px',
        opacity: 1,
        delay: 2.3,
      });
      gsap.to(rightHorizontalLine.current, {
        width: '90px',
        opacity: 1,
        delay: 2.3,
      });

      return () => ctx.revert();
    });
    return () => {
      desktopContext.revert();
      matchMedia.revert();
    };
  }, []);

  return (
    <div className={styles.contentContainer}>
      <div className={styles.topLeftAngle}>
        <span
          ref={leftVerticalLine}
          data-testid='left-vertical'
          className={styles.vertical}
        ></span>
        <span
          ref={leftHorizontalLine}
          data-testid='left-horizontal'
          className={styles.horizontal}
        ></span>
      </div>
      <h2 className={styles.name} ref={heroName}>
        Danylo
        <br /> Pidhornyi
      </h2>
      <p className={styles.info} ref={infoRef}>
        A front-end developer and aspiring full-stack developer.
      </p>
      <div className={styles.bottomRightAngle}>
        <span
          ref={rightVerticalLine}
          data-testid='right-vertical'
          className={styles.vertical}
        ></span>
        <span
          ref={rightHorizontalLine}
          data-testid='right-horizontal'
          className={styles.horizontal}
        ></span>
      </div>
    </div>
  );
};

export default HeroContent;
