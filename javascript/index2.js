'use strict';

let chosenMode = "game";
let presidentialList = ['washington', 'adams_j', 'jefferson', 'madison', 'monroe', 'adams_jq', 'jackson', 'vanburen', 'harrison_wh', 'tyler', 'polk', 'taylor', 'fillmore', 'pierce', 'buchanan', 'lincoln', 'johnson_a', 'grant', 'hayes', 'garfield', 'arthur', 'cleveland', 'harrison_b', 'mckinley', 'roosevelt_t', 'taft', 'wilson', 'harding', 'coolidge', 'hoover', 'roosevelt_fd', 'truman', 'eisenhower', 'kennedy', 'johnson_lb', 'nixon', 'ford', 'carter', 'reagan', 'bush_ghw', 'clinton', 'bush_gw', 'obama', 'trump', 'biden'];

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
let rightAnswers = 0;


function newGame() {
    document.getElementById("new-game-button").style.visibility = "hidden";
    questionAsker();
}


function gameOver() {
    document.getElementById("game-over-notice").style.visibility = "visible";
    document.getElementById("question-asker-button").style.visibility = "hidden";

    // Option to play again. Changes the button from "New Game" to "Play Again," since "again" is appropriate
    // for every game following the initial one.
    // document.getElementById("new-game-button").style.visibility = "visible";
    // document.getElementById("new-game-button").innerText = "Play Again";
}

function displayChosenPresident() {
    document.getElementById("pres-button-area").style.pointerEvents = "none";
    document.getElementById("pres-name-box").style.display = "none";
}

// The function revealAnswer() reveals whether the answer is correct or not.
// If the answer is correct, the president is removed from the json.
// If any questions in the json no longer have any available answers, those questions are also removed.

function revealAnswer() {
    let chosenPresidentFullName = document.getElementById(`portrait-${chosenPresident}`).title;
    console.log(`You have chosen ${chosenPresident}. The correct answer is ${currentAnswers}.`);

    //Enable "Next Question" button, though it will get disabled again if the game turns out to be over.
    document.getElementById("question-asker-button").style.visibility = "visible";

    if (currentAnswers.includes(chosenPresident)) {
        console.log(`You're right!`);
        document.getElementById("answer-box").innerText = `You have chosen ${chosenPresidentFullName}. Correct!`;
        rightAnswers++;

        // Since this was a correct choice, disable it as a potential choice going forward.

        document.getElementById(`portrait-${chosenPresident}`).style.filter = "sepia(100%) opacity(75%) brightness(.25)";
        presidentialList.splice((presidentialList.indexOf(chosenPresident)), 1);
        console.log(`Remaining presidents: ${presidentialList}`);

        // Remove any instance of that correct answer from future questions, so it won't be a possibility going forward.
        for (let i = 0; i < superJSON.length; i++) {
            if (superJSON[i]["answer"].includes(chosenPresident)) {
                //remove
                superJSON[i]["answer"] = superJSON[i]["answer"].filter(function (nameToBeRemoved) {
                    return nameToBeRemoved !== chosenPresident
                });
            }
        }

        // If 45 answers are correct, the game has been won!
        if (rightAnswers === 45) {
            document.getElementById("mistake-1").style.visibility = "visible";
            document.getElementById("answer-box").innerText = `You win!`;
            gameOver();
        }

    } else {
        wrongAnswers++

        if (wrongAnswers >= 1) {
            document.getElementById("mistake-1").style.visibility = "visible";
            document.getElementById("answer-box").innerText = `You have chosen ${chosenPresidentFullName}. Incorrect! You have ${wrongAnswers} mistake.`;
        }

        if (wrongAnswers >= 2) {
            document.getElementById("mistake-2").style.visibility = "visible";
            document.getElementById("answer-box").innerText = `You have chosen ${chosenPresidentFullName}. Incorrect! You have ${wrongAnswers} mistakes.`;
        }

        if (wrongAnswers >= 3) {
            document.getElementById("mistake-3").style.visibility = "visible";
            document.getElementById("answer-box").innerText = `You have chosen ${chosenPresidentFullName}. Incorrect! You have ${wrongAnswers} mistakes.`;
        }

        if (wrongAnswers === 3) {
            gameOver();
        }

    }

}

// When presidents are actually clicked and therefore chosen
function chooserWashington() {
    chosenPresident = "washington";
    if (presidentialList.includes(chosenPresident)) { // presidentialList only contains available names. Names chosen as CORRECT answers can't be chosen again.
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserAdams_J() {
    chosenPresident = "adams_j";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserJefferson() {
    chosenPresident = "jefferson";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserMadison() {
    chosenPresident = "madison";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserMonroe() {
    chosenPresident = "monroe";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserAdams_JQ() {
    chosenPresident = "adams_jq";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserJackson() {
    chosenPresident = "jackson";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserVanBuren() {
    chosenPresident = "vanburen";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserHarrison_WH() {
    chosenPresident = "harrison_wh";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserTyler() {
    chosenPresident = "tyler";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserPolk() {
    chosenPresident = "polk";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserTaylor() {
    chosenPresident = "taylor";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserFillmore() {
    chosenPresident = "fillmore";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserPierce() {
    chosenPresident = "pierce";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserBuchanan() {
    chosenPresident = "buchanan";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserLincoln() {
    chosenPresident = "lincoln";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserJohnson_A() {
    chosenPresident = "johnson_a";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserGrant() {
    chosenPresident = "grant";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserHayes() {
    chosenPresident = "hayes";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserGarfield() {
    chosenPresident = "garfield";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserArthur() {
    chosenPresident = "arthur";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserCleveland() {
    chosenPresident = "cleveland";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserHarrison_B() {
    chosenPresident = "harrison_b";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserMcKinley() {
    chosenPresident = "mckinley";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserRoosevelt_T() {
    chosenPresident = "roosevelt_t";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserTaft() {
    chosenPresident = "taft";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserWilson() {
    chosenPresident = "wilson";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserHarding() {
    chosenPresident = "harding";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserCoolidge() {
    chosenPresident = "coolidge";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserHoover() {
    chosenPresident = "hoover";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserRoosevelt_FD() {
    chosenPresident = "roosevelt_fd";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserTruman() {
    chosenPresident = "truman";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserEisenhower() {
    chosenPresident = "eisenhower";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserKennedy() {
    chosenPresident = "kennedy";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserJohnson_LB() {
    chosenPresident = "johnson_lb";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserNixon() {
    chosenPresident = "nixon";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserFord() {
    chosenPresident = "ford";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserCarter() {
    chosenPresident = "carter";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserReagan() {
    chosenPresident = "reagan";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserBush_GHW() {
    chosenPresident = "bush_ghw";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserClinton() {
    chosenPresident = "clinton";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserBush_GW() {
    chosenPresident = "bush_gw";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserObama() {
    chosenPresident = "obama";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserTrump() {
    chosenPresident = "trump";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
}

function chooserBiden() {
    chosenPresident = "biden";
    if (presidentialList.includes(chosenPresident)) {
        displayChosenPresident();
        revealAnswer();
    }
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