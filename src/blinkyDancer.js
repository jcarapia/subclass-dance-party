// var makeBlinkyDancer = function(top, left, timeBetweenSteps){
//    makeDancer.call(this, top, left, timeBetweenSteps);
//    // console.log(blinkyDancer)
//   // makeDancer.call(this, top, left, timeBetweenSteps)
//   // var test = makeDancer.call(this)
//   // console.log(test)
//   // console.log("line 3, blinkyDancer: ", blinkyDancer)
//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function
//   this.oldStep = this.step
//   // var oldStep = blinkyDancer.step;
//   // // console.log(oldStep)

//   // blinkyDancer.step = function(){
//   //   // call the old version of step at the beginning of any call to this new version of step
//   //   oldStep();
//   //   // toggle() is a jQuery method to show/hide the <span> tag.
//   //   // See http://api.jquery.com/category/effects/ for this and
//   //   // other effects you can use on a jQuery-wrapped html tag.
//   //   blinkyDancer.$node.toggle();
//   // };

//   // return blinkyDancer;
// };

// makeBlinkyDancer.prototype = Object.create(makeDancer.prototype)
// makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
// makeBlinkyDancer.prototype.step = function(){
//   this.oldStep()
//   this.$node.toggle()
// }
// makeBlinkyDancer(5,7,1000)
// makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
// makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
// makeBlinkyDancer.prototype.step = function(){
//   this.oldStep();
//   this.$node.toggle();
// }
// console.log(makeBlinkyDancer.prototype);
// var testBlinky = new makeBlinkyDancer(2,5, 2000)
// console.log("line 21, in makeBlinkyDancer: test: ", testBlinky);
// blinkyDancer.step = function(){
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };
var makeBlinkyDancer = function(top, left, timeBeforeCall){
  makeDancer.call(this,top, left, timeBeforeCall);
  // console.log("this step: ",this.step)
  this.oldStep = this.step;
  console.log("oldStep", this.oldStep)
}

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
makeBlinkyDancer.prototype.step = function(){
  this.oldStep.bind(this)
  this.$node.toggle();
}
// makeBlinkyDancer(1,2,1000)







































