import React from 'react';
import { Link } from 'react-router-dom';
import styles from './nav-header.module.css';

const NavHeaderComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.navList}>
        <Link to="">Description</Link>
        <Link to="">Features</Link>
        <Link to="">Screens</Link>
        <Link to="">Download</Link>
      </div>
    </div>
  )
}

export default NavHeaderComponent;