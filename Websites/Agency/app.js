
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
var theme = "light";

function changeTheme(){

  if (theme === 'light') {
    document.getElementById("theme-toggler").classList.remove("ri-toggle-line");
        document
          .getElementById("theme-toggler")
          .classList.add('ri-toggle-fill');
          theme='dark'
  } else {
    document.getElementById("theme-toggler").classList.remove("ri-toggle-fill");
    document
      .getElementById("theme-toggler")
      .classList.add('ri-toggle-line');
    theme = "light";
    
  }
  var docBody = document.body;
  docBody.classList.toggle('dark-mode')
}