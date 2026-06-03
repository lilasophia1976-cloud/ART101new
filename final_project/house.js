

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



