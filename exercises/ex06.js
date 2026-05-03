// declaring variables 

// declaring variables 

let count = 0;
let colors = ["Orchid", "Coral", "HotPink", "Plum"]; 
let colorCounter=0;
let mood="neutral";

// reusable functions

function makeImage( colorToMatch) { 
    // what the function actually does
    if ( colors[colorCount]== colorToMatch ) {
        $("body").append("<img width=40 src='Moth-orchid.jpg'>");
    }
} 

function paintPage(colorToPaint){
    $("body").css ("background-color", colorToPaint);

}

// what happens when the orchid image is clicked
$("#Orchid").click(function () { 
   console.log("orchid is clicked");
   paintPage( "Orchid");
});


// what happens when the button is clicked

$("#needy-button").click(function () {
    console.log("orchid is clicked");
    paintPage( "Orchid"); 
 
count = count + 1;
colorCount=count-1;

  $("#needy-button").html( "Clicks: " + count + " Color: " + colors[colorCount] );
   $("body").css("background-color", colors[colorCount]);
   
   if (colorCount==4) { 
        colorCount=0;  
        console.log("it happened");
    }

   if (colors[colorCount] == "HotPink") { 
        $("#needy-button").after(" notPink ");
    }
    else if (colors[colorCount] == "Orchid") {
            $("#needy-button").after("  hey Orchid ");
    }
    else {
      $("#needy-button").after(" all other colors ");
    }

    if (count < 5) { mood="fresh and happy"; }
    else if ( count >= 5 && count < 10) {mood="keep pushing";}
    else { mood="so tired";}

    makeImage("Orchid");
    makeImage("Plum");
    makeImage("Coral");


    console.log(mood);

});

