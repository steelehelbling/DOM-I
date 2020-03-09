const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//header
const HeadNav = document.querySelectorAll('header nav a')
HeadNav[0].textContent = siteContent ["nav"]['nav-item-1']
HeadNav[1].textContent = siteContent ["nav"]['nav-item-2']
HeadNav[2].textContent = siteContent ["nav"]['nav-item-3']
HeadNav[3].textContent = siteContent ["nav"]['nav-item-4']
HeadNav[4].textContent = siteContent ["nav"]['nav-item-5']
HeadNav[5].textContent = siteContent ["nav"]['nav-item-6']
//task 3 content
HeadNav[0].style.color = 'green'
HeadNav[1].style.color = 'green'
HeadNav[2].style.color = 'green'
HeadNav[3].style.color = 'green'
HeadNav[4].style.color = 'green'
HeadNav[5].style.color = 'green'

const addnew = document.querySelector('header nav')

const newfront = document.createElement('a');
const newend = document.createElement('a');

newfront.textContent = 'Blog';
newend.textContent = 'Donate';

newfront.style.color = 'green'
newend.style.color = 'green'

addnew.prepend(newfront);
addnew.appendChild(newend);

//cta
const texth1 = document.querySelector('.cta .cta-text h1');
const textbutton = document.querySelector('.cta .cta-text button');

texth1.textContent = siteContent ["cta"]['h1']
textbutton.textContent = siteContent ["cta"]['button']


let middleimg = document.getElementById("cta-img");
middleimg.setAttribute('src', siteContent["cta"]["img-src"])

//main content top
const title = document.querySelectorAll('.text-content h4');
const textmaker = document.querySelectorAll('.text-content p')

title[0].textContent = siteContent['main-content']['features-h4'];
title[1].textContent = siteContent['main-content']['about-h4'];
textmaker[0].textContent = siteContent['main-content']['features-content'];
textmaker[1].textContent = siteContent['main-content']['about-content'];

//bottom img
let bottomimg = document.getElementById("middle-img");
bottomimg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//main content bottom

title[2].textContent = siteContent['main-content']['services-h4'];
title[3].textContent = siteContent['main-content']['product-h4'];
title[4].textContent = siteContent['main-content']['vision-h4'];

textmaker[2].textContent = siteContent['main-content']['services-content'];
textmaker[3].textContent = siteContent['main-content']['product-content'];
textmaker[4].textContent = siteContent['main-content']['vision-content'];

//contact
const lowtitle = document.querySelector(".contact h4");
const lowtextmaker = document.querySelectorAll(".contact p");

lowtitle.textContent = siteContent["contact"]["contact-h4"];
lowtextmaker[0].textContent = siteContent["contact"]["address"];
lowtextmaker[1].textContent = siteContent["contact"]["phone"];
lowtextmaker[2].textContent = siteContent["contact"]["email"];

//footer
const foot = document.querySelector("footer p");

foot.textContent = siteContent["footer"]["copyright"];


//updated new styles
/**/
title[2].style.color = "darkgreen";
title[3].style.color = "darkgreen";
title[4].style.color = "darkgreen";
const main = document.querySelector('body')
main.style.backgroundColor = "lightgrey"
main.style.padding = "40px"
texth1.style.fontSize ="2rem"
texth1.style.width ="200px"
texth1.style.textAlign = "center"

//updated new styles