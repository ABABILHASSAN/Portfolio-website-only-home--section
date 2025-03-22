const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click',activeLink));

// Home Section Starts From Here

var swiper = new Swiper(".home-slider" , {
    spaceBetween: 420,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: "swiper-pagination",
        clickable: true,
    },
    loop: true,
});

