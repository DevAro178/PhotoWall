// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  let IdInp=document.getElementById("IdPost").value=null;
  let TitleP=document.getElementById("TitlePost").value=null;
  let DescP=document.getElementById("DescPost").innerHTML=null;
  let ImgP=document.getElementById("previmg").src=null;
  let Submit=document.getElementById("Do").value="Create";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if(event.target == modal) {
    modal.style.display = "none";
    let IdInp=document.getElementById("IdPost").value=null;
    let TitleP=document.getElementById("TitlePost").value=null;
    let DescP=document.getElementById("DescPost").innerHTML=null;
    let ImgP=document.getElementById("previmg").src=null;
    let Submit=document.getElementById("Do").value="Create";
  }
}