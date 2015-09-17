var lastPos = null;
var timer = 0;
var display = false;

window.onscroll = function(){
  var body = document.getElementsByTagName('body')[0];

  var currentPos = window.scrollY;
  if ( lastPos != null ){
    var delta = currentPos - lastPos;
    console.log(delta);
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
