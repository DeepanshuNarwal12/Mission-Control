/*
Mission Control System
Step 6: Random Mission Generator and Reset System
*/


// ===============================
// Mission Arrays
// ===============================


const agents = [
    "Ghost",
    "Shadow",
    "Viper",
    "Nova"
];


const locations = [
    "Mars Colony",
    "Arctic Base",
    "Cyber City",
    "Deep Space Station"
];


const weapons = [
    "Plasma Rifle",
    "EMP Device",
    "Laser Cannon",
    "Stealth Gear"
];


const objectives = [
    "Rescue Operation",
    "Infiltration",
    "Reconnaissance",
    "Extraction"
];


const risks = [
    "Low",
    "Medium",
    "High",
    "Extreme"
];




// ===============================
// Selected Values
// ===============================


let selectedAgent = "";

let selectedLocation = "";

let selectedWeapon = "";

let selectedObjective = "";

let selectedRisk = "";




// ===============================
// Index Counters
// ===============================


let agentIndex = 0;

let locationIndex = 0;

let weaponIndex = 0;

let objectiveIndex = 0;

let riskIndex = 0;




// ===============================
// DOM References
// ===============================


const launchButton =
document.querySelector(".launch-button");


const randomButton =
document.querySelector(".random-button");


const resetButton =
document.querySelector(".reset-button");


const briefingBox =
document.querySelector(".briefing-box");





// ===============================
// Selection Functions
// ===============================


function changeAgent(){

    selectedAgent = agents[agentIndex];

    document.querySelector(".mission-option:nth-child(1) span")
    .textContent = selectedAgent;


    agentIndex++;

    if(agentIndex >= agents.length){

        agentIndex = 0;

    }

}




function changeLocation(){

    selectedLocation = locations[locationIndex];

    document.querySelector(".mission-option:nth-child(2) span")
    .textContent = selectedLocation;


    locationIndex++;

    if(locationIndex >= locations.length){

        locationIndex = 0;

    }

}





function changeWeapon(){

    selectedWeapon = weapons[weaponIndex];

    document.querySelector(".mission-option:nth-child(3) span")
    .textContent = selectedWeapon;


    weaponIndex++;

    if(weaponIndex >= weapons.length){

        weaponIndex = 0;

    }

}





function changeObjective(){

    selectedObjective = objectives[objectiveIndex];

    document.querySelector(".mission-option:nth-child(4) span")
    .textContent = selectedObjective;


    objectiveIndex++;

    if(objectiveIndex >= objectives.length){

        objectiveIndex = 0;

    }

}





function changeRisk(){

    selectedRisk = risks[riskIndex];

    document.querySelector(".mission-option:nth-child(5) span")
    .textContent = selectedRisk;


    riskIndex++;

    if(riskIndex >= risks.length){

        riskIndex = 0;

    }

}





// ===============================
// Mission Generator
// ===============================


function generateMission(){


    if(

        selectedAgent === "" ||
        selectedLocation === "" ||
        selectedWeapon === "" ||
        selectedObjective === "" ||
        selectedRisk === ""

    ){


        briefingBox.innerHTML = `

        <h2>
        ⚠ MISSION INCOMPLETE
        </h2>

        <p>
        Please complete all selections before launch.
        </p>

        `;


        return;

    }



    briefingBox.innerHTML = `


    <h2>
    🚀 MISSION BRIEFING
    </h2>


    <p><strong>Agent:</strong> ${selectedAgent}</p>

    <p><strong>Location:</strong> ${selectedLocation}</p>

    <p><strong>Weapon:</strong> ${selectedWeapon}</p>

    <p><strong>Objective:</strong> ${selectedObjective}</p>

    <p><strong>Risk:</strong> ${selectedRisk}</p>


    <h3>
    STATUS: AUTHORIZED
    </h3>


    `;


}





// ===============================
// Random Mission
// ===============================


function randomMission(){


    selectedAgent =
    agents[Math.floor(Math.random()*agents.length)];


    selectedLocation =
    locations[Math.floor(Math.random()*locations.length)];


    selectedWeapon =
    weapons[Math.floor(Math.random()*weapons.length)];


    selectedObjective =
    objectives[Math.floor(Math.random()*objectives.length)];


    selectedRisk =
    risks[Math.floor(Math.random()*risks.length)];



    document.querySelector(".mission-option:nth-child(1) span")
    .textContent = selectedAgent;


    document.querySelector(".mission-option:nth-child(2) span")
    .textContent = selectedLocation;


    document.querySelector(".mission-option:nth-child(3) span")
    .textContent = selectedWeapon;


    document.querySelector(".mission-option:nth-child(4) span")
    .textContent = selectedObjective;


    document.querySelector(".mission-option:nth-child(5) span")
    .textContent = selectedRisk;


}





// ===============================
// Reset System
// ===============================


function resetMission(){


    selectedAgent = "";

    selectedLocation = "";

    selectedWeapon = "";

    selectedObjective = "";

    selectedRisk = "";



    document
    .querySelectorAll(".mission-option span")
    .forEach(function(item){

        item.textContent = "Not Selected";

    });



    briefingBox.innerHTML = `

    <h2>
    Mission Briefing
    </h2>


    <p>
    Awaiting mission data...
    </p>

    `;


}




// ===============================
// Event Listeners
// ===============================


document
.querySelector(".mission-option:nth-child(1) button")
.addEventListener("click", changeAgent);



document
.querySelector(".mission-option:nth-child(2) button")
.addEventListener("click", changeLocation);



document
.querySelector(".mission-option:nth-child(3) button")
.addEventListener("click", changeWeapon);



document
.querySelector(".mission-option:nth-child(4) button")
.addEventListener("click", changeObjective);



document
.querySelector(".mission-option:nth-child(5) button")
.addEventListener("click", changeRisk);



launchButton.addEventListener(
"click",
generateMission
);



randomButton.addEventListener(
"click",
randomMission
);



resetButton.addEventListener(
"click",
resetMission
);