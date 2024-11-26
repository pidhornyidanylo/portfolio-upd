'use client';
import React, { useEffect } from 'react';
import TopProjectsItem from '../TopProjectsItem';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './styles.module.css';

gsap.registerPlugin(ScrollTrigger);

const TopProjectsList = () => {
  useEffect(() => {
    const matchMedia = gsap.matchMedia();
    const desktopContext = matchMedia.add('(min-width: 992px)', () => {
      const ctx = gsap.context(() => {
        gsap.to('#card-1', {
          scrollTrigger: {
            trigger: '#cards-container',
            start: '-500px center',
            end: '-450px center',
            scrub: 2,
          },
          top: '0px',
        });
        gsap.to('#card-2', {
          scrollTrigger: {
            trigger: '#cards-container',
            start: '-420px center',
            end: '-380px center',
            scrub: 2,
          },
          top: '0px',
        });
        gsap.to('#card-3', {
          scrollTrigger: {
            trigger: '#cards-container',
            start: 'start center',
            end: '50px center',
            scrub: 2,
          },
          top: '0px',
        });
        gsap.to('#card-4', {
          scrollTrigger: {
            trigger: '#cards-container',
            start: '80px center',
            end: '120px center',
            scrub: 2,
          },
          top: '0px',
        });
      });
      return () => ctx.revert();
    });
    const tabletContext = matchMedia.add('(max-width: 991px)', () => {
      const ctx = gsap.context(() => {
        gsap.to('#card-1', {
          scrollTrigger: {
            trigger: '#cards-container',
            start: '-600px center',
            end: '-450px center',
            scrub: 2,
          },
          top: '0px',
        });
        gsap.to('#card-2', {
          scrollTrigger: {
            trigger: '#cards-container',
            start: 'start center',
            end: '50px center',
            scrub: 2,
          },
          top: '0px',
        });
        gsap.to('#card-3', {
          scrollTrigger: {
            trigger: '#cards-container',
            start: '650px center',
            end: '700px center',
            scrub: 2,
          },
          top: '0px',
        });
        gsap.to('#card-4', {
          scrollTrigger: {
            trigger: '#cards-container',
            start: '1300px center',
            end: '1350px center',
            scrub: 2,
          },
          top: '0px',
        });
      });
      return () => ctx.revert();
    });
    return () => {
      desktopContext.revert();
      tabletContext.revert();
      matchMedia.revert();
    };
  }, []);
  return (
    <div className={styles.projectsContent}>
      <div id='cards-container' className={styles.cardsContainer}>
        {[1, 2, 3, 4].map((el) => (
          <TopProjectsItem key={el} el={el} />
        ))}
      </div>
    </div>
  );
};

export default TopProjectsList;
