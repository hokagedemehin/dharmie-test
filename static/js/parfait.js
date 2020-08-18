// ############### hamburger ########################

const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links')

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

// ################### Line under links #########################
var mark = document.querySelector('#marker');
var itemLinks = document.querySelectorAll('.scroll-link');
var backTop = document.querySelector('.top-link');
var home = document.querySelector('#nav-link');

function indicator(e) {
    mark.style.left = `${e.offsetLeft}px`
    mark.style.width = `${e.offsetWidth}px`;
    console.log(e.offsetLeft, e.offsetWidth );
}

itemLinks.forEach(links => {
    links.addEventListener('click', (e) => {
        indicator(e.target);  
    });
});

backTop.addEventListener('click', (e) => {
    var wid = home.getBoundingClientRect().width;
    mark.style.left = `11px`;
    mark.style.width = wid + 'px';
    console.log(mark.style.width);
});
itemLinks.forEach(links => {
    links.addEventListener('click', (e) => {
        links.classList.toggle('active-link')  
        // sidebar.classList.toggle('show-sidebar');
    });
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
// Date at footer
// ################################################
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();


// Sticky Footer at the bottom
const mainPage = document.querySelector('.main');
// const mainPage2 = document.getElementById('main');
const footer = document.querySelector('.div-footer')

const footHeight = footer.getBoundingClientRect().height;
// console.log(mainPage);
// console.log(footer);
// console.log(footHeight);
// console.log(window.innerHeight);
// console.log(window.outerHeight);
// console.log(screen.height);
// console.log(window.outerHeight - footHeight +'px');
// console.log(window.innerHeight - footHeight +'px');
// mainPage.style.minHeight = ` ${footHeight}`;
mainPage.style.minHeight = window.innerHeight - footHeight + 'px';
// console.log(mainPage.style.height);
// const navHeight = navbar.getBoundingClientRect().height;
// linksContainer.style.height = `${linksHeight}px`;
// alert.classList.remove(`alert-${action}`)
// min-height: calc(100vh - 124px);