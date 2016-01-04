import React from 'react';
import ReactDOM from 'react-dom';

export default class Footer__Social extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: {
        GitHub: 'https://github.com/tinirlove',
        Email: 'mailto:dingx292@umn.edu',
      }
    };
  }
  render() {
    return (
      <ul className="footer__socials fsocials">
        {Object.keys(this.state.links).map((link, i)=>{
          return (
            <li key={i} className="fsocials__social"><a href={this.state.links[link]} target="_blank">{link}</a></li>
          )
        }, this)}
      </ul>
    );
  }
}
