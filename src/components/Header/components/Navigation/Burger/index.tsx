import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { gsap } from 'gsap';
import styles from './styles.module.css';

type BurgerProps = {
  showBurgerMenu: boolean;
  setShowBurgerMenu: Dispatch<SetStateAction<boolean>>;
};

const Burger: React.FC<BurgerProps> = ({
  showBurgerMenu,
  setShowBurgerMenu,
}: BurgerProps) => {
  useEffect(() => {
    const tl = gsap.timeline();
    if (showBurgerMenu) {
      tl.to('#line-one', { translateY: 10, duration: 0.1 })
        .to('#line-three', { translateY: -10, duration: 0.1 })
        .to('#line-two', { opacity: 0, duration: 0.1 })
        .to('#line-one', { rotate: '45deg', duration: 0.1 })
        .to('#line-three', {
          rotate: '-45deg',
          duration: 0.1,
          translateY: -10.5,
        });
    } else {
      tl.to('#line-one', { rotate: 0, duration: 0.1 })
        .to('#line-three', { rotate: 0, duration: 0.1 })
        .to('#line-two', { opacity: 1, duration: 0.1 })
        .to('#line-one', { translateY: 0, duration: 0.1 })
        .to('#line-three', { translateY: 0, duration: 0.1 });
    }

    return () => {
      tl.kill();
    };
  }, [showBurgerMenu]);
  return (
    <div
      id='burger'
      className={styles.navBurger}
      onClick={() => setShowBurgerMenu(!showBurgerMenu)}
    >
      <span id='line-one' />
      <span id='line-two' />
      <span id='line-three' />
    </div>
  );
};

export default Burger;
