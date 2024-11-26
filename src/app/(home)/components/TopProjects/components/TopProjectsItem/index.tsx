import React from 'react';
import Image from 'next/image';
import Cover from '../../../../../../../public/images/cover-1.jpg';
import Code from '../../../../../../../public/icons/GitHub.svg';
import Deploy from '../../../../../../../public/icons/Deploy.svg';
import styles from './styles.module.css';
import Link from 'next/link';

const TopProjectsItem = ({ el }: { el: number }) => {
  return (
    <div id={`card-${el}`} className={`${styles.card} ${styles[`card${el}`]}`}>
      <div className={styles.imageContainer}>
        <Image src={Cover} alt={'cover'} fill />
      </div>
      <h4 className={styles.cardTitle}>.cover</h4>
      <div className={styles.tags}>
        <span>TypeScript</span>
        <span>Webpack</span>
        <span>Jest</span>
      </div>
      <p className={styles.info}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <div className={styles.social}>
        <Link href={''}>
          <Image src={Code} alt={'github-icon'} />
        </Link>
        <Link href={''}>
          <Image src={Deploy} alt={'deploy-icon'} />
        </Link>
      </div>
    </div>
  );
};

export default TopProjectsItem;
