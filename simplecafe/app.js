/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

//function to open the image modal of the gallary
function openModal(ele){
  //getting the reference of the image element
  document.getElementById("modalimage").src = ele.src;
  document.getElementById('modal').style.display="block"
}

//function to close the image modal of the gallary
function closeModal(){
  var modal = document.getElementById('modal')
  modal.style.display="none"
}