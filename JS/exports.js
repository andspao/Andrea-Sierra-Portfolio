const header = document.querySelector('.header__top-bar');

//Toogle del menú oculto

export const navShow = () => {
    let menubar = document.querySelector('.menubar');
    let navbar = document.querySelector('nav');
    
    menubar.addEventListener('click', () => {
        //Toggle Nav
        navbar.classList.toggle('navbar-active');
        //Bars Animation
        menubar.classList.toggle('line-toggle');
    });

}

//Header background invisible

export const navNoBg = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            header.classList.add('header__no-bg');
        } else {
         header.classList.remove('header__no-bg');
   }
 })
}, { threshold: 0.3 });
