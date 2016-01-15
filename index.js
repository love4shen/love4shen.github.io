var React = require('react');
var ReactDOM = require('react-dom');

import Homepage from './src/jsx/Homepage.jsx';

import './src/vendor/snow/common.css';
import './src/style/main.css';

const data = {
  version: '0.3.0',
  codes: [
    {
      title: 'Purify Reading Experience Beta',
      url: 'http://tinirlove.bitbucket.org/Rurify/',
      tools: ['node.js', 'Express', 'Readability API', 'Babel', 'ES2015'],
      logs: [
        'just basic functionality, keep adding...',
      ]
    },
    {
      title: 'UMN Course Search App',
      url: 'http://umn-course-select.herokuapp.com',
      tools: ['node.js', 'Express', 'courses.umn.edu API'],
      logs: [
        'inspired by the course search app built with React by the course api team on UMN Codefest 2015',
        'little bit slowwwwwwww. :(',
      ]
    },
    {
      title: 'Simple Chat Room',
      url: 'http://tinir-chatty.herokuapp.com',
      'tools': ['node.js', 'Express', 'MongoDB', 'socket.io', 'Jade', 'passport'],
      logs: [
        'not responsive yet'
      ]
    },
    {
      title: 'Water Dynamic Mapping',
      url: 'http://arizona-umh.cs.umn.edu/WaterMonitor/',
      tools: ['d3.js', 'PostgreSQL/PostGIS', 'openlayers 3', 'jQuery', 'Geoserver'],
      logs: [
        'based on Robert Leuenberger\'s front end work, reconstructed the page design, added reponsivibility, greatly optimized polygon loading speed',
        'refer to official site for lastest version (though not maintained by me any more, but still exiciting)',
      ]
    },
    {
      title: 'Resilience Convergence',
      url: 'http://resilience.umn.edu',
      tools: ['jQuery'],
      logs: [
        'Non-responsive. First time to build a site from scatch, coded everything except \'Topic Map\' part according to PSD file designed by a Professor from College of Design, Unversity of Minnesota Twin Cities. Done within 2 weeks while doing other 3 jobs as a full-time student.'
      ]
    }
  ],
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

ReactDOM.render(<Homepage {...data} />, document.getElementById('anchor'));
