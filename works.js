let work = [
    {
        "companyname":"CSC",
        "role":"TRAINER",
        "year":"2021(Present)",
        "location":"Chennai",
        "responsibilities":"Train and mentor the next generation of developers. Adept at designing comprehensive training programs, delivering engaging lectures, and providing hands-on support to foster practical skills. Committed to helping learners achieve their full potential by creating an interactive and supportive learning environment. "
    },
    {
        "companyname":"IZEON INNOVATIVE PVT LTD",
        "role":"FULLSTACK DEVELOPER",
        "year":"2023(Present)",
        "location":"Chennai",
        "responsibilities":"  Designing, developing, and maintaining web applications. Proficient in both front-end and back-end technologies, with a strong focus on delivering high-quality, scalable, and efficient software solutions. Adept at collaborating with cross-functional teams, understanding client requirements, and translating them into technical specifications to achieve business goals."
    },
    {
        "companyname":"",
        "role":"",
        "year":"",
        "location":"",
        "responsibilities":"MY JOURNEY WILL CONTINUE!"
    }
];

let w = 0;

function updateDisplayex() {
    document.getElementById("expformobile").innerHTML = `
        <div >
          <div class="card bg-dark" style="width: 300px;">
            <div class="card-header">
              <p><i class="fa-solid fa-briefcase"></i></i><br>${work[w].companyname}</p>
            </div>
            <div class="card-body">
              <p>${work[w].role}</p>
              <p>${work[w].responsibilities}</p>
              <div style='display:grid;grid-template-columns:auto auto auto;'>
         <div >
           <button id="prevBtnexp" class="btn btn-outline-primary" onclick="previousexp()"><i class="fa-solid fa-angle-left"></i></button>
         </div>
         <div>
         </div>
         <div >
         <button id="nextBtnexp" class="btn btn-outline-primary" onclick="Nextexp()"><i class="fa-solid fa-angle-right"></i></button>
         </div>
              <br>
            </div>
            <div class="card-footer">
              <p>${work[w].year}</p>
              <p>${work[w].location}</p>
            </div>
          </div>
         </div>
       </div>
    `;

    // Update button states
    document.getElementById("prevBtnexp").disabled = w === 0;
    document.getElementById("nextBtnexp").disabled = w === education.length - 1;
}

function Nextexp() {
    if (w < education.length - 1) {
        w++;
        updateDisplayex();
    }
}

function previousexp() {
    if (w > 0) {
        w--;
        updateDisplayex();
    }
}

// Initial display
updateDisplayex();
