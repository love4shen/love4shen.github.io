var lastPos = null;
var timer = 0;
var display = false;
var body = document.getElementsByTagName('body')[0];

window.onscroll = function () {
  var currentPos = window.scrollY;
  if (lastPos != null) {
    var delta = currentPos - lastPos;
    if (delta < -50 && !display) {
      body.className = body.className.replace(/\bdisplayMenu\b/,'');
      body.className += 'displayMenu';
      display = true;
    } else if (delta > 10 && display) {
      body.className = body.className.replace(/\bdisplayMenu\b/,'');
      display = false;
    }
  }
  lastPos = currentPos;
  timer && clearTimeout(timer);
  timer = setTimeout(function () {
    lastPos = null;
  }, 100);
};

var navLinks = document.querySelectorAll('nav > ul > a');

for (var i in navLinks) {
  navLinks[i].onclick = function () {
    body.className = body.className.replace(/\bdisplayMenu\b/,'');
  }
}

console.log('%c Happy to see you here!', 'background-color: #ffcc33; color: #7a0019; font-weight: bold; font-size: 2rem;');
console.log('I\'ve been always hated the hamburger menu, I want to create a new way of navigation')
console.log('Navigation on Apple\'s homepage is creative and beautiful, but still not the way I want')
console.log('Github Universe\' navigation inspired me in some way')
console.log('And there is somthing in the webpage I got')
console.log('No multiple tabs, ALL inforamtion on one page in order')
console.log('Scroll up fast enough to unveil the navigation menu and scroll down to hide it again')
console.log('This may (is) not the best way of naviagtion')
console.log('');
console.log('I personally prefer no image, no icon, using text whenever I can.')
console.log('I can use a lot of pictures, fancy fonts to attract people\' eyes, but that is just not my way of building a site, an web app.')
console.log('I try to convey the most important thing for user who can use minimal amount of time to get the information they just need')
console.log('Easy is beautiful, do you agree?')
console.log('If you do not agree, but if I am lucky enough that you have ever liked the site, even just half a sec, will you consider hire me?')
console.log('Thanks for giving me such an opportunity to express my own ideas by making up all of these')
console.log('');
console.log('[.__.]')
