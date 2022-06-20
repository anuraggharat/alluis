
function openNav(){
    document.getElementById("topnav").style.marginTop = "10vh"
    document.getElementById('open-toggler').style.display="none";
    document.getElementById("close-toggler").style.display = "block";

}
function closeNav() {
  document.getElementById("topnav").style.marginTop = "-50vh";
  document.getElementById("close-toggler").style.display = "none";
    document.getElementById("open-toggler").style.display = "block";

}

