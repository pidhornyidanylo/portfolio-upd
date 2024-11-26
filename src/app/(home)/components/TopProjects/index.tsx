import React from 'react';
import styles from './styles.module.css';
import TopProjectsList from './components/TopProjectsList';

const TopProjects = () => {
  return (
    <section className={styles.projectsSection}>
      <h3 className={styles.title}>Top Projects</h3>
      <TopProjectsList />
    </section>
  );
};

export default TopProjects;
