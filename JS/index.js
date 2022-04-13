const header = document.querySelector('header');
const footer = document.querySelector('footer');
const contactame = document.querySelector('.contactame');

const contactameObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            header.classList.add('header__negative');
        } else {
            header.classList.remove('header__negative');
        }
    });
}, { threshold: 1 } );

contactameObserver.observe(contactame);