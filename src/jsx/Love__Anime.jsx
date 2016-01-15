import React from 'react';
import ReactDOM from 'react-dom';

export default ({animes}) => {
  return (
    <div className="love__animes animes">
      <header className="animes__header">...Animes</header>
      <ul className="animes__list animes">
        {animes.map((anime, i)=>{
          let header = anime.title;
          return (
            <li key={i} className="animes__anime anime">
              <header className="anime__header">{header}</header>
            </li>
          )
        }, this)}
      </ul>
    </div>
  );
}
