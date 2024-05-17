'use strict'; // was the main js file being used through 16 May, then moved to /testing and replaced by main.js

let chosenMode = "game";
let presidentialList = ['washington', 'adams_j', 'jefferson', 'madison', 'monroe', 'adams_jq', 'jackson', 'vanburen', 'harrison_wh', 'tyler', 'polk', 'taylor', 'fillmore', 'pierce', 'buchanan', 'lincoln', 'johnson_a', 'grant', 'hayes', 'garfield', 'arthur', 'cleveland', 'harrison_b', 'mckinley', 'roosevelt_t', 'taft', 'wilson', 'harding', 'coolidge', 'hoover', 'roosevelt_fd', 'truman', 'eisenhower', 'kennedy', 'johnson_lb', 'nixon', 'ford', 'carter', 'reagan', 'bush_ghw', 'clinton', 'bush_gw', 'obama', 'trump', 'biden'];

// console.log("chosenMode");

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


// Question asking and answering

let questionBeingAsked;
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



////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////// first was index second was testing
////////////////////////////////////////////////////////////////////////////////////////////

'use strict';

const questionBox = document.getElementById("question-asker");

// let presidentialList = ['washington', 'adams_j', 'jefferson', 'madison', 'monroe', 'adams_jq', 'jackson', 'vanburen', 'harrison_wh', 'tyler', 'polk', 'taylor', 'fillmore', 'pierce', 'buchanan', 'lincoln', 'johnson_a', 'grant', 'hayes', 'garfield', 'arthur', 'cleveland', 'harrison_b', 'mckinley', 'roosevelt_t', 'taft', 'wilson', 'harding', 'coolidge', 'hoover', 'roosevelt_fd', 'truman', 'eisenhower', 'kennedy', 'johnson_lb', 'nixon', 'ford', 'carter', 'reagan', 'bush_ghw', 'clinton', 'bush_gw', 'obama', 'trump', 'biden'];
let workingQuestionSet = [];

async function questionAsker() {
    // When a question IS being asked, enable the presidential portrait section and clear answer area.
    document.getElementById("pres-button-area").style.pointerEvents = "auto";
    document.getElementById("pres-name-box").style.display = "flex";
    document.getElementById("answer-box").innerText = "";
    //


    // Delete entries with no answers
    for (let i = 0; i < superJSON.length; i++) {
        if (superJSON[i]["answer"].length === 0) {
            console.log(`DELETED ENTRY WITH NO ANSWERS: ${superJSON[i]["question"]} `);
            superJSON.splice(i, 1);
        }
    }

    console.log("test 1");
    for (let i = 0; i < superJSON.length; i++) {
        if (superJSON[i]["answer"].length === 0) {
            console.log(`DELETED ENTRY WITH NO ANSWERS: ${superJSON[i]["question"]} `);
            superJSON.splice(i, 1);
        }
    }

    console.log("test 2");
    for (let i = 0; i < superJSON.length; i++) {
        if (superJSON[i]["answer"].length === 0) {
            console.log(`DELETED ENTRY WITH NO ANSWERS: ${superJSON[i]["question"]} `);
            superJSON.splice(i, 1);
        }
    }
    // TO FIX!!!!!!!!!!!!!!!!!!!! Sometimes, questions with answer.length === 0 still somehow remain even after this "delete entries with no answers" bit!
    //!!!!!!!!!!!!! Why is that? These questions-with-no-answers can be seen below in the "Here are the remaining..." but are NOT found in the
    // console.log(superJSON) right below. Anyhow, this happened with Cleveland. I answered correctly, and then he was deleted from the questions "Born in NJ" and
    // "was sherriff" but NOT from the "non-consecutive terms" question. And then that very "non-consecutive terms" question was then asked.
    // This is odd, because (1) that question should be deleted, and (2) even if the question was there, there were still multi-answer questions that should
    // have been asked BEFORE this single-answer question. So there is an error in two places.

    // POSSIBLE SOLUTION!!!! Maybe, just maybe, superJSON.splice(i, 1) is messing with things. Since it changes the index of various entries in the list of questions,
    // perhaps this results in certain questions-with-no-answers getting skipped from the deletion process. One fix could be simple running the deletion loop
    // multiple times. That is very imprecise, though. Perhaps... I don't actually delete the questions-with-no-answers at all, I just make sure that
    // when a new question is generated, it automatically skips any questions-with-no-answers. I don't like adding in a second WHILE loop, because any slight error
    // can make the loop endless, but considering how I will always have a surplus of questions, this should pose no real danger. At least, no more danger
    // than the current while loop already poses.


    // Make all questions with less than 2 answers be labeled as "hard." 
    // console.log("Here are a list of all remaining questions with less than 2 answers");

    for (let i = 0; i < superJSON.length; i++) {
        if (superJSON[i]["answer"].length <= 1) {
            superJSON[i]["difficulty"] = "hard";
            // console.log(`${superJSON[i]["answer"].length} answers remain for question: ${superJSON[i]["question"]}. Answers are: ${superJSON[i]["answer"]}`);
        }
    }
    // console.log(superJSON);

    // Use the answersStillFound array to see if any questions with 2+ answers still remain.
    // If questions with 2+ answers are found, these questions are chosen at random to be asked.
    // If ALL the remaining questions have only a single possible answer, these single-answer questions will be available to be asked. 
    let answersThreshold = "easy";
    let answersStillFound = [];

    for (let i = 0; i < superJSON.length; i++) {
        if (superJSON[i]["answer"].length > 1) {
            answersStillFound.push("yes");
        } else {
            answersStillFound.push("no");
        }
    }

    // console.log("still found array :" + answersStillFound);


    if (answersStillFound.indexOf("yes") > -1) {
        console.log("Threshold set on easy questions: " + answersStillFound.indexOf("yes"));
        answersThreshold = "easy";
    } else if (answersStillFound.indexOf("yes") === -1) {
        console.log("Threshold set on hard questions: " + answersStillFound.indexOf("yes"));
        answersThreshold = "hard";
    }


    let randomizer = Math.floor(Math.random() * superJSON.length);

    // If answersThreshold is on "easy", questions with only one remaining answer need to be randomized again in order that
    // a question with 2+ answers be chosen first. If answersThreshold is on "hard", this loop will be skipped, so that
    // single-answer questions will be available from the question pool.
    while (answersThreshold === "easy") {
        if (superJSON[randomizer]["answer"].length === 1) {
            console.log(`This question only has one remaining answer. Need to randomize again.`)
            randomizer = Math.floor(Math.random() * superJSON.length);
        } else {
            break;
        }
    }

    questionBeingAsked = superJSON[randomizer]["question"];
    questionBox.innerText = questionBeingAsked;
    currentAnswers = superJSON[randomizer]["answer"];
    // console.log(superJSON.length + " " + randomizer + " " + superJSON[randomizer]["question"] + " " + currentAnswers);

    // Now that a queston has been asked, hide the Question Asker button for the time being.
    document.getElementById("question-asker-button").style.visibility = "hidden";

    // This should delete the question that has just been asked. Still need to delete the president who has just been answered, though.
    console.log(`I want to delete the question ${superJSON[randomizer]["question"]} It currents has the answers: ${currentAnswers}.`);

    // for (let i = 0; i < superJSON.length; i++) { // This loop just for console.log purposes; can be deleted later
    //     console.log(`Raming Q: ${superJSON[i]["question"]}. A: ${superJSON[i]["answer"]}.`);
    // }


    superJSON.splice(randomizer, 1);
    // console.log(superJSON);

}