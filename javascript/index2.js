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
let wrongAnswers = 0;


function gameOver() {
    document.getElementById("game-over-notice").style.visibility = "visible";
    document.getElementById("question-asker-button").style.visibility = "hidden";
}

function displayChosenPresident() {
    document.getElementById("pres-button-area").style.pointerEvents = "none";
    document.getElementById("pres-name-box").style.display = "none";
}

// The function revealAnswer() reveals weather the answer is correct or not.
// If the answer is correct, the president is removed from the json.
// If any questions in the json no longer have any available answers, those questions are also removed.

function revealAnswer() {
    let chosenPresidentFullName = document.getElementById(`portrait-${chosenPresident}`).title;
    console.log(`You have chosen ${chosenPresident}. The correct answer is ${currentAnswers}.`);

    if (currentAnswers.includes(chosenPresident)) {
        console.log(`You're right!`);
        document.getElementById("answer-box").innerText = `You have chosen ${chosenPresidentFullName}. Correct!`;
        // Remove any instance of that correct answer from future questions, so it won't be a possibility going forward.
        for (let i = 0; i < superJSON.length; i++) {
            if (superJSON[i]["answer"].includes(chosenPresident)) {
                //remove
                superJSON[i]["answer"] = superJSON[i]["answer"].filter(function (nameToBeRemoved) {
                    return nameToBeRemoved !== chosenPresident
                });
            }
        }

        document.getElementById(`portrait-${chosenPresident}`).style.filter = "sepia(100%) opacity(75%) brightness(.25)";
    } else {
        wrongAnswers++

        if (wrongAnswers >= 1) {
            document.getElementById("mistake-1").style.visibility = "visible";
        }

        if (wrongAnswers >= 2) {
            document.getElementById("mistake-2").style.visibility = "visible";
        }

        if (wrongAnswers >= 3) {
            document.getElementById("mistake-3").style.visibility = "visible";
        }


        console.log(`You're wrong! You now have ${wrongAnswers} wrong answers.`);
        document.getElementById("answer-box").innerText = `You have chosen ${chosenPresidentFullName}. Incorrect! You have ${wrongAnswers} mistakes.`;
        if (wrongAnswers === 3) {
            gameOver();
        }
    }

}

// When presidents are actually clicked and therefore chosen
function chooserWashington() {
    chosenPresident = "washington";
    displayChosenPresident();
    revealAnswer();
}

function chooserAdams_J() {
    chosenPresident = "adams_j";
    displayChosenPresident();
    revealAnswer();
}

function chooserJefferson() {
    chosenPresident = "jefferson";
    displayChosenPresident();
    revealAnswer();
}

function chooserMadison() {
    chosenPresident = "madison";
    displayChosenPresident();
    revealAnswer();
}

function chooserMonroe() {
    chosenPresident = "monroe";
    displayChosenPresident();
    revealAnswer();
}

function chooserAdams_JQ() {
    chosenPresident = "adams_jq";
    displayChosenPresident();
    revealAnswer();
}

function chooserJackson() {
    chosenPresident = "jackson";
    displayChosenPresident();
    revealAnswer();
}

function chooserVanBuren() {
    chosenPresident = "vanburen";
    displayChosenPresident();
    revealAnswer();
}

function chooserHarrison_WH() {
    chosenPresident = "harrison_wh";
    displayChosenPresident();
    revealAnswer();
}

function chooserTyler() {
    chosenPresident = "tyler";
    displayChosenPresident();
    revealAnswer();
}

function chooserPolk() {
    chosenPresident = "polk";
    displayChosenPresident();
    revealAnswer();
}

function chooserTaylor() {
    chosenPresident = "taylor";
    displayChosenPresident();
    revealAnswer();
}

function chooserFillmore() {
    chosenPresident = "fillmore";
    displayChosenPresident();
    revealAnswer();
}

function chooserPierce() {
    chosenPresident = "pierce";
    displayChosenPresident();
    revealAnswer();
}

function chooserBuchanan() {
    chosenPresident = "buchanan";
    displayChosenPresident();
    revealAnswer();
}

function chooserLincoln() {
    chosenPresident = "lincoln";
    displayChosenPresident();
    revealAnswer();
}

function chooserJohnson_A() {
    chosenPresident = "johnson_a";
    displayChosenPresident();
    revealAnswer();
}

function chooserGrant() {
    chosenPresident = "grant";
    displayChosenPresident();
    revealAnswer();
}

function chooserHayes() {
    chosenPresident = "hayes";
    displayChosenPresident();
    revealAnswer();
}

function chooserGarfield() {
    chosenPresident = "garfield";
    displayChosenPresident();
    revealAnswer();
}

function chooserArthur() {
    chosenPresident = "arthur";
    displayChosenPresident();
    revealAnswer();
}

function chooserCleveland() {
    chosenPresident = "cleveland";
    displayChosenPresident();
    revealAnswer();
}

function chooserHarrison_B() {
    chosenPresident = "harrison_b";
    displayChosenPresident();
    revealAnswer();
}

function chooserMcKinley() {
    chosenPresident = "mckinley";
    displayChosenPresident();
    revealAnswer();
}

function chooserRoosevelt_T() {
    chosenPresident = "roosevelt_t";
    displayChosenPresident();
    revealAnswer();
}

function chooserTaft() {
    chosenPresident = "taft";
    displayChosenPresident();
    revealAnswer();
}

function chooserWilson() {
    chosenPresident = "wilson";
    displayChosenPresident();
    revealAnswer();
}

function chooserHarding() {
    chosenPresident = "harding";
    displayChosenPresident();
    revealAnswer();
}

function chooserCoolidge() {
    chosenPresident = "coolidge";
    displayChosenPresident();
    revealAnswer();
}

function chooserHoover() {
    chosenPresident = "hoover";
    displayChosenPresident();
    revealAnswer();
}

function chooserRoosevelt_FD() {
    chosenPresident = "roosevelt_fd";
    displayChosenPresident();
    revealAnswer();
}

function chooserTruman() {
    chosenPresident = "truman";
    displayChosenPresident();
    revealAnswer();
}

function chooserEisenhower() {
    chosenPresident = "eisenhower";
    displayChosenPresident();
    revealAnswer();
}

function chooserKennedy() {
    chosenPresident = "kennedy";
    displayChosenPresident();
    revealAnswer();
}

function chooserJohnson_LB() {
    chosenPresident = "johnson_lb";
    displayChosenPresident();
    revealAnswer();
}

function chooserNixon() {
    chosenPresident = "nixon";
    displayChosenPresident();
    revealAnswer();
}

function chooserFord() {
    chosenPresident = "ford";
    displayChosenPresident();
    revealAnswer();
}

function chooserCarter() {
    chosenPresident = "carter";
    displayChosenPresident();
    revealAnswer();
}

function chooserReagan() {
    chosenPresident = "reagan";
    displayChosenPresident();
    revealAnswer();
}

function chooserBush_GHW() {
    chosenPresident = "bush_ghw";
    displayChosenPresident();
    revealAnswer();
}

function chooserClinton() {
    chosenPresident = "clinton";
    displayChosenPresident();
    revealAnswer();
}

function chooserBush_GW() {
    chosenPresident = "bush_gw";
    displayChosenPresident();
    revealAnswer();
}

function chooserObama() {
    chosenPresident = "obama";
    displayChosenPresident();
    revealAnswer();
}

function chooserTrump() {
    chosenPresident = "trump";
    displayChosenPresident();
    revealAnswer();
}

function chooserBiden() {
    chosenPresident = "biden";
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