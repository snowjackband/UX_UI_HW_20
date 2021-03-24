// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var okBtn = document.getElementById("ok-button");

// When the user clicks the button, open the modal 
btn.onclick = function() {

// Check if all input is not empty

// If all input is not empty, send an email 

// And then show modal
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
okBtn.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}