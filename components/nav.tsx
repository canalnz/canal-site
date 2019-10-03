import React from 'react';
import Link from 'next/link';
import styles from './nav.css';

const Nav = (props) => (
  <nav className={[styles.nav, props.fixed ? styles.fixedNav : ''].join(' ')}>
    <Link href='/'>
      <a className={styles.navTitle}>
        <img className={styles.navIcon} src='/static/img/icon.svg' />
        {!props.hideName && <h2>Canal</h2>}
      </a>
    </Link>
    <span className='flex' />
    {/*<Link href='/about'>*/}
    {/*  <a>About</a>*/}
    {/*</Link>*/}
    <Link href='//www.notion.so/Canal-Documentation-c782021e27d64d628f09ce2db902bec6'>
      <a>Docs</a>
    </Link>
    <Link href='/signup'>
      <a className={styles.button}>Get Started</a>
    </Link>
  </nav>
);

export default Nav;
