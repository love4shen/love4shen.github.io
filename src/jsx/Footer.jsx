import React from 'react';

import Footer__Social from './Footer__Social.jsx';

export default ({version}) => {
  return (
    <footer className="home__footer footer">
      <div className="footer__clarification">v {version} Made with C2</div>
      <Footer__Social />
    </footer>
  );
}
