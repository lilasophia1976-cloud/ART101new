let colors=[ "Chartreuse", "Purple","Chartreuse","Purple","Chartreuse","Blue",];
let count= 0; 

$("#clickable") .click( function() {

 count= count + 1;
 $ ("#clickable") .html("you are trapped for " + count+ " "+"years");
    

});

//click-me-button 

$("#click-me") .click( function(){

    count= count + 1;
    colorsCount=count-1;

     $("#click-me") .html("don't leave " + " "+ "its color time:" +" "+ colors[count]);

    $("#click-me").css( "background-color", colors [count]);

    $("#images").css ("background-color", colors[count+1])

    if (count==4) { 
        count=0;  
        console.log("it happened");
    }

})
