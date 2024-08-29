let education = [
    {
        "degree":"MCA",
        "univeristy":"UNIVERSITY OF MADRAS",
        "year":"Pursuing",
        "percentage":".",
        "location":"Chennai"
    },
    {
        "degree":"BCA",
        "univeristy":"MADHA ARTS AND SCIENCE COLLEGE",
        "year":"2018-2021",
        "percentage":"78.08%",
        "location":"Chennai"
    },
    {
        "degree":"HIGHER SECONDARY",
        "univeristy":"ANJUHAM HIGHER SECONDARY SCHOOL",
        "year":"2017-2018",
        "percentage":"58.42%",
        "location":"Chennai"
    },
    {
        "degree":"SSLC",
        "univeristy":"ANJUHAM HIGHER SECONDARY SCHOOL",
        "year":"2015-2016",
        "percentage":"72.08%",
        "location":"Chennai"
    },
];

let i = 0;

function updateDisplay() {
    document.getElementById("educationformobile").innerHTML = `
        <div >
          <div class="card bg-dark" style="width: 300px;">
            <div class="card-header">
              <p><i class="fa-solid fa-graduation-cap"></i><br>${education[i].degree}</p>
            </div>
            <div class="card-body">
              <p>${education[i].univeristy}</p>
              <br>
            </div>
            <div class="card-footer">
              <p>${education[i].year}</p>
              <p>${education[i].percentage}</p>
              <p>${education[i].location}</p>
            </div>
          </div>
         </div>
       <div style='display:grid;grid-template-columns:auto auto auto;'>
         <div >
           <button id="prevBtn" class="btn btn-outline-primary" onclick="previoused()"><i class="fa-solid fa-angle-left"></i></button>
         </div>
         <div>
         </div>
         <div >
         <button id="nextBtn" class="btn btn-outline-primary" onclick="Nexted()"><i class="fa-solid fa-angle-right"></i></button>
         </div>
       </div>
    `;

    // Update button states
    document.getElementById("prevBtn").disabled = i === 0;
    document.getElementById("nextBtn").disabled = i === education.length - 1;
}

function Nexted() {
    if (i < education.length - 1) {
        i++;
        updateDisplay();
    }
}

function previoused() {
    if (i > 0) {
        i--;
        updateDisplay();
    }
}

// Initial display
updateDisplay();
