function Artic(main) {
  return {
    main: main,
    
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
      return this.trueNums / this.numWords
    }
  }
}
