document.addEventListener('DOMContentLoaded', () => {
    const imageElement = document.querySelector('.slider .image');
    const images = [
        'assets/1.jpg',
        'assets/2.jpg',
        'assets/3.jpg', 
    ];

    let currentIndex = 0;
    function showImage(index) {
        if (index >= images.length) {
            index = 0;
        }
        currentIndex = index;
        imageElement.setAttribute('src', images[index]);
    }

    setInterval(() => {
        currentIndex++;
        showImage(currentIndex);
    }, 3000);
});


const menuHamburger = document.querySelector('.hamburge-menu');

menuHamburger.addEventListener('click', () => {
    const subMenu = document.querySelector('.sub-menu-mobile');
    subMenu.classList.toggle('active-menu-mobile');
    menuHamburger.classList.toggle('active-menu');
});

// pada saat halaman di scroll maka menu mobile akan hilang
window.onscroll = () => {
    const subMenu = document.querySelector('.sub-menu-mobile');
    subMenu.classList.remove('active-menu-mobile');
    menuHamburger.classList.remove('active-menu');
}
