import React from 'react';
import ReactDOM from 'react-dom';

export default () => {
  const links = {
    GitHub: 'https://github.com/tinirlove',
    Email: 'mailto:dingx292@umn.edu',
  };

  return (
    <ul className="footer__socials fsocials">
      {Object.keys(links).map((link, i, arr)=>{
        return (
          <li key={i} className="fsocials__social"><a href={arr[link]} target="_blank">{link}</a></li>
        )
      }, this)}
    </ul>
  );
}
