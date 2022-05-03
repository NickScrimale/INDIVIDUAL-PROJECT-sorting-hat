const renderToDom = (divId, html) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = html;
    
}

const studentList = [
    {
        id: 1,
        name: "Rennala",
        house: "Gryffindor",
        imageUrl: "https://cdna.artstation.com/p/assets/images/images/046/890/814/large/oreki-genya-mom1.jpg?1648000399"
    },
    {
        id: 2,
        name: "Radahn",
        house: "Slytherin",
        imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/645fd3c5-6089-4f57-b77d-9b73809492a9/dexw8j8-78180856-e1a2-4c58-a8e6-75380aa62956.png/v1/fill/w_1920,h_2304,q_80,strp/general_radahn_by_sirjimb_dexw8j8-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjMwNCIsInBhdGgiOiJcL2ZcLzY0NWZkM2M1LTYwODktNGY1Ny1iNzdkLTliNzM4MDk0OTJhOVwvZGV4dzhqOC03ODE4MDg1Ni1lMWEyLTRjNTgtYThlNi03NTM4MGFhNjI5NTYucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.thj-azy-A0zUlh_qLjzs93oqZ5uuO7KKNhgnInxDUS4"
    },
    {
        id: 3,
        name: "Sellen",
        house: "Ravenclaw",
        imageUrl: "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/04/elden-ring-sorceress-sellen-unmasked.jpg"
    },
    {
        id: 4,
        name: "Thops",
        house: "Hufflepuff",
        imageUrl: "https://cdn.vox-cdn.com/thumbor/KCeIbCGPaycH0EZ4T4d2WOiq1Zw=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23353703/Thops_guide_Elden_Ring_header.jpg"
    },
    {
        id: 5,
        name: "Seluvis",
        house: "Slytherin",
        imageUrl: "https://www.gamerguides.com/assets/guides/resize1100x-/234/Seluvis_Elden_Ring.jpg"
    },
    {
        id: 6,
        name: "Ranni",
        house: "Gryffindor",
        imageUrl: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/03/elden-ring-ranni.jpg"
    }
]

const darkArmy = [
    {
      name: studentList.name
    }
]



const filterButtons = () => {
  const domString= `
  <div class="d-flex flex-wrap justify-content-between my-3">
    <button class="btn btn-secondary btn-lg buttonRow" id="Gryffindor">Gryffindor</button>
    <button class="btn btn-secondary btn-lg buttonRow" id="Hufflepuff">Hufflepuff</button>
    <button class="btn btn-secondary btn-lg buttonRow" id="Ravenclaw">Ravenclaw</button>
    <button class="btn btn-secondary btn-lg buttonRow" id="Slytherin">Slytherin</button>
    <button class="btn btn-secondary btn-lg buttonRow" id="all">All</button>
  </div>
  `;
  renderToDom('#filterContainer', domString);
}

const cardsOnDom = (studentList) => {
    let domString = '';
  
    for (const student of studentList) {
      domString += `
      
          <div class="card" style="width: 18rem;">
          <img src="${student.imageUrl}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${student.name}</h5>
            <p class="card-text">${student.house}</p>
            <a href="#" class="btn btn-primary" id="switch--${student.id}">Expel</a>
          </div>
        </div>
      
      `
    }
    renderToDom('#magicUsers', domString);
}

const cardsOnDom2 = (darkArmy) => {
  for (const soldier of darkArmy) {
    let domString = `<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Dark Army</h5>
        <p class="card-text">Unfortunately, ${soldier.name} has joined the dark army.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`
    renderToDom('#darkMagic', domString)
  }

  
  
}

const eventListeners = () => {
  document.querySelector('#filterContainer').addEventListener('click', (e) => {
    if (e.target.id === "all") {
      cardsOnDom(studentList);
    } else if (e.target.id) {
      const students = studentList.filter(student => student.house === e.target.id);
      cardsOnDom(students);
    }
    console.log("clicked filter", e.target.id);
  });


  document.querySelector('#darkMagic', '#magicUsers').addEventListener('click', (e) => {
    if (e.target.id) {
      // const index = (studentList.findIndex, darkArmy.findIndex)
      // const [method, student] = e.target.id.split('--')

      const btnSwitch = document.getElementById('switch');
      btnSwitch.onclick = SwitchClicked;

      function SwitchClicked(){
    //Remove user from aBlocked
        const expelledSudent = expelledById(studentList, student.id);

    //Add the removed user to arrayAdmins
        if(expelledSudent != null){
          darkArmy.push(expelledSudent);
        }
    }

//Will remove the first user found with this email and returns it
    function expelledById(arrayOfStudents, id){
        for(const i=0; i<arrayOfStudents.length; i++){
            if(arrayOfStudents[i].id === id){
                const removedStudent = arrayOfStudents.splice(i, 1);
                if(removedStudent.length > 0) return removedStudent[0];            
            }
        }

    return null;
    }



    }
    
    
    
    
  })
}






const startApp = () => {
  filterButtons()
  cardsOnDom(studentList)
  cardsOnDom2(darkArmy)
  eventListeners()
}

startApp()