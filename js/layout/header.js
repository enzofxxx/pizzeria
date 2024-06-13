"USE STRICT";

function renderHeader(){
// Create the header element
const header = document.createElement('header');

// Create the nav element
const nav = document.createElement('nav');

// Create the first section and its content
const section1 = document.createElement('section');
const logo = document.createElement('img');
logo.src = './img/logo1.png';
logo.alt = 'Main Logo';
logo.width = 200;
section1.appendChild(logo);

// Create the second section and its content
const section2 = document.createElement('section');

const homeLink = document.createElement('a');
homeLink.href = './index.html';
homeLink.textContent = 'Home';

const menuLink = document.createElement('a');
menuLink.href = './our_menu.html';
menuLink.textContent = 'Our Menu';

const aboutLink = document.createElement('a');
aboutLink.href = './about_us.html';
aboutLink.textContent = 'About Us';

const careerLink = document.createElement('a');
careerLink.href = './contact_us.html';
careerLink.textContent = 'Career';

const contactLink = document.createElement('a');
contactLink.href = './contact_us.html#contact';
contactLink.textContent = 'Contact Us';

//Add active class
let path = window.location.href;
let page = path.substring(path.lastIndexOf('#') + 1);
let page2 = path.substring(path.lastIndexOf('/') + 1);

if(page2 == "index.html"){
    homeLink.className = 'active';
}
else if(page2 === "our_menu.html"){
    menuLink.className = 'active';
}
else if(page2  === "about_us.html"){
    aboutLink.className = 'active';
}
else if(page2  === "contact_us.html"){
    careerLink.className = 'active';
}
else if(page  === "contact"){
    contactLink.className = 'active';
}

// Append links to the second section
section2.appendChild(homeLink);
section2.appendChild(menuLink);
section2.appendChild(aboutLink);
section2.appendChild(careerLink);
section2.appendChild(contactLink);

// Create the third section and its content
const section3 = document.createElement('section');

const searchIcon = document.createElement('img');
searchIcon.src = './img/search1.png';
searchIcon.alt = 'search icon';
searchIcon.width = 30;

const cartIcon = document.createElement('img');
cartIcon.src = './img/cart1.png';
cartIcon.alt = 'cart icon';
cartIcon.width = 30;

const profileIcon = document.createElement('img');
profileIcon.src = './img/user1.png';
profileIcon.alt = 'profile icon';
profileIcon.width = 25;

// Append images to the third section
section3.appendChild(searchIcon);
section3.appendChild(cartIcon);
section3.appendChild(profileIcon);

// Append all sections to the nav element
nav.appendChild(section1);
nav.appendChild(section2);
nav.appendChild(section3);

// Append the nav element to the header
header.appendChild(nav);

// Append the header to the body of the document
document.body.prepend(header);
};

export default renderHeader;