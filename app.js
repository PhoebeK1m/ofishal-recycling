const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const background = document.querySelector('.navbar__container')

menu.addEventListener('click', function() {
    menu.classList.toggle('active');
    menuLinks.classList.toggle('active');
    background.classList.toggle('active')
});

document.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;
    document.querySelector('.main__image').style.transform = 'translateY(' + scrollPosition * 0.23 + 'px)';
});

const newText = [
    {text: "think waste.", color: 'rgb(178, 216, 134)'},
    {text: "cycle.", color: 'rgb(178, 216, 134)'},
    {text: "connect with Earth.", color: 'rgb(178, 216, 134)'}
]

$(document).ready(async function() {
    carousel(newText, "#newText")
});

async function typeWrite(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
        await waitForMs(delay);
        $(eleRef).append(letters[i]);
        i++
    }
    return;
}

async function deleteWrite(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while (letters.length > 0) {
        await waitForMs(100);
        letters.pop();
        $(eleRef).html(letters.join(""));
    }
}

async function carousel(carouselList, eleRef) {
    var i = 0;
    while(true) {
        updateFontColor(eleRef, carouselList[i].color)
        await typeWrite(carouselList[i].text, eleRef);
        await waitForMs(1500);
        await deleteWrite(eleRef);
        await waitForMs(500);
        i++
        if (i>= carouselList.length) {i=0;}
        
    }
}

function updateFontColor(eleRef, color) {
    $(eleRef).css('color', color);
}

function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

document.addEventListener("DOMContentLoaded", function() {
    const scrollButton = document.getElementById("home-btn");

    scrollButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior

        const targetSection = document.querySelector(scrollButton.getAttribute("href"));

        // Calculate the distance to scroll
        const targetOffsetTop = targetSection.offsetTop;

        // Smooth scroll to the target section
        window.scrollTo({
            top: targetOffsetTop,
            behavior: "smooth"
        });
    });
});