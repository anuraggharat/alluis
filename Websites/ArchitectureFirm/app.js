function openNav() {
  document.getElementById("sidebar").style.marginRight = "0vw";
}
function closeNav() {
  document.getElementById("sidebar").style.marginRight = "-50vw";
}


window.onscroll=function(){
var navbar = document.getElementById("nav");
console.log(navbar)
  if(window.scrollY > 300){

    navbar.classList.add('bg-primary') 
  }
  else{
    navbar.classList.remove("bg-primary");  

  }
}



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