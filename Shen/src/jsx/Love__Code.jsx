import React from 'react';
import ReactDOM from 'react-dom';

export default class Love__Code extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: [
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
    };
  }
  render() {
    return (
      <div className="love__code ❤code">
        <header className="❤code__header">...Code</header>
        <ul className="❤code__list code-projs">
          {this.state.code.map((loveEntry, j)=>{
            return (
              <li key={j} className="code-projs__proj proj">
                <header><a href={loveEntry.url} target="_blank">{loveEntry.title}</a></header>
                <div className="proj__tools">
                  {loveEntry.tools.join(' | ')}
                </div>
                <ul className="proj__logs proj-logs">
                  {loveEntry.logs.map((log, k)=>{
                    return (
                      <li key={k} className="proj-logs__log">{log}</li>
                    )
                  })}
                </ul>
              </li>
            )
          }, this)}
        </ul>
      </div>
    );
  }
}
