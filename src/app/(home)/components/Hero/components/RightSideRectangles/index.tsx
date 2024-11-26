'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Rectangle } from '@/components';
import styles from './styles.module.css';

gsap.registerPlugin(ScrollTrigger);

const RightRectanleContainer = () => {
  const rightSmallRectangle = useRef<HTMLDivElement | null>(null);
  const rightLargeRectangle = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(rightSmallRectangle.current, {
        duration: 0.5,
        translateX: '60%',
        onComplete: () => {
          gsap.to(rightSmallRectangle.current, {
            scrollTrigger: {
              trigger: '#hero',
              start: '-20px top',
              end: '75% center',
              scrub: true,
            },
            opacity: 0.6,
            rotate: '-1deg',
            translateX: '-25%',
            translateY: '50px',
          });
        },
      });
      gsap.to(rightLargeRectangle.current, {
        duration: 0.5,
        translateX: '30%',
        delay: 0.3,
        onComplete: () => {
          gsap.to(rightLargeRectangle.current, {
            scrollTrigger: {
              trigger: '#hero',
              start: '-40px top',
              end: 'bottom center',
              scrub: true,
            },
            opacity: 0.4,
            rotate: '45deg',
            translateX: '-25%',
          });
        },
      });
    });

    return () => ctx.revert();
  });

  return (
    <div
      data-testid='rightRectangleContainer'
      className={styles.rightRectangleContainer}
    >
      <div data-testid='rightLargeRectangle' ref={rightLargeRectangle}>
        <Rectangle />
      </div>
      <div data-testid='rightSmallRectangle' ref={rightSmallRectangle}>
        <Rectangle />
      </div>
    </div>
  );
};

export default RightRectanleContainer;
