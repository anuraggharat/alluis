window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav").style.backgroundColor = "#f4f7fc";
    let links = document.getElementById("nav-links");
    links.className = "nav-link-scrolled";
    console.log();
  } else {
    document.getElementById("nav").style.background = "transparent";
    let links = document.getElementById("nav-links");
    links.className = "nav-link";
  }
}

function openModal(ele) {
  //getting the reference of the image element
  document.getElementById("modal-img").src = ele.src;
  document.getElementById("modal").style.display = "flex";
}

//function to close the image modal of the gallary
function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
