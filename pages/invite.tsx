import PanelBase from '../components/panelBase';
import React from 'react';
import BasePage from '../components/basePage';
import Nav from '../components/nav';
import Head from 'next/head';

const InvitePage = () => {
  let key;
  if (process.browser) {
    key = window.location.search && window.location.search.substr(1);
    if (!key) { // TODO perhaps validate the key?
      window.location.href = '/signup';
    }
  }

  return (
      <BasePage>
        <Head>
          <title>Closed beta - Canal</title>
          <meta name='robots' content='noindex'/>
        </Head>
        <Nav fixed/>
        <PanelBase>
          {key ? (<React.Fragment>
            <h2 style={{marginTop: 0}}>You're awesome!</h2>
            <p>Welcome to the Canal closed beta</p>
            <a href={'//api.canal.nz/oauth/discord/start?key=' + key}>Sign up</a>
          </React.Fragment>) : <span>Loading...</span>}
        </PanelBase>
      </BasePage>
  );
};

export default InvitePage;
