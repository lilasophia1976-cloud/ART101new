let count= 0;
let colors= ["Purple", "Sage",]


function makeImage(flower) {
    $("img").hide();
    
    $("body").append("<img src'"+ flower+ ".webp'>");
    
}

$("#daisy").click(function() {

 count= count + 1;
 makeImage(daisy.png);
 $("#daisy") .html("You clicked me " + count +"");
 

});