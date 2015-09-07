document.getElementById('minimalToggle').addEventListener('click', function(){
  if (!document.getElementsByTagName("body")[0].style.backgroundImage) {
    document.getElementsByTagName("body")[0].style.backgroundImage = '-webkit-linear-gradient(left bottom, rgba(200, 156, 208, 0) 0%, rgb(200, 156, 208) 100%), -webkit-linear-gradient(left top, rgba(232, 201, 234, 0) 0%, rgb(232, 201, 234) 100%), -webkit-linear-gradient(right top, rgba(75, 49, 67, 0) 0%, rgb(75, 49, 67) 100%), -webkit-linear-gradient(right bottom, rgba(104, 60, 149, 0) 0%, rgb(104, 60, 149) 100%)';
  } else {
    document.getElementsByTagName("body")[0].style.backgroundImage = '';
  }
});
