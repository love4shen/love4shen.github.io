import React from 'react';
import ReactDOM from 'react-dom';

import Footer__Social from './Footer__Social.jsx';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      version: '0.3.0',
    };
  }
  render() {
    return (
      <footer className="home__footer footer">
        <div className="footer__clarification">v {this.state.version} Made with C2</div>
        <Footer__Social />
      </footer>
    );
  }
}
