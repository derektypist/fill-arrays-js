// Set Up Variables (including Arrays)

let txt = "";

let arr1 = Array(1).fill(0);            // Fill 0 once
let arr2 = Array(3).fill(0);            // Fill 0 three times
let arr3 = Array(5).fill('Project');    // Fill Project five times
let arr4 = Array(4).fill(true);         // Fill true four times

// Build txt
txt += `First array is ${arr1} <br>`;
txt += `Second array is ${arr2} <br>`;
txt += `Third array is ${arr3} <br>`;
txt += `Fourth array is ${arr4} <br>`;

// Display txt in the browser
document.getElementById("demo").innerHTML = txt;

