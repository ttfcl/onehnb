let nav1 = document.querySelector(".nav1")
let nav2 = document.querySelector(".nav2")


window.addEventListener('scroll', function(){
    if(window.scrollY > 300) {
        nav1.classList.add("hide")
        nav2.classList.add("hide")
    }else if(window.scrollY <= 300){
        nav1.classList.remove("hide")
        nav2.classList.remove("hide")
    }
});