import React from 'react';

const AppRedirectPage = () => {
  if (process.browser) window.location.href = 'https://app.canal.nz';
  return (
    <h1>Redirecting you...</h1>
  );
};

export default AppRedirectPage;
