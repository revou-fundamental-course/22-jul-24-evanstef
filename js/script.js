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
