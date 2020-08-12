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
// Date at footer
// ################################################
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// #######################################################
// Review button
// ########################################################

const reviews = [{
    id: 1,
    name: "Demehin Damilola",
    job: "Human Resource Guru",
    img: "images/review6.jpg",
    text:
      "Excellent creamy parfaits! This is the real stuff - thick, rich & delicious. And such cute packaging :) Please come back.. I’m craving some salted caramel ",
},
{
    id: 2,
    name: "Demehin Ibukun",
    job: "Software Developer",
    img: "images/review1.jpg",
    text:
      "The infused flavour of fruit with iced milk something new to try not ice cream but somewhat taste likes ",
},
{
    id: 3,
    name: "Demehin Timilehin",
    job: "Mechanical Engineer",
    img: "images/review2.jpg",
    text:
    "Ordered sugarfree chocolate.. Loved it.. It tastes yummy.. Loved their packaging too.. Had a confusion though.. Are they yoghurt or cream based?",
},
{
    id: 4,
    name: "Demehin Mayowa",
    job: "Comuter Engineer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "These are so bomb! I buy like 3 packs at a time because the kids love them too! Peaches and a cream on the bottom. I like to add a little whipped cream on top. The packaging is nice and they are decently priced. Overall recommend purchasing!!!!!!",
  },
  {
    id: 5,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Delicious snack or addition to a kids lunch. Natural flavors and no added sugar simply delicious and perfect",
  },
  {
    id: 6,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "This is a great snack with only 100 calories in a serving. I keep this stocked in my house and when I’m consciously dieting or eating healthy, this is my go to sweet treat. I would buy 100 times over and recommend to anyone ",
  },

  {
      id: 7,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I love these... and the pineapple flavored ones as well. I purchased these for my boys lunches when they were still brown bagging and now buy them for myself or grandchildren",
    }
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let current = 0;

window.addEventListener('DOMContentLoaded', ()=> {
    reviewPerson(current);
});

function reviewPerson(params) {
    const item = reviews[params];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', ()=> {
    current++;
    if (current > reviews.length-1) {
        current = 0;
    }
    reviewPerson(current);
});

prevBtn.addEventListener('click', ()=> {
    current--;
    if (current < 0) {
        current = reviews.length-1;
    }
    reviewPerson(current);
});