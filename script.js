document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            button.innerText = "Added!";
            button.style.backgroundColor = "#00cc66";
        });
    });

    // Sticky Header Effect
    window.addEventListener("scroll", function() {
        document.querySelector("header").style.backgroundColor = window.scrollY > 50 ? "#222" : "#333";
    });

    // Automatic Slideshow for Hero Banner
    const images = ['images/banner1.jpg', 'images/banner2.jpg', 'images/banner3.jpg'];
    let currentImage = 0;

    setInterval(() => {
        document.querySelector(".hero").style.backgroundImage = `url(${images[currentImage]})`;
        currentImage = (currentImage + 1) % images.length;
    }, 4000);
});
