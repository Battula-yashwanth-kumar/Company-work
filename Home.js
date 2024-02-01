{/*fetch('./Employee.json')
.then(function(response){
  return response.json();
})
.then(function(data){
    document.getElementById('navlink').innerHTML=`
    ${data.map(EmpTemplate).join('')}`;
  }
)

fetch('./App.json')
.then(function(response){
  return response.json();
})
.then(function(data){
  document.getElementById('appid').innerHTML=`
  ${data.map(EmpTemplate).join('')}`;
})
  
  function EmpTemplate(emp) {
    return `
      <div class ="box" onclick="navigateTo('${emp.link}')">
        <img src ='${emp.img}' alt ="loading">
        <figcaption class ="cap"> ${emp.name}</figcaption>
      </div>
    `;
  }

  function navigateTo(page){
    window.location.href=page + '.html';
  }

  */
}


fetch('./Employee.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const navlinkContainer = document.getElementById('navlink');
        for (let i = 0; i < data.length; i++) {
            navlinkContainer.innerHTML += EmpTemplate(data[i]);
        }
    });

// Fetch App.json
fetch('./App.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const appidContainer = document.getElementById('appid');
        for (let i = 0; i < data.length; i++) {
            appidContainer.innerHTML += EmpTemplate(data[i]);
        }
    });

function EmpTemplate(emp) {
    return `
        <div class="link" onclick="navigateTo('${emp.link}')">
            <img src='${emp.img}' alt="loading" class="Image">
            <figcaption class="cap"> ${emp.name}</figcaption>
        </div>
    `;
}

function navigateTo(page) {
    window.location.href = page + '.html';
}

let empl = true;
function Handleemployee() {
    let btn = document.getElementById('emp');
    const navlinkContainer = document.getElementById('navlink');

    empl = !empl;
    btn.innerHTML = empl ? `<i class="fa-solid fa-caret-up arr"></i>` : `<i class="fa-solid fa-caret-down arr"></i>`;

    fetch('./Employee.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const visibleData = empl ? data : data.slice(0, 5);
            navlinkContainer.innerHTML = data.map((emp, index) => {
                return `
                    <div class="link" style="display: ${empl || index < 5 ? 'block' : 'none'};" onclick="navigateTo('${emp.link}')">
                        <img src='${emp.img}' alt="loading" class="Image">
                        <figcaption class="cap"> ${emp.name}</figcaption>
                    </div>
                `;
            }).join('');
        });
}

let appp = true;
function Handleapp() {
    let btn = document.getElementById('ap');
    const appidContainer = document.getElementById('appid');

    appp = !appp;
    btn.innerHTML = appp ? `<i class="fa-solid fa-caret-up arr"></i>` : `<i class="fa-solid fa-caret-down arr"></i>`;

    fetch('./App.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const visibleData = appp ? data : data.slice(0, 5);
            appidContainer.innerHTML = data.map((emp, index) => {
                return `
                    <div class="link" style="display: ${appp || index < 5 ? 'block' : 'none'};" onclick="navigateTo('${emp.link}')">
                        <img src='${emp.img}' alt="loading" class="Image">
                        <figcaption class="cap"> ${emp.name}</figcaption>
                    </div>
                `;
            }).join('');
        });
}
