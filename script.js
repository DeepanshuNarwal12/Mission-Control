/*
Mission Control System
Step 3: JavaScript Variables and Arrays
*/


// ===============================
// Mission Choice Arrays
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
// Current Selection Variables
// ===============================


let selectedAgent = "";

let selectedLocation = "";

let selectedWeapon = "";

let selectedObjective = "";

let selectedRisk = "";



// ===============================
// Current Array Positions
// ===============================


let agentIndex = 0;

let locationIndex = 0;

let weaponIndex = 0;

let objectiveIndex = 0;

let riskIndex = 0;



// ===============================
// DOM Element References
// ===============================


const agentButton =
document.querySelector(".mission-option:nth-child(1) button");


const locationButton =
document.querySelector(".mission-option:nth-child(2) button");


const weaponButton =
document.querySelector(".mission-option:nth-child(3) button");


const objectiveButton =
document.querySelector(".mission-option:nth-child(4) button");


const riskButton =
document.querySelector(".mission-option:nth-child(5) button");


const launchButton =
document.querySelector(".launch-button");


const briefingBox =
document.querySelector(".briefing-box");



// System test message

console.log("Mission Control System Initialized");

console.log("Available Agents:", agents);

console.log("Available Locations:", locations);