var conBanner = document.getElementsByClassName('con-banner');

function getMousePos(event) {
  var e = event || window.event;
  return {'x':e.clientX, 'y':e.clientY}
}
var con = false;
var banner = document.getElementsByClassName('banner')[0];
banner.style.width = "300px";
var theReallMouse;
function getWidth(str) {
  return Number(str.split("").reverse().join("").substring(2).split("").reverse().join(""))
}
conBanner[0].addEventListener('mouseover', function() {
  conBanner[0].onmousedown = function() {
    con = true;
    theReallMouse = getWidth(banner.style.width)/getMousePos().x;
  }
})
document.addEventListener('mouseup', function() {
  con = false;
})
document.addEventListener('mousemove', function() {
  if(con) {
    banner.style.width = Math.floor(getMousePos().x*theReallMouse)+"px";
  }
})
conBanner[0].style.cursor="move";
