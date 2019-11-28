import React from 'react';
import Link from 'next/link';
import styles from './nav.css';

const Nav = (props) => (
  <React.Fragment>
    <div className={styles.banner}>
      <p><b>Canal is currently offline:</b> due to hosting issues, Canal is offline indefinitely. Sorry :(</p>
    </div>
    <nav className={[styles.nav, props.fixed ? styles.fixedNav : ''].join(' ')}>
      <Link href='/'>
        <a className={styles.navTitle}>
          <img className={styles.navIcon} src={props.hideName ? '/static/img/icon.svg' : '/static/img/lockup.svg'} alt='Canal' />
        </a>
      </Link>
      <span className='flex' />
      <Link href='//www.notion.so/Canal-Documentation-c782021e27d64d628f09ce2db902bec6'>
        <a>Docs</a>
      </Link>
      <Link href='/signup'>
        <a className={styles.button}>Get Started</a>
      </Link>
    </nav>
  </React.Fragment>
);

export default Nav;
