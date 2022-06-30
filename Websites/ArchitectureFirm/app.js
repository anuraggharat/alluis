// function openNav() {
//   document.getElementById("topnav").style.marginTop = "10vh";
//   document.getElementById("open-toggler").style.display = "none";
//   document.getElementById("close-toggler").style.display = "block";
// }
// function closeNav() {
//   document.getElementById("topnav").style.marginTop = "-50vh";
//   document.getElementById("close-toggler").style.display = "none";
//   document.getElementById("open-toggler").style.display = "block";
// }
// var theme = "light";

// function changeThemeWeb() {
//   var docBody = document.body;

//   var themetoggweb = document.getElementById("theme-toggler-web");

//   if (theme === "light") {
//     themetoggweb.classList.remove("ri-toggle-line");
//     themetoggweb.classList.add("ri-toggle-fill");
//     theme = "dark";
//   } else {
//     themetoggweb.classList.remove("ri-toggle-fill");
//     themetoggweb.classList.add("ri-toggle-line");
//     theme = "light";
//   }
//   docBody.classList.toggle("dark-mode");
// }

// function changeThemeMob() {
//   var docBody = document.body;

//   var themetoggmob = document.getElementById("theme-toggler-mob");

//   if (theme === "light") {
//     themetoggmob.classList.remove("ri-toggle-line");
//     themetoggmob.classList.add("ri-toggle-fill");
//     theme = "dark";
//   } else {
//     themetoggmob.classList.remove("ri-toggle-fill");
//     themetoggmob.classList.add("ri-toggle-line");
//     theme = "light";
//   }
//   docBody.classList.toggle("dark-mode");
// }

function nextSlide(url,ele){
  var allimg = document.getElementsByClassName('slider-img')
  for (let index = 0; index < allimg.length; index++) {
    allimg[index].classList.remove('active-img')
    
  }
  var bgimage = document.getElementById('home')
  bgimage.style.backgroundImage = `url(${url})`;
  ele.classList.add('active-img')
}

function scrollRight(){
  var reviewcontainer = document.getElementById("review-container");

  reviewcontainer.scrollBy(300, 0);
}
function scrollToLeft() {
  var reviewcontainer = document.getElementById("review-container");
  reviewcontainer.scrollBy(-100,0);
}