// // Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>'); //creates the span element and assigning the dance class
  this.timeBetweenSteps = timeBetweenSteps; // time between blinks
  this.top = top; //location of dancer on screen
  this.left = left;
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  
  this.step(); // invoke the step function
  this.setPosition(this.top, this.left); // invoke the setPosition function
};;
  
makeDancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step  
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);

};

















