"USE STRICT";

function renderJoinOurTeam(){
    // Create first section and its content
    const section1 = document.createElement('section');
    section1.className = "container join_our_team bacground_fffcf5";

    const h2_1 = document.createElement('h2');
    h2_1.textContent = "Join our team!";

    const div1 = document.createElement('div');
    const p1 = document.createElement('p');
    p1.textContent = 
    `
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur totam et, recusandae dolores illum. Explicabo dicta cumque laudantium alias inventore! Voluptate molestiae distinctio quas voluptates aperiam reprehenderit odio cumque?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur totam et, recusandae dolores illum. Explicabo dicta cumque laudantium alias inventore! Voluptate molestiae distinctio quas voluptates aperiam reprehenderit odio cumqueLorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur totam et, recusandae dolores illum. Explicabo dicta cumque laudantium alias inventore! Voluptate molestiae distinctio quas voluptates aperiam reprehenderit odio cumque?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur totam et, recusandae dolores illum. Explicabo dicta cumque laudantium alias inventore! Voluptate molestiae distinctio quas voluptates aperiam reprehenderit odio cumqueLorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur totam et, recusandae dolores illum. Explicabo dicta cumque laudantium alias inventore! Voluptate molestiae distinctio quas voluptates aperiam reprehenderit odio cumque?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur totam et, recusandae dolores illum. Explicabo dicta cumque laudantium alias inventore! Voluptate molestiae distinctio quas voluptates aperiam reprehenderit odio cumqueLorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur totam et, recusandae dolores illum. Explicabo dicta cumque laudantium alias inventore! Voluptate molestiae distinctio quas voluptates aperiam reprehenderit odio cumque?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur totam et, recusandae dolores illum. Explicabo dicta cumque laudantium alias inventore! Voluptate molestiae distinctio quas voluptates aperiam reprehenderit odio cumque?
    `;

    const div2 = document.createElement('div');
    div2.className = "team_container";

    const div3 = document.createElement('div');
    div3.className = "teamimg";

    const div4 = document.createElement('div');
    div4.className = "teamimg";

    const div5 = document.createElement('div');
    div5.className = "teamimg";

    const img1 = document.createElement('img');
    img1.className = "zoom";
    img1.src = "./img/man_1.png";
    img1.alt = "First chef";

    const img2 = document.createElement('img');
    img2.className = "zoom";
    img2.src = "./img/man_2.png";
    img2.alt = "Second chef";

    const img3 = document.createElement('img');
    img3.className = "zoom";
    img3.src = "./img/man_3.png";
    img3.alt = "Third chef";

     // Append elements to the first section
     section1.appendChild(h2_1);

     section1.appendChild(div1);
     div1.appendChild(p1);

     div2.appendChild(div3)
     div3.appendChild(img1);
   
     section1.appendChild(div2);

     div2.appendChild(div4)
     div4.appendChild(img2);
   
     section1.appendChild(div2);

     div2.appendChild(div5)
     div5.appendChild(img3);
   
     section1.appendChild(div2);

    

     // Append the first section to the main element of the document
    document.querySelector('#main_contact').prepend(section1);
};

export default renderJoinOurTeam;