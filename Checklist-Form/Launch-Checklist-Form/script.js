// Write your JavaScript code here!
let checkNumber =(value) => {
   if(isNaN(value)) 
   return true;
}

let checkFuel = (value) => {
   if (value < 10000)
   return true;
}

let checkCargoMass =(value) => {
   if (value > 10000)
   return true;
}

window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
    
      
      event.preventDefault();
      // console.log(pilotName.value);
      // console.log(copilotName.value);
      // console.log(fuelLevel.value);
      // console.log(typeof(fuelLevel).value);
      // console.log(cargoMass.value);
      
      let cargoMassValue = ParseInt(cargoMass.value);
      let fuelLevelNumber = ParseInt(fuelLevel.value);
      
      
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === ""); {
         alert("all fields are required");
      }
      
      if(isNaN(cargoMass.value)){
         console.log(cargoMass,value)
         alert("The cargo mass must be a number")
      }
      if(isNaN(fuelLevel.value)){
         console.log(cargoMass,value)
         alert("The fuel level must be a number")
      }
      // console.log(checkFuel(fuelLevel.value));
      // console.log(checkCargoMass(cargoMass.value));
     
     if(checkFuel(fuelLevelNumber)){
        let p= document.getElementById("faultyItems")
        let fl= document.getElementById("fuelStaus")
        let ls= document.getElementById("launchStatus");
        p.style.visibility ="visible" ;
        fl.innerHTML = "There is not enough fuel for the journey";
        ls.innderHTML = "Shuttle is not for launch";
        ls.style.color = "red";
     }
     
     else if(checkCargoMass(cargoMassNumber)){
      let p= document.getElementById("faultyItems")
      let fl= document.getElementById("cargoStaus")
      let ls= document.getElementById("launchStatus");
      p.style.visibility ="visible" ;
      fl.innerHTML = "There is to much mass for the shuttle to take off";
      ls.innderHTML = "Shuttle is not for launch";
      ls.style.color = "red";
   

    });
   
   });




/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/ 