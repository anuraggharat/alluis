
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

function changeThemeWeb(){
var docBody = document.body;

var themetoggweb = document.getElementById("theme-toggler-web");

  if (theme === 'light') {
    themetoggweb.classList.remove("ri-toggle-line");
    themetoggweb.classList.add('ri-toggle-fill');
    theme='dark'
  } else {
    themetoggweb.classList.remove("ri-toggle-fill");
    themetoggweb.classList.add("ri-toggle-line");
    theme = "light";    
  }
  docBody.classList.toggle('dark-mode')
}

function changeThemeMob() {
var docBody = document.body;

var themetoggmob = document.getElementById("theme-toggler-mob");

  if (theme === "light") {
    themetoggmob.classList.remove("ri-toggle-line");
    themetoggmob.classList.add("ri-toggle-fill");
    theme = "dark";
  } else {
    themetoggmob.classList.remove("ri-toggle-fill");
    themetoggmob.classList.add("ri-toggle-line");
    theme = "light";
  }
  docBody.classList.toggle("dark-mode");
}