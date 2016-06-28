$(document).ready(function(){
  window.dancers = []; //create an empty array in the window object

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

     var node = $(this) //the <a> element that contains the button being clicked
     var id = $(this).attr('id')
     if (id ===  "Circle") {
        var dancerMakerFunctionName = $(this).data("dancer-maker-function-name"); // //points to where the data is coming from/located 
        
        // get the maker function for the kind of dancer we're supposed to make
        var dancerMakerFunction = window[dancerMakerFunctionName]; //retrieving the function from the window object
         // console.log("line 22 dancerMakerFunction", dancerMakerFunction);
        // make a dancer with a random position
        var dancer = new dancerMakerFunction($("body").height() * Math.random(), $("body").width() * Math.random(), Math.random() * 1000); //modified this line to add "new"
        $('#danceFloor').append(dancer.$node);
        window.dancers.push(dancer)
     }
     if (id === "pacman") {
        var dancerMakerFunctionName = $(this).data("dancer-maker-function-name"); // //points to where the data is coming from/located 
        // get the maker function for the kind of dancer we're supposed to make
        var dancerMakerFunction = window[dancerMakerFunctionName]; //retrieving the function from the window object
         // console.log("line 22 dancerMakerFunction", dancerMakerFunction);

        // make a dancer with a random position

        var dancer = new dancerMakerFunction($("body").height() * Math.random(), $("body").width() * Math.random(), Math.random() * 1000); //modified this line to add "new"
        $('#danceFloor').append(dancer.$node);
        window.dancers.push(dancer)
     };

    if (id === "Square") {
        var dancerMakerFunctionName = $(this).data("dancer-maker-function-name"); // //points to where the data is coming from/located 
        // get the maker function for the kind of dancer we're supposed to make
        var dancerMakerFunction = window[dancerMakerFunctionName]; //retrieving the function from the window object
         // console.log("line 22 dancerMakerFunction", dancerMakerFunction);

        // make a dancer with a random position

        var dancer = new dancerMakerFunction($("body").height() * Math.random(), $("body").width() * Math.random(), Math.random() * 1000); //modified this line to add "new"
        $('#danceFloor').append(dancer.$node);
        window.dancers.push(dancer)
     };
  });
// Position dancers on the left on click
  $(".lineupButton").on("click", function(){
    console.log("im here")
    var height = 0//$("body").height() / window.dancers.length;
    console.log("line 62, height", height)
    $("#danceFloor").removeClass('danceFloor').addClass('danceFloor2')
      for (var i = 0; i < window.dancers.length; i++) {
        window.dancers[i].setPosition(($("body").height()/2) + (10*Math.sin(height))*10, height)
        height = height + 50
      };


  }); 



});

