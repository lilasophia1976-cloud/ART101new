let colors=[ "Pink", "Teal","Chartreuse","HotPink","Purple"];
let count= 0; 
$("#needy-button") .click( function() {

 count= count + 1;
 $ ("#needy-button") .html("You clicked me " + count+ " "+"times");
    $("#needy-button").css( "background-color", colors [count-1]);

});