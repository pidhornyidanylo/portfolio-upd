'use client';
import React, { useEffect, useRef, useState } from 'react';
import NavLink from '../NavLink';
import styles from './styles.module.css';
import Burger from './Burger';

const navigationData = [
  {
    path: 'Home',
    href: '/',
  },
  {
    path: 'Projects',
    href: '/projects',
  },
  {
    path: 'Contact',
    href: '/contact',
  },
  {
    path: 'Resume',
    href: '/resume',
  },
];

const Navigation = () => {
  const menuRef = useRef<HTMLUListElement | null>(null);
  const [showBurger, setShowBurger] = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowBurger(window.innerWidth < 992);
      setShowBurgerMenu(false);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowBurgerMenu(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showBurgerMenu]);

  return (
    <nav className={styles.navContainer}>
      {showBurger ? (
        <>
          <Burger
            showBurgerMenu={showBurgerMenu}
            setShowBurgerMenu={setShowBurgerMenu}
          />
          {showBurgerMenu && (
            <ul ref={menuRef} className={styles.navListAbs}>
              {navigationData.map((navigationItem) => (
                <li key={navigationItem.path}>
                  <NavLink
                    type='burger'
                    path={navigationItem.path}
                    href={navigationItem.href}
                  />
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <ul className={styles.navList}>
          {navigationData.map((navigationItem) => (
            <li key={navigationItem.path}>
              <NavLink
                type='normal'
                path={navigationItem.path}
                href={navigationItem.href}
              />
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
