"use strict"

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    console.log(window.pageYOffset)
    if(window.pageYOffset < 150){
        header.classList.remove("menuAnime");
    }else{
        header.classList.add("menuAnime");
    }
    if(window.pageYOffset < 145){
        header.classList.add("menuBackAnime");
    }else{
        header.classList.remove("menuBackAnime");
    }
})

