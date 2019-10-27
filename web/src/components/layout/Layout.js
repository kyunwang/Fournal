import '../../styles/global.css';

import React from 'react';
import { Helmet } from 'react-helmet';

// import favicon
// import navigation

const Layout = ({ children }) => (
  <>
    <Helmet>
      <html lang="en" />
      {/* <link rel="icon" href={favicon} /> */}
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
    <main>{children}</main>
  </>
);

export default Layout;
