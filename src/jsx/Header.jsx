import React from 'react';
import ReactDOM from 'react-dom';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Yizheng Ding',
    };
    this.touch = undefined;
  }

  touch3DChange(force) {
    const headerNameElement = document.getElementsByClassName('header__name')[0];
    headerNameElement.textContent = 'Yizheng Shen';
  }

  onTouch(e) {
    e.preventDefault();
    this.touch = e.touches[0];
    //this.touch3DChange(touch.force);
  }

  onTouchEnd(e) {
    e.preventDefault();
    this.touch = undefined;
  }

  checkMacForce(e) {
    const headerNameElement = document.getElementsByClassName('header__name')[0];
    let force = e.webkitForce/3;
    //console.log(e.webkitForce/3);
    //this.touch3DChange(e.webkitForce/3);
    if (force > 0.75) {
      headerNameElement.textContent = 'Yizheng Shen';
    } else if (force > 0.64) {
      headerNameElement.textContent = 'Yizheng Sheg';
    } else if (force > 0.5) {
      headerNameElement.textContent = 'Yizheng Shng';
    } else if (force > 0.33){
      headerNameElement.textContent = 'Yizheng Sing';
    } else {
      headerNameElement.textContent = 'Yizheng Ding';
    }

  }

  componentDidMount() {
    const headerNameElement = document.getElementsByClassName('header__name')[0];
    headerNameElement.addEventListener('touchstart', this.onTouch, false);
    headerNameElement.addEventListener('touchmove', this.onTouch, false);
    headerNameElement.addEventListener('touchend', this.onTouchEnd, false);
    headerNameElement.addEventListener('webkitmouseforcewillbegin', this.checkMacForce, false);
    headerNameElement.addEventListener('webkitmouseforcechanged', this.checkMacForce, false);
  }
  componentWillUnmount() {
    const headerNameElement = document.getElementsByClassName('header__name')[0];
    headerNameElement.removeEventListener('touchstart', this.onTouch);
    headerNameElement.removeEventListener('touchmove', this.onTouch);
    headerNameElement.removeEventListener('touchend', this.onTouchEnd);
    headerNameElement.removeEventListener('webkitmouseforcewillbegin', checkMacForce);
    headerNameElement.removeEventListener('webkitmouseforcechanged', checkMacForce);
  }
  render() {
    return (
      <header className="home__header header">
        <h1 className="header__name">{this.state.name}</h1>
      </header>
    );
  }
}
