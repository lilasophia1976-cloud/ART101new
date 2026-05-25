let colors=[ "Chartreuse", "Purple","Chartreuse","Purple","Chartreuse","Blue",];
let count= 0; 
let colorCounter=0;

//you are trapped button
$("#clickable") .click( function() {

 count= count + 1;
 $ ("#clickable") .html("you are trapped for " + count+ " "+"years");
    

});

//dont-click-me-button 
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
//joke button 
$("#click-1") .click( function(){
    $("#click-1") .html("ha ha ha.");

    if (count==2) {
        count=0;
        console.log("it happened");
    }
})

//good-button
let color2=["green",];
let color3=["red",];
function askNumber(whatNumber){
    let userNumber = prompt ("pick a # 1-10");

    if (userNumber == whatNumber) {
        $("#output").html ("You got it!",)
        $("#output") .css ("background-color", color2)
    }
    else {
        $("#output") .html ("Nooooope");
        $("#output") .css ("background-color", color3)
    }
}

$("#good-button").click(function(){
    askNumber(7)
});


//im-so-scared
$("#scared").click(function(){
    $(this).toggleClass("transformed");
    $("#scared").text("WHY DID U DO THAT");

});

$("#click-2").click(function(){
    $(this).toggleClass("picturebutton");
    $("click-2").text(" nah");

});

