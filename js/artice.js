function Artice(main, title) {
  return {
    main: main,
    next: main,
    history: [],
    title: title,
    now: "",
    numWords: 0,
    trueNums: 0,
    time: 0,
    minutes: function() {
      return this.time / 60
    },
    seconds: function() {
      return this.time % 60
    },
    speed: function() {
      return this.numWords / this.minutes();
    },
    correct: function() {
      return this.trueNums / this.numWords * 100
    },
    sliceStr: function(obj) {
      for (var count=0; obj.scrollHeight <= obj.offsetHeight; count++) {
          obj.innerHTML = obj.innerHTML + this.next[count];
      }
      count--;
      this.now = this.next.slice(0,count);
      this.next = this.next.slice(count);
      this.history.push([this.now]);
    },
    plan: function(obj) {
      obj.innerHTML = null;
      for(var num=0; num<this.now.length; num++) {
          obj.innerHTML += "<span class=\"change\">"+this.now[num]+"</span>";
      }
    },
    changeColor: function(read, hit) {
      return function() {
        for(var num=0;num<hit.value.length+1;num++) {
          if(hit.value[num] == read[num].innerHTML) {
            read[num].style.color = "green";
          }else {
            read[num].style.color = "red";
          }
        }
        for(var num=hit.value.length;num<read.length;num++) {
          read[num].style.color = "black";
        }
      }
    }
  }
}
