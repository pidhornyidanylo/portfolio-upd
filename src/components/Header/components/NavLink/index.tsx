'use client';
import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
  path: string;
  href: string;
  type: 'normal' | 'burger';
};

const NavLink: React.FC<NavLinkProps> = ({
  path,
  href,
  type,
}: NavLinkProps) => {
  const pathname = usePathname();
  const isCurrentPathname = pathname === href;
  return (
    <Link
      className={`${styles.link}${type === 'burger' ? ' ' + styles.burger : ''}${isCurrentPathname ? ' ' + styles.active : ''}`}
      href={href}
    >
      {path}
    </Link>
  );
};

export default NavLink;
