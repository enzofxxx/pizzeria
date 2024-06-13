"USE STRICT";

function renderFooter(){
    // Create the footer element
    const footer = document.createElement('footer');

    // Create the first section and its content
    const section1 = document.createElement('section');
    section1.style.marginTop = "50px";
    section1.style.marginLeft = "40px";

    const logo = document.createElement('img');
    logo.src = './img/footer_logo1.png';
    logo.alt = 'Logo';
    logo.width = 300;
    section1.appendChild(logo);

    // Create the second section and its content
    const section2 = document.createElement('section');

    const div1 = document.createElement('div');
    const div2 = document.createElement('div');

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

    const instagramLink = document.createElement('a');
    instagramLink.href = 'https://www.instagram.com/';
    instagramLink.textContent = 'Instagram';

    const twitterLink = document.createElement('a');
    twitterLink.href = 'https://x.com/';
    twitterLink.textContent = 'X';

    const linkedInLink = document.createElement('a');
    linkedInLink.href = 'https://www.LinkedIn.com/';
    linkedInLink.textContent = 'LinkedIn';

    // Append links to the second section and sections div's
    section2.appendChild(div1);
    section2.appendChild(div2);

    div1.appendChild(homeLink);
    div1.appendChild(menuLink);
    div1.appendChild(aboutLink);
    div1.appendChild(careerLink);
    div1.appendChild(contactLink);

    div2.appendChild(instagramLink);
    div2.appendChild(twitterLink);
    div2.appendChild(linkedInLink);

    // Append all sections to the footer element
    footer.appendChild(section1);
    footer.appendChild(section2);

    // Append the footer to the body of the document
    document.body.appendChild(footer);
};

export default renderFooter;