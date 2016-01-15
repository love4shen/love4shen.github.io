import React from 'react';

import Love__Code from './Love__Code.jsx';
import Love__Anime from './Love__Anime.jsx';

export default ({codes, animes}) => {
  return (
    <main className="home__love love">
      <Love__Code {...{codes}}/>
      <Love__Anime {...{animes}}/>
    </main>
  );
}
