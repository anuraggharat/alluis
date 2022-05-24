function handleScroll(){        
    let nav = document.getElementById("nav");

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        nav.style.background = "#fff";        
    }else{
        nav.style.background="transparent"
    } 

}
document.addEventListener('scroll',handleScroll)