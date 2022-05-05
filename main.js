const renderToDom = (divId, html) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = html;
    
}

const studentList = [
    {
        id: 1,
        name: "Rennala",
        house: "Gryffindor",
        imageUrl: "https://cdna.artstation.com/p/assets/images/images/046/890/814/large/oreki-genya-mom1.jpg?1648000399",
        expelled: false
    },
    {
        id: 2,
        name: "Radahn",
        house: "Slytherin",
        imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/645fd3c5-6089-4f57-b77d-9b73809492a9/dexw8j8-78180856-e1a2-4c58-a8e6-75380aa62956.png/v1/fill/w_1920,h_2304,q_80,strp/general_radahn_by_sirjimb_dexw8j8-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjMwNCIsInBhdGgiOiJcL2ZcLzY0NWZkM2M1LTYwODktNGY1Ny1iNzdkLTliNzM4MDk0OTJhOVwvZGV4dzhqOC03ODE4MDg1Ni1lMWEyLTRjNTgtYThlNi03NTM4MGFhNjI5NTYucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.thj-azy-A0zUlh_qLjzs93oqZ5uuO7KKNhgnInxDUS4",
        expelled: true
    },
    {
        id: 3,
        name: "Sellen",
        house: "Ravenclaw",
        imageUrl: "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/04/elden-ring-sorceress-sellen-unmasked.jpg",
        expelled: false
    },
    {
        id: 4,
        name: "Thops",
        house: "Hufflepuff",
        imageUrl: "https://cdn.vox-cdn.com/thumbor/KCeIbCGPaycH0EZ4T4d2WOiq1Zw=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23353703/Thops_guide_Elden_Ring_header.jpg",
        expelled: false
    },
    {
        id: 5,
        name: "Seluvis",
        house: "Slytherin",
        imageUrl: "https://www.gamerguides.com/assets/guides/resize1100x-/234/Seluvis_Elden_Ring.jpg",
        expelled: true
    },
    {
        id: 6,
        name: "Ranni",
        house: "Gryffindor",
        imageUrl: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/03/elden-ring-ranni.jpg",
        expelled: false
    }
]

const darkArmy = [
    
]

// const welcomeCard = () =>{
//   let domString = " " 
//    domString += `<div class="sort-card">
//   <div class="card-header">
//     Hello and welcome to hogwarts! 
//   </div>
//   <div class="card-body">
//     <h5 class="card-title">Please select the sort button to begin</h5>
//     <p class="card-text">Today is only the beginning! </p>
//    <a  id= "sort" onclick="sort()" href="#" class="btn btn-primary">Start</a>
//   </div>
//   </div>`
  
//   renderToDom('#introContainer',domString)
  
// }

const hide = () => {
  document.getElementById('formContainer').style.display ="none"
}

const sort = () => {
  document.getElementById('formContainer').style.display = "";
}

const sortingHat = () => {
  let domString = `<form>
    <div class="mb-3">
      <label for="studentInput" class="form-label">Student: </label>
      <input type="text" id="student-name" class="form-control" placeholder="Enter Your Name" required />
    </div>
    <div class="mb-3">
      <label for="imageUrl" class="form-label">Student Picture</label>
      <input type="imageUrl" class="form-control" id="imageUrl">
    </div>
    <button type="submit" class="btn btn-primary" value="submit">Sort!</button>
  </form>`;
  renderToDom('#createBtnContainer', domString)
}

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
      if(student.expelled === false) {
        domString += `
      
          <div class="card" style="width: 18rem;">
          <img src="${student.imageUrl}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${student.name}</h5>
            <p class="card-text">${student.house}</p>
            <a href="#" class="btn btn-primary" id="delete--${student.id}">Expel</a>
          </div>
        </div>
      `
      }
      
    }
    renderToDom('#magicUsers', domString);
}

const cardsOnDom2 = (studentList) => {
  let domString = " "
  for(let was of studentList){
    if(was.expelled === true){
      domString += `<div class="card" style="width: 18rem;">
        <img src="${was.imageUrl}" class="card-img-top" alt="...">
        <div class="card-body">
        <p class="card-text1"> Student: ${was.name}</p>
        <p class="card-text3"> Expelled: ${was.expelled}  </p>
        <p class="card-text2"> Former House: ${was.house}</p>
        </div>
      </div>`
  }
  }
  

  renderToDom('#darkMagic', domString)
  
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


  document.querySelector('#magicUsers').addEventListener('click', (e) => {
    
      
      const [method, student] = e.target.id.split('--')
      console.log(student)

      const index = studentList.findIndex(s => s.id === parseInt(student))

      if (e.target.id.includes('delete')) {
        console.log("Delete Button Pressed")
        darkArmy.push(...studentList.splice(index, 1));
        student.expelled = student.expelled ? false : true
        // student.expelled === !student.expelled
        // function stringToBoolean (string){
        //   switch(string.toLowerCase().trim()){
        //       case "true": case "yes": case "1": return true;
        //       case "false": case "no": case "0": case null: return false;
        //       default: return Boolean(string);
        //   }
        // }
        cardsOnDom(studentList)
        // stringToBoolean()
        console.log(darkArmy, studentList)
      }
    
  })
  const form= document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const houseNames= [
      "Gryffindor", "Hufflepuff", "Ravenclaw","Slytherin"
     ]
    
     let sortHouse= houseNames [Math.floor(Math.random()* houseNames.length)]
    const newStudent = {
      id:Math.floor(Math.random() * 10)+5,
      name: document.querySelector("#studentInput").value,
      house: sortHouse,
      imageUrl: document.querySelector("#imageUrl").value
    }
    console.log(newStudent)
    studentList.push(newStudent);
    cardsOnDom(studentList)
    form.reset();
  })

  

  
}







const startApp = () => {
  // welcomeCard()
  sortingHat()
  filterButtons()
  cardsOnDom(studentList)
  cardsOnDom2(studentList)
  eventListeners()
}

startApp()