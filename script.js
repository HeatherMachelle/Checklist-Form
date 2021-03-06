// Write your JavaScript code here!
let checkNumber = (value) => {
   if (isNaN(value))
      return true;
};

let checkFuel = (value) => {
   if (value < 10000)
      return true;
};

let checkCargoMass = (value) => {
   if (value > 10000)
      return true;
};

window.addEventListener('load', function () {
   let form = document.querySelector('form');
   form.addEventListener('submit', async function (event){
      let pilotName = document.querySelector('input[name=pilotName]');
      let copilotName = document.querySelector('input[name=copilotName]');
      let fuelLevel = document.querySelector('input[name=fuelLevel]');
      let cargoMass = document.querySelector('input[name=cargoMass]');


      event.preventDefault();
      // console.log(pilotName.value);
      // console.log(copilotName.value);
      // console.log(fuelLevel.value);
      // console.log(typeOf(fuelLevel).value);
      // console.log(cargoMass.value);

      let cargoMassNumber = parseInt(cargoMass.value);
      let fuelLevelNumber = parseInt(fuelLevel.value);


      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert('all fields are required');
      }

      if (isNaN(cargoMassNumber)) {
         console.log(cargoMassNumber)
         alert('The cargo mass must be a number')
      }
      if (isNaN(fuelLevelNumber)) {
         console.log(fuelLevelNumber)
         alert('The fuel level must be a number')
      }
      // console.log(checkFuel(fuelLevel.value));
      // console.log(checkCargoMass(cargoMass.value));
      let fi = document.getElementById('faultyItems')
      let fs = document.getElementById('cargoStatus')
      let ls = document.getElementById('launchStatus');

      if (checkFuel(fuelLevelNumber)) {
         fi.style.visibility = 'visible';
         fs.innerHTML = 'There is not enough fuel for the journey';
         ls.innerHTML = 'Shuttle is not for launch';
         ls.style.color = 'red';
      }

      else if (checkCargoMass(cargoMassNumber)) {
         fi.style.visibility = 'visible';
         fs.innerHTML = 'There is to much mass for the shuttle to take of';
         ls.innerHTML = 'Shuttle is not for launch';
         ls.style.color = 'red';

      }
      else{
         ls.innerHTML = 'Shuttle is ready for launch';
         ls.style.color = 'green';
       }
       
      //  fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      //    response.json().then(function (json) { });
       let json = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(data => { return data.json() } )
      //  let json = data.json()
      //  console.log (data)
       console.log (json)

         const div = document.getElementById("missionTarget");
         console.log (div)
         div.innerHTML = `
      <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[5].name}</li>
            <li>Diameter: ${json[5].diameter}</li>
            <li>Star: ${json[5].star}</li>
            <li>Distance from Earth: ${json[5].distance}</li>
            <li>Number of Moons: ${json[5].moons}</li>
         </ol>
            <img src="${json[5].image}"> 
            `;

      });
    });
   






// This block of code shows how to format the HTML once you fetch some planetary JSON!

// window.addEventListener("load", function () {
//    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
//       response.json().then(function (json) {
//          const div = document.getElementById("missonTarget");
//          div.innerHTML = `
//       <h2>Mission Destination</h2>
//          <ol>
//             <li>Name: ${json.name}</li>
//             <li>Diameter: ${json.diameter}</li>
//             <li>Star: ${json.stars}</li>
//             <li>Distance from Earth: ${json.earth}</li>
//             <li>Number of Moons: ${json.moon}</li>
//          </ol>
//             <img src="${json.image}"> 
//             `;
//       });
//    });
// });
// console.log(response)