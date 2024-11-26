'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './styles.module.css';
import { Rectangle } from '@/components';

gsap.registerPlugin(ScrollTrigger);

const LeftRectangleContainer = () => {
  const leftSmallRectangle = useRef<HTMLDivElement | null>(null);
  const leftLargeRectangle = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(leftSmallRectangle.current, {
        duration: 0.5,
        translateX: '-60%',
        onComplete: () => {
          gsap.to(leftSmallRectangle.current, {
            scrollTrigger: {
              trigger: '#hero',
              start: '45% center',
              end: '80% center',
              scrub: true,
            },
            opacity: 0.55,
            rotate: '150deg',
            scale: 0.65,
            translateY: '-400px',
            translateX: '10%',
          });
        },
      });
      gsap.to(leftLargeRectangle.current, {
        duration: 0.5,
        translateX: '-30%',
        delay: 0.3,
        onComplete: () => {
          gsap.to(leftLargeRectangle.current, {
            scrollTrigger: {
              trigger: '#hero',
              start: '55% center',
              end: 'bottom center',
              scrub: true,
            },
            opacity: 0.5,
            scale: 0.65,
            rotate: '150deg',
            translateY: '-600px',
            translateX: '30%',
          });
        },
      });
    });
    return () => ctx.revert();
  });
  return (
    <div
      data-testid='leftRectangleContainer'
      className={styles.leftRectangleContainer}
    >
      <div data-testid='leftSmallRectangle' ref={leftSmallRectangle}>
        <Rectangle />
      </div>
      <div data-testid='leftLargeRectangle' ref={leftLargeRectangle}>
        <Rectangle />
      </div>
    </div>
  );
};

export default LeftRectangleContainer;
