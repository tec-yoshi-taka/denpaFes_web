"use strict"

const header = document.querySelector('header');
const body = document.querySelector('body');
const hMenu = document.querySelector('.h-menu');
const hMenuBtn = document.querySelector('.h-menu-btn');

hMenu.addEventListener('mousedown', () => {
    header.classList.toggle('up');
    hMenuBtn.classList.toggle('up');
});

let judge = false;
window.addEventListener('scroll', () => {
    if(window.pageYOffset < 150){
        header.classList.remove("menuAnime");
        body.classList.remove("bgLight")
        if(judge == true){
            header.classList.add("menuBackAnime");
            body.classList.add("bgOrigin")
        }
        
    }else{
        header.classList.add("menuAnime");
        header.classList.remove("menuBackAnime");
        body.classList.add("bgLight")
        body.classList.remove("bgOrigin")
        judge = true;
        
    }
});
    
    