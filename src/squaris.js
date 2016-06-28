var squarisBlinker = function(top, left, timeBeforeCall){
  makeDancer.call(this,top, left, timeBeforeCall);
}

squarisBlinker.prototype = Object.create(makeDancer.prototype);
squarisBlinker.prototype.constructor = squarisBlinker;
squarisBlinker.prototype.step = function(){
  
  makeDancer.prototype.step.call(this)
  this.$node.removeClass("dancer").addClass("squaris").fadeToggle();
  // this.setPosition($("body").height() * Math.random(), $("body").width() * Math.random())
}