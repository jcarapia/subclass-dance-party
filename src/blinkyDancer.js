
var makeBlinkyDancer = function(top, left, timeBeforeCall){
  makeDancer.call(this,top, left, timeBeforeCall);

}

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
makeBlinkyDancer.prototype.step = function(){
  
  makeDancer.prototype.step.call(this)
  this.$node.fadeToggle();
  // this.setPosition($("body").height() * Math.random(), $("body").width() * Math.random())
}







































