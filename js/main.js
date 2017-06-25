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
var hit = document.getElementsByClassName('hit')[0];
hit.value = "adfasdfadsf\naafadfasdfadsf\naafadfasdfadsf\naafadfasdfadsf\naafadfasdfadsf\naaf"
var read = document.getElementsByClassName('real-font')[0];
var font = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
var count = 0;
while(read.scrollHeight <= read.offsetHeight) {
  read.innerHTML = read.innerHTML + font[count];
  count++;
}
read.innerHTML = read.innerHTML.slice(0, -1);
