const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links')

// ############### hamburger ########################
navToggle.addEventListener('click', ()=>{
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if (containerHeight == 0){
        linksContainer.style.height = `${linksHeight}px`;
    }
    else {
        linksContainer.style.height = 0;
    }
    // linksContainer.classList.toggle('show-links');
});

// ################ Back to top ##########################
// ################ fixed Nav bar ################
const navBar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', (e)=> {
    e.preventDefault();
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
        navBar.classList.add('fixed-nav');
    } else {
        navBar.classList.remove('fixed-nav');
    }

    if (scrollHeight > 400) {
        topLink.classList.add('show-links');
    } else {
        topLink.classList.remove('show-links');
    }
});


// #############################################################################
// Image murf effect
// use murf-1 & 3 or murf-4 & 7
// ################################################
new hoverEffect({
    parent:document.querySelector('.distortion'),
    intensity: 0.3,
    image1: 'images/parfait-murf-3.jpg',
    image2: 'images/parfait-murf-1.jpg',
    displacementImage: 'images/diss.png'
});

// var myAnimation = new hoverEffect({
//     parent: document.querySelector('.my-div'),
//     intensity: 0.3,
//     image1: 'images/myImage1.jpg',
//     image2: 'images/myImage2.jpg',
//     displacementImage: 'images/myDistorsionImage.png'