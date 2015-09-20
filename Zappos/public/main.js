var lastPos = null;
var timer = 0;
var display = false;
var body = document.getElementsByTagName('body')[0];

window.onscroll = function () {
  var currentPos = window.scrollY;
  if (lastPos !== null) {
    var delta = currentPos - lastPos;
    body.className = body.className.replace(/\bdisplayMenu\b/,'');
    if (delta < -50 && !display) {
      body.className += 'displayMenu';
      display = true;
    } else if (delta > 10 && display) {
      display = false;
    }
  }
  lastPos = currentPos;
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(function () {
    lastPos = null;
  }, 100);
};

var navLinks = document.querySelectorAll('nav > ul > a');

for (var i in navLinks) {
  navLinks[i].onclick = function () {
    body.className = body.className.replace(/\bdisplayMenu\b/,'');
  };
}

console.log('%c Happy to see you here!', 'background-color: #ffcc33; color: #7a0019; font-weight: bold; font-size: 2rem;');
console.log('');
console.log('Scroll up fast enough to unveil the navigation menu and scroll down to hide it');
console.log('');
console.log('[.__.]');
