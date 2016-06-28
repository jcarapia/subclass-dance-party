var pacmanBlinker = function(top, left, timeBeforeCall){
  makeDancer.call(this,top, left, timeBeforeCall);
}

pacmanBlinker.prototype = Object.create(makeDancer.prototype);
pacmanBlinker.prototype.constructor = pacmanBlinker;
pacmanBlinker.prototype.step = function(){
  
  makeDancer.prototype.step.call(this)
  this.$node.removeClass("dancer").addClass("pacman").fadeToggle();
  // this.setPosition($("body").height() * Math.random(), $("body").width() * Math.random())
}