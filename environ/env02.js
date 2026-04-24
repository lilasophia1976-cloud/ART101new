let colors=[ "Chartreuse", "Purple","Chartreuse","Purple","Chartreuse"];
let count= 0; 
$("#clickable") .click( function() {

 count= count + 1;
 $ ("#clickable") .html("You clicked me " + count+ " "+"times");
    $("#clickable").css( "background-color", colors [count-1]);

});