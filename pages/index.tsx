import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import BasePage from '../components/basePage';
import Swirly from '../components/swirly';
import styles from './index.css';
import Link from 'next/link';

const Home = () => (
  <BasePage>
    <Head>
      <title>Home</title>
    </Head>

    <Nav hideName={true} fixed />
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <h1>Modularise your bot</h1>
        <p>Canal simplifies development workflows, allowing you to deploy rich features faster.</p>
        <Link href='/signup'><a className={styles.heroLink}>Get Started</a></Link>
      </div>
      <span className='flex' />
      <div className={styles.productImg}>
        <img src='/static/img/product.png' />
      </div>
    </section>
    <Swirly className={styles.backgroundSwirly} color={'#663446'} />
  </BasePage>
);

export default Home;
