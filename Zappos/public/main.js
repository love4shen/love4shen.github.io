var lastPos = null;
var timer = 0;


window.onscroll = function(){
  var body = document.getElementsByTagName('body')[0];
  body.className = body.className.replace(/\bdisplayMenu\b/,'');

  var currentPos = window.scrollY;
  if ( lastPos != null ){
    var delta = currentPos - lastPos;
    if (delta < 0) {
      body.className += 'displayMenu';
    }
  }
  lastPos = currentPos;
  timer && clearTimeout(timer);
  timer = setTimeout(function () {
    lastPos = null;
  }, 100);
};
