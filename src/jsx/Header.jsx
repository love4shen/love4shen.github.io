import React from 'react';

export default () => {
  const name = 'Yizheng Ding';

  // touch3DChange(force) {
  //   const headerNameElement = document.getElementsByClassName('header__name')[0];
  //   headerNameElement.textContent = 'Yizheng Shen';
  // }
  //
  // onTouch(e) {
  //   e.preventDefault();
  //   this.touch = e.touches[0];
  //   //this.touch3DChange(touch.force);
  // }
  //
  // onTouchEnd(e) {
  //   e.preventDefault();
  //   this.touch = undefined;
  // }
  //
  // checkMacForce(e) {
  //   const headerNameElement = document.getElementsByClassName('header__name')[0];
  //   let force = e.webkitForce/3;
  //   //console.log(e.webkitForce/3);
  //   //this.touch3DChange(e.webkitForce/3);
  //   if (force > 0.75) {
  //     headerNameElement.textContent = 'Yizheng Shen';
  //   } else if (force > 0.64) {
  //     headerNameElement.textContent = 'Yizheng Sheg';
  //   } else if (force > 0.5) {
  //     headerNameElement.textContent = 'Yizheng Shng';
  //   } else if (force > 0.33){
  //     headerNameElement.textContent = 'Yizheng Sing';
  //   } else {
  //     headerNameElement.textContent = 'Yizheng Ding';
  //   }
  //
  // }
  //
  // componentDidMount() {
  //   const headerNameElement = document.getElementsByClassName('header__name')[0];
  //   headerNameElement.addEventListener('touchstart', this.onTouch, false);
  //   headerNameElement.addEventListener('touchmove', this.onTouch, false);
  //   headerNameElement.addEventListener('touchend', this.onTouchEnd, false);
  //   headerNameElement.addEventListener('webkitmouseforcewillbegin', this.checkMacForce, false);
  //   headerNameElement.addEventListener('webkitmouseforcechanged', this.checkMacForce, false);
  // }
  // componentWillUnmount() {
  //   const headerNameElement = document.getElementsByClassName('header__name')[0];
  //   headerNameElement.removeEventListener('touchstart', this.onTouch);
  //   headerNameElement.removeEventListener('touchmove', this.onTouch);
  //   headerNameElement.removeEventListener('touchend', this.onTouchEnd);
  //   headerNameElement.removeEventListener('webkitmouseforcewillbegin', checkMacForce);
  //   headerNameElement.removeEventListener('webkitmouseforcechanged', checkMacForce);
  // }

  function displayNotification() {
    const Notification = window.Notification || window.mozNotification || window.webkitNotification;

    Notification.requestPermission((permission) => {
      // console.log(permission);
    });

    window.setTimeout(() => {
      var instance = new Notification(
        "Secret From Shen", {
          body: '好想好想你',
          // icon: 'http://images.dailytech.com/nimage/G_is_For_Google_New_Logo_Thumb.png'
        }
      );

      instance.onclick = () => {};
      instance.onerror = () => {};
      instance.onshow = () => {};
      instance.onclose = () => {};
    },
    500);

    return false;
  };

  return (
    <header className="home__header header">
      <h1 className="header__name" onClick={displayNotification}>{name}</h1>
    </header>
  );
}
