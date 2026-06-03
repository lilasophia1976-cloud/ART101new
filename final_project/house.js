

document.getElementById("click_here").addEventListener("click", () => {
  document.getElementById("starter").hidden = true;
  document.getElementById("room1").hidden = false;
});

document.getElementById("door1").addEventListener("click", () => {
  document.getElementById("room1").hidden = true;
  document.getElementById("room2").hidden = false;
});

document.getElementById("door2").addEventListener("click", () => {
  document.getElementById("room1").hidden = true;
  document.getElementById("room3").hidden = false;
});

document.getElementById("door3").addEventListener("click", () => {
  document.getElementById("room1").hidden = true;
  document.getElementById("room4").hidden = false;
});

document.getElementById("turn_back").addEventListener("click", () => {
  document.getElementById("room2").hidden = true;
  document.getElementById("room1").hidden = false;
});
document.getElementById("door2leave").addEventListener("click", () => {
  document.getElementById("room3").hidden = true;
  document.getElementById("room1").hidden = false;
});





let color=["Yellow"]


let count=0;
$("#item").click(function() {

 $("#counter") .html("You found a key!");
 $("#k1").css ("background-color",color)

});

 function showElement() {
            element = document.querySelector('#k1');
            element.style.visibility = 'visible';
        }
$("#item").click(function(){
    $("#k1").showElement
})