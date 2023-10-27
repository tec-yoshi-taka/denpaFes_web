"use strict"
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
menuBtn.addEventListener('click',()=>{
menu.classList.toggle('view');
menuBtn.classList.toggle('close');
});