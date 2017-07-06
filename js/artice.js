function Artice(main, title) {
  return {
    main: main,
    next: main,
    history: [],
    title: title,
    now: "",
    numWords: 0,
    numWordsHistory: 0,
    trueNums: 0,
    trueNumsHistory: 0,
    time: 0,
    t: false,
    minutes: function() {
      return Math.floor(this.time / 60)
    },
    seconds: function() {
      return this.time % 60
    },
    timeBeautiful: function(num) {
      if(num < 10) {
        return '0' + num
      } else {
        return num
      }
    },
    timeBegin: function(minutesObj, secondsObj, countObj, speedObj, correctObj) {
      function tem(artice, minutesObj, secondsObj, speedObj, correctObj) {
        return function() {
          minutesObj.innerHTML = artice.timeBeautiful(artice.minutes());
          secondsObj.innerHTML = artice.timeBeautiful(artice.seconds());
          countObj.innerHTML = artice.numWords;
          speedObj.innerHTML = artice.speed();
          correctObj.innerHTML = artice.correct();
          artice.time += 1;
        }
      }
      this.t = setInterval(tem(artice, minutesObj, secondsObj, speedObj, correctObj), 1000);
    },
    timePause: function() {
      clearInterval(this.t);
    },
    speed: function() {
      return Math.round(this.numWords / ((this.minutes() + this.seconds() / 60) || 1))
    },
    correct: function() {
      return Math.round((this.trueNums / this.numWords * 100) || 0)
    },
    sliceStr: function(obj) {
      obj.innerHTML = null;
      for (var count=0; obj.scrollHeight <= obj.offsetHeight; count++) {
          obj.innerHTML += this.next[count];
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
      this.numWords = this.numWordsHistory;
      this.trueNums = this.trueNumsHistory;
      for(var num=0;num<hit.value.length;num++) {
        if(hit.value[num] == read[num].innerHTML) {
          read[num].style.color = "green";
          this.trueNums += 1;
        }else {
          read[num].style.color = "red";
        }
        this.numWords += 1;
      }
      for(var num=hit.value.length;num<read.length;num++) {
        read[num].style.color = "black";
      }
    }
  }
}
