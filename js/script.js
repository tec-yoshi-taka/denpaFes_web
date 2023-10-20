"use strict"

const header = document.querySelector('header');
let judge = false;
window.addEventListener('scroll', () => {
    if(window.pageYOffset < 150){
        header.classList.remove("menuAnime");
        if(judge == true){
            header.classList.add("menuBackAnime");
        }
    }else{
        header.classList.add("menuAnime");
        header.classList.remove("menuBackAnime");
        judge = true;
    }
})

