
// add creature to the garden
$("#crAdd").click( function(){

    // grab the value from the text input and assign it to a variable crName
    let crName=$("#crName").val();
    let crColor = $ ("#crColor").val();
    let crEyesNum = $("#crEyesNum").val();
    let crEyesHTML = " ";
    for (let i = 0; i < crEyesNum; i++) {
            crEyesHTML = crEyesHTML + "<div class= 'eye'>.</div>";
    }
    
    // test in console
    console.log(crName);
    
    // add this name to a div with a bit of html code attached
    $("#creature-list").append("<div>"+crName+ ", "+crColor +"," +crEyesNum +"</div>");

     $("#crName").val(""); // write the value
    // $("#crName").val(); // retrieve the value

}); 

