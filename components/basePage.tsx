import React from 'react';
import Head from 'next/head';
import './basePage.css';

const BasePage = (props) => (
  <React.Fragment>
      <Head>
          <title>Canal - Modularise your bot</title>
      </Head>
      {props.children}
  </React.Fragment>
);

export default BasePage;
