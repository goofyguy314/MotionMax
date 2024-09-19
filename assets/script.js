// navigation bar

let header = document.querySelector('.header-main');
let navbar = document.querySelector('.navbar');

document.querySelector('#menu').onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');

    if(window.scrollY > 120) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}

// image slider

var swiper = new Swiper(".best-sellers-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    grabCursor: true,
    loop: true,
});

// quotes acak

const quotes = [
    { text: "Sneakers are not just a shoe, they’re a lifestyle.", author: "— Run-D.M.C." },
    { text: "Shoes are like friends, they'll support you, or let you down.", author: "— Sophia Webster" },
    { text: "A good pair of shoes can take you great places.", author: "— Audrey Hepburn" },
    { text: "Shoes transform your body language and attitude. They lift you physically and emotionally.", author: "— Christian Louboutin" },
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    
    document.getElementById("quote").textContent = quotes[randomIndex].text;
    document.getElementById("author").textContent = quotes[randomIndex].author;
}

setInterval(generateQuote, 6000);

generateQuote();
