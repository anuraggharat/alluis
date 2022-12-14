var navLinks = document.querySelectorAll('.nav-link')

function setActive(){
    navLinks.forEach(item=>item.classList.remove('active'))
    this.classList.add('active')
}
navLinks.forEach(item=>item.addEventListener('click',setActive))