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
var read = document.getElementsByClassName('real-font')[0];
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');
var speed = document.getElementById('speed');
var correct = document.getElementById('correct');


var artice = new Artice("冰灯是流行于中国北方的一种古老的民间艺术形式。因为独特的地域优势，黑龙江可以说是制作冰灯最早的地方。传说在很早以前，每到冬季的夜晚，在松嫩平原上，人们总会看到三五成群的农夫和渔民在悠然自得地喂马和捕鱼，他们所使用的照明工具就是用冰做成的灯笼。这便是最早的冰灯。当时制作冰灯的工艺也很简单，把水放进木桶里冻成冰坨，凿出空心，放个油灯在里面，用以照明，冰罩挡住了凛冽的寒风，黑夜里便有了不灭的灯盏，冰灯成了人们生活中不可缺少的帮手。后来，每逢新春佳节和上元之夜，人们又把它加以装饰，而成为供人观赏的独特的艺术表现形式。清代《黑龙江外纪》里对此有过详细的记载：“上元，城中张灯五夜，村落妇女来观剧者，车声彻夜不绝。有镂五六尺冰为寿星灯者，中燃双炬，望之如水晶人。”其时，冰灯在南方一些地方也相继出现过。乾隆、嘉庆年间，四川诗人张问陶曾写过一首专门描写冰灯的诗，题名就叫《冰灯》，诗云：“黑夜有炎凉，冰灯吐焰长。照来消热念，凿处漏寒光。影湿星沉水，神清月里霜。三冬足文史，底用探萤囊。”南京诗人金德荣在被谪戍新疆巴里坤时，在其古风长诗《巴里坤冰灯歌》中也咏叹道：“雪山高与天山接，上有万古不化雪。朔风一夜结作冰，裁雪妙手搏为冰。以矾入冰冰不化，以烛照冰光四射。五里之内尽通明，半月能教天不夜。元夕月轮照碧空，大千人入水晶宫。”", "冰灯")
artice.sliceStr(read);
artice.plan(read);
var readSpan = document.getElementsByClassName("change");
hit.addEventListener("keyup", artice.changeColor(readSpan, hit));


//artice.timeBegin(minutes, seconds, speed, correct);
