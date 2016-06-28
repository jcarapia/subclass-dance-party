// supperClass
var makeDancer = function(top, left , timeBeforeCall){
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left; 
  this.timeBeforeCall =  timeBeforeCall;
  this.step()
  this.setPosition(this.top, this.left)
}
makeDancer.prototype.step = function(){
  var stepping = this.step
  setTimeout(stepping, this.timeBeforeCall)
};
makeDancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
}
// subclass

var makeBlinkyDancer = function(top, left, timeBeforeCall){
  makeDancer.call(this,top, left, timeBeforeCall);
  this.oldStep = this.step;

}

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
makeBlinkyDancer.prototype.step = function(){
  this.oldStep()
  this.$node.toggle();
}



