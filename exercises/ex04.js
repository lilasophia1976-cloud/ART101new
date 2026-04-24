let count= 0; 
let colors= ["Orchid", "Coral", "HotPink","Plum","Purple","Chartreuse"];
let pencil ={
    color: "Yellow",
    isSharp: false,};

$("#needy-button").click(function() {

 count= count + 1;

 $("#needy-button") .html("You clicked me " + count + " "+ "and your favorite color today is:" + colors[count]);

    $("#needy-button").css( "background-color", colors [count]);

    $("html").css ("background-color", colors[count+1])

    console.log(pencil.color);

});
