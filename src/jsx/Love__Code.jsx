import React from 'react';
import ReactDOM from 'react-dom';

export default ({codes}) => {
  return (
    <div className="love__code ❤code">
      <header className="❤code__header">...Code</header>
      <ul className="❤code__list code-projs">
        {codes.map((code, j)=>{
          return (
            <li key={j} className="code-projs__proj proj">
              <header className="proj__header"><a href={code.url} target="_blank">{code.title}</a></header>
              <div className="proj__tools">
                {code.tools.join(' | ')}
              </div>
              <ul className="proj__logs proj-logs">
                {code.logs.map((log, k)=>{
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
