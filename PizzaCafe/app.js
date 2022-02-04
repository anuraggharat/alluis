
function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}
function openMenu(evt, cityName) {
  console.log("clicked")
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    console.log("in Loop")
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    console.log("in Loop");

  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
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
