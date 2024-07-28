document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'assets/1.jpg',
        'assets/2.jpg',
        'assets/3.jpg', 
    ];

    let currentIndex = 0;
    const imageElement = document.querySelector('.slider .image');

    function showImage(index) {
        if (index >= images.length) {
            index = 0;
        }

        imageElement.src = images[index];
    }

    function nextImage() {
        currentIndex++;
        showImage(currentIndex);
    }

    showImage(currentIndex);

    setInterval(nextImage, 3000);
});
