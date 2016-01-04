import React from 'react';
import ReactDOM from 'react-dom';

export default class Love__Anime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animes: [
        {
          'title': 'Clannad'
        },
        {
          'title': 'Clannad: After Story'
        },
        {
          'title': 'Anohana: The Flower We Saw That Day',
          'origin-title': 'あの日見た花の名前を僕達はまだ知らない'
        },
        {
          'title': 'Steins;Gate',
        },
        {
          'title': 'A Certain Magical Index',
          'origin-title': 'とある魔術の禁書目録',
        },
        {
          'title': 'A Certain Scientific Railgun',
          'origin-title': 'とある科学の超電磁砲'
        },
        {
          'title': 'Air',
        },
        {
          'title': 'Guilty Crown',
          'origin-title': 'ギルティクラウン'
        },
        {
          'title': 'Tokyo Ravens',
          'origin-title': '东京レイヴンズ'
        },
        {
          'title': 'Neon Genesis Evangelion',
          'origin-title': '新世紀エヴァンゲリオン'
        },
        {
          'title': 'Magic Kaito',
          'origin-title': 'まじっく快斗'
        }
      ],
    }
  }
  render() {
    return (
      <div className="love__animes animes">
        <header className="animes__header">...Animes</header>
        <ul className="animes__list animes">
          {this.state.animes.map((anime, i)=>{
            let header = anime.title;
            // if (anime['origin-title'] !== '' && anime['origin-title'] !== undefined) {
            //   header += ' | ' + anime['origin-title'];
            // }

            return (
              <li key={i} className="animes__anime anime">
                <header>{header}</header>
              </li>
            )
          }, this)}
        </ul>
      </div>
    );
  }
}
