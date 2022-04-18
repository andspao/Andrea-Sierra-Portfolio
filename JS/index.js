import {navShow} from './exports.js';
const header = document.querySelector('.header__top-bar');
const navmarks = document.querySelectorAll('.navmarks__dot');
const contactame = document.querySelector('#contactame');


//Cambio de color en los navmarks y en el header

const contactameObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            header.classList.add('header__negative');
            navmarks.forEach(navmark => {
                navmark.classList.add('navmarks__dot--negative');
            })
        } else {
            header.classList.remove('header__negative');
            navmarks.forEach(navmark => {
                navmark.classList.remove('navmarks__dot--negative');
            })
        }
    });
}, { threshold: 0.5 } );
contactameObserver.observe(contactame);
navShow();

