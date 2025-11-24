// Slider home
var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 1,
            spaceBetween: 30
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    },
});
AOS.init({
    duration: 1500, 
});


// ================= Color Items =================

document.addEventListener("DOMContentLoaded", function() {
    const optionBox = document.getElementById("optionBox");
    const toggleBtn = document.getElementById("toggle-btn");

    optionBox.classList.add("closed");

    toggleBtn.addEventListener("click", function() {
        optionBox.classList.toggle("closed");
    });
});


let colorItems = document.querySelectorAll(".colorItem");
const colors = ["red", "lightgreen", "blue", "#09c", "darkblue"];

colorItems.forEach((item, i) => {
    item.style.backgroundColor = colors[i];
});

document.querySelectorAll(".team-member .overlay").forEach(overlay => {
    
    overlay.addEventListener("mouseenter", () => {
        overlay.style.setProperty("--overlay-bg-color", 'var(--global-primary-color)', "important");
      });
    
    overlay.addEventListener("mouseleave", () => {
        overlay.style.setProperty("--overlay-bg-color", "transparent", "important");
    });
});


colorItems.forEach(item => {
    item.addEventListener("click", e => {
        let bgColor = e.target.style.backgroundColor;

        document.documentElement.style.setProperty('--global-primary-color', bgColor);

        document.querySelectorAll(".carousel-control-icons , .item span  ")
        .forEach(element=>element.style.color=bgColor
        );

        document.querySelectorAll(".progress-bar,.btn-submit   ")
        .forEach(element=>element.style.backgroundColor=bgColor);

        document.querySelectorAll(".navbar-nav .nav-item .nav-link.active")
        .forEach(el => el.style.setProperty("color", bgColor, "important"));

        document.querySelectorAll(".navbar-nav .nav-item .nav-link")
        .forEach(link => {
            link.addEventListener("mouseenter", () => link.style.setProperty("color", bgColor, "important"));
            link.addEventListener("mouseleave", () => link.style.setProperty("color", "black", "important"))
        });

        document.querySelectorAll(".nav-icon")
        .forEach(icon => {
            icon.addEventListener("mouseenter", () => icon.style.setProperty("color", bgColor, "important"));
            icon.addEventListener("mouseleave", () => icon.style.setProperty("color", "black", "important"))
        });
           // services items
    document.querySelectorAll(".services .item span ").forEach(span => {
      span.style.border = `8px solid ${bgColor}`;
      
    });
   
    document.querySelectorAll(".icon i").forEach(icon => {
      icon.style.color = bgColor;
    });
    });
});