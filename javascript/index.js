'use strict';

let chosenMode = "game";

console.log("chosenMode");

// When a question isn't being asked (including at the start), disable the presidential portrait section.
document.getElementById("pres-button-area").style.pointerEvents = "none";
document.getElementById("pres-name-box").style.display = "none";
//


function toggle() {
    if (chosenMode === "game") {
        chosenMode = "info";
        document.getElementById("mode-game").style.display = "none";
        document.getElementById("mode-info").style.display = "block";
    } else if (chosenMode === "info") {
        chosenMode = "game";
        document.getElementById("mode-info").style.display = "none";
        document.getElementById("mode-game").style.display = "block";
    }
}


// Question Asking

let questionBeingAsked;
let questionNumber = 1;

const presidentialList = ['washington', 'adams_j', 'jefferson', 'madison', 'monroe', 'adams_jq', 'jackson', 'vanburen', 'harrison_wh', 'tyler', 'polk', 'taylor', 'fillmore', 'pierce', 'buchanan', 'lincoln', 'johnson_a', 'grant', 'hayes', 'garfield', 'arthur', 'cleveland', 'harrison_b', 'mckinley', 'roosevelt_t', 'taft', 'wilson', 'harding', 'coolidge', 'hoover', 'roosevelt_fd', 'truman', 'eisenhower', 'kennedy', 'johnson_lb', 'nixon', 'ford', 'carter', 'reagan', 'bush_ghw', 'clinton', 'bush_gw', 'obama', 'trump', 'biden'];

// for (questionNumber = 1; questionNumber <= 45; questionNumber++) {
//     document.getElementById("question-asker").innerText = `Question ${questionNumber}`;
//     console.log(`Question ${questionNumber}`);
// }

// presidentialList.forEach(element => {
//     console.log(element);
// });

// for (const e of presidentialList) {
//     console.log(`${e} is one of the U.S. presidents.`)
// }

for (const e of presidentialList) {
    // console.log(`${e} is one of the U.S. presidents.`)
}


async function getQuestions() {
    const response = await fetch("javascript/questions.json");
    const data = await response.json();

    for (let i = 0; i < data.length; i++) {
        console.log(`Question ${data[i].question}`);
    }

}

getQuestions();


// Question answering

let chosenPresident;
let currentAnswers = [];
const chosenPresidentBox = document.getElementById("pres-name-box");


function displayChosenPresident() {
    document.getElementById("pres-button-area").style.pointerEvents = "none";
    document.getElementById("pres-name-box").style.display = "none";
}

// The function revealAnswer() reveals weather the answer is correct or not.
// If the answer is correct, the president is removed from the json.
// If any questions in the json no longer have any available answers, those questions are also removed.

function revealAnswer() {
    console.log(`You have chosen ${chosenPresident}. The correct answer is ${currentAnswers}.`);
    if (currentAnswers.includes(chosenPresident)) {
        console.log(`You're right!`);

        // Remove any instance of that correct answer from future questions, so it won't be a possibility going forward.
        for (let i = 0; i < superJSON.length; i++) {
            if (superJSON[i]["answer"].includes(chosenPresident)) {
                //remove
                superJSON[i]["answer"] = superJSON[i]["answer"].filter(function (nameToBeRemoved) {
                    return nameToBeRemoved !== chosenPresident
                });
            }
            console.log(`testing oh testing ${superJSON[i]["question"]}: ${superJSON[i]["answer"]}`);
        }

        // Remove any questions that no longer have any remaining answers
        for (let i = 0; i < superJSON.length; i++) {
            if (superJSON[i]["answer"].length === 0) {
                //remove
                // THIS NEEDS TO BE TESTED!!!!!!
                // THIS NEEDS TO BE TESTED!!!!!!
                // THIS NEEDS TO BE TESTED!!!!!!
                superJSON.splice(superJSON[i], 1);
                // THIS NEEDS TO BE TESTED!!!!!!
                // THIS NEEDS TO BE TESTED!!!!!!
                // THIS NEEDS TO BE TESTED!!!!!!
            }
            console.log(`testing oh testing ${superJSON[i]["question"]}: ${superJSON[i]["answer"]}`);
        }

        // Unhighlight president's portrait image, since that president cannot be used any more.
        //!!!!!!!!!! instead of this, make an array of used answers. After a president has been used, add that name to the array. The with one click,
        /// add all presidents in that array to be unhighlighted and unclickable. Then, with a new game, reset this.!!!!!!!!!!!!!!!!!!!!!!!
        
        document.getElementById(`portrait-${chosenPresident}`).style.filter = "sepia(100%) opacity(75%) brightness(.25)";
    } else {
        console.log(`You're wrong!`);
    }

}

// When presidents are actually clicked and therefore chosen
function chooserWashington() {
    chosenPresident = "washington";
    document.getElementById("answer-box").innerText = `You have chosen George Washington.`;
    displayChosenPresident();
    revealAnswer();
}

function chooserAdams_J() {
    chosenPresident = "adams_j";
    document.getElementById("answer-box").innerText = `You have chosen John Adams.`;
    displayChosenPresident();
    revealAnswer();
}

function chooserJefferson() {
    chosenPresident = "jefferson";
    document.getElementById("answer-box").innerText = `You have chosen Thomas Jefferson.`;
    displayChosenPresident();
    revealAnswer();
}

function chooserMadison() {
    chosenPresident = "madison";
    document.getElementById("answer-box").innerText = `You have chosen James Madison.`;
    displayChosenPresident();
    revealAnswer();
}

function chooserMonroe() {
    chosenPresident = "monroe";
    document.getElementById("answer-box").innerText = `You have chosen James Monroe.`;
    displayChosenPresident();
    revealAnswer();
}

function chooserAdams_JQ() {
    chosenPresident = "adams_jq";
    document.getElementById("answer-box").innerText = `You have chosen John Quincy Adams.`;
    displayChosenPresident();
    revealAnswer();
}

// Display president name when user hovers over their image without clicking to choose

function hoverWashington() {
    chosenPresidentBox.innerText = "George Washington";
}

function hoverAdams_J() {
    chosenPresidentBox.innerText = "John Adams";
}

function hoverJefferson() {
    chosenPresidentBox.innerText = "Thomas Jefferson";
}

function hoverMadison() {
    chosenPresidentBox.innerText = "James Madison";
}

function hoverMonroe() {
    chosenPresidentBox.innerText = "James Monroe";
}

function hoverAdams_JQ() {
    chosenPresidentBox.innerText = "John Quincy Adams";
}

function hoverJackson() {
    chosenPresidentBox.innerText = "Andrew Jackson";
}

function hoverVanBuren() {
    chosenPresidentBox.innerText = "Martin Van Buren";
}

function hoverHarrison_WH() {
    chosenPresidentBox.innerText = "William Henry Harrison";
}

function hoverTyler() {
    chosenPresidentBox.innerText = "John Tyler";
}

function hoverPolk() {
    chosenPresidentBox.innerText = "James Polk";
}

function hoverTaylor() {
    chosenPresidentBox.innerText = "Zachary Taylor";
}

function hoverFillmore() {
    chosenPresidentBox.innerText = "Millard Fillmore";
}

function hoverPierce() {
    chosenPresidentBox.innerText = "Franklin Pierce";
}

function hoverBuchanan() {
    chosenPresidentBox.innerText = "James Buchanan";
}

function hoverLincoln() {
    chosenPresidentBox.innerText = "Abraham Lincoln";
}

function hoverJohnson_A() {
    chosenPresidentBox.innerText = "Andrew Johnson";
}

function hoverGrant() {
    chosenPresidentBox.innerText = "Ulysses S. Grant";
}

function hoverHayes() {
    chosenPresidentBox.innerText = "Rutherford Hayes";
}

function hoverGarfield() {
    chosenPresidentBox.innerText = "James Garfield";
}

function hoverArthur() {
    chosenPresidentBox.innerText = "Chester Arthur";
}

function hoverCleveland() {
    chosenPresidentBox.innerText = "Grover Cleveland";
}

function hoverHarrison_B() {
    chosenPresidentBox.innerText = "Benjamin Harrison";
}

function hoverMcKinley() {
    chosenPresidentBox.innerText = "William McKinley";
}

function hoverRoosevelt_T() {
    chosenPresidentBox.innerText = "Teddy Roosevelt";
}

function hoverTaft() {
    chosenPresidentBox.innerText = "William Howard Taft";
}

function hoverWilson() {
    chosenPresidentBox.innerText = "Woodrow Wilson";
}

function hoverHarding() {
    chosenPresidentBox.innerText = "Warren G. Harding";
}

function hoverCoolidge() {
    chosenPresidentBox.innerText = "Calvin Coolidge";
}

function hoverHoover() {
    chosenPresidentBox.innerText = "Herbert Hoover";
}

function hoverRoosevelt_FD() {
    chosenPresidentBox.innerText = "Franklin D. Roosevelt";
}

function hoverTruman() {
    chosenPresidentBox.innerText = "Harry Truman";
}

function hoverEisenhower() {
    chosenPresidentBox.innerText = "Dwight Eisenhower";
}

function hoverKennedy() {
    chosenPresidentBox.innerText = "John F. Kennedy";
}

function hoverJohnson_LB() {
    chosenPresidentBox.innerText = "Lyndon Johnson";
}

function hoverNixon() {
    chosenPresidentBox.innerText = "Richard Nixon";
}

function hoverFord() {
    chosenPresidentBox.innerText = "Gerald Ford";
}

function hoverCarter() {
    chosenPresidentBox.innerText = "Jimmy Carter";
}

function hoverReagan() {
    chosenPresidentBox.innerText = "Ronald Reagan";
}

function hoverBush_GHW() {
    chosenPresidentBox.innerText = "George H.W. Bush";
}

function hoverClinton() {
    chosenPresidentBox.innerText = "Bill Clinton";
}

function hoverBush_GW() {
    chosenPresidentBox.innerText = "George W. Bush";
}

function hoverObama() {
    chosenPresidentBox.innerText = "Barack Obama";
}

function hoverTrump() {
    chosenPresidentBox.innerText = "Donald Trump";
}

function hoverBiden() {
    chosenPresidentBox.innerText = "Joe Biden";
}

function hoverNone() {
    chosenPresidentBox.innerText = "";
}