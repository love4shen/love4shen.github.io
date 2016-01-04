import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import Love from './Love.jsx';
import Footer from './Footer.jsx';

export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home">
        <Header />
        <Love />
        <Footer />
      </div>
    );
  }
}
