import React from 'react';
import BasePage from '../components/basePage';
import Nav from '../components/nav';
import styles from './signup.css';
import PanelBase from '../components/panelBase';
import Link from 'next/link';

const SignupPage = () => (
  <BasePage>
    <Nav fixed/>
    <PanelBase>
      <h2>Canal is currently in closed beta</h2>
      <p>We're currently testing with a limited group of users, while Canal is still being built.
        Sign up to ask for access.</p>
      <div className={styles.opts}>
        <Link href='//api.canal.pointless.me/oauth/start'><a>Login</a></Link>
        <span className={styles.divider} />
        <a href='//google.com'>Sign up</a>
      </div>
    </PanelBase>
  </BasePage>
);

export default SignupPage;
