let colors=[ "Chartreuse", "Purple","Chartreuse","Purple","Chartreuse","Blue",];
let count= 0; 
let colorCounter=0;

$("#clickable") .click( function() {

 count= count + 1;
 $ ("#clickable") .html("you are trapped for " + count+ " "+"years");
    

});
//click-me-button 
$("#click-me") .click( function(){

    count= count + 1;
    colorsCount=count-1;

     $("#click-me") .html("its color time:" +" "+ colors[count]);

    $("#click-me").css( "background-color", colors [count]);

    $("#images").css ("background-color", colors[count+1])

    if (count==4) { 
        count=0;  
        console.log("it happened");
    }

})

$("#click-1") .click( function(){
    $("#click-1") .html("ha ha ha.");

    if (count==2) {
        count=0;
        console.log("it happened");
    }
})

function makeImage(face) {
    if (colors[colorCount] == face)
  { 
    $("textbox-2").append("<img width=50 src='environ-images/"+ face +".jpeg'>");
  }
}

$("#click-2").click(function () {
   count= count +1
   (colors[colorCount])
    $("#click-2") .html (makeImage)

    console.log("it happened");
    
   
}); 





