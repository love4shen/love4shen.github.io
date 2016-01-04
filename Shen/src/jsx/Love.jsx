import React from 'react';
import ReactDOM from 'react-dom';

import Love__Code from './Love__Code.jsx';
import Love__Anime from './Love__Anime.jsx';

export default class Love extends React.Component {
  render() {
    return (
      <main className="home__love love">
        <Love__Code />
        <Love__Anime />
      </main>
    );
  }
}
