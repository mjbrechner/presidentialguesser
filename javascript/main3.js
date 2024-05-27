'use strict';

let chosenMode = "game";
let presidentialList = ['washington', 'adams_j', 'jefferson', 'madison', 'monroe', 'adams_jq', 'jackson', 'vanburen', 'harrison_wh', 'tyler', 'polk', 'taylor', 'fillmore', 'pierce', 'buchanan', 'lincoln', 'johnson_a', 'grant', 'hayes', 'garfield', 'arthur', 'cleveland', 'harrison_b', 'mckinley', 'roosevelt_t', 'taft', 'wilson', 'harding', 'coolidge', 'hoover', 'roosevelt_fd', 'truman', 'eisenhower', 'kennedy', 'johnson_lb', 'nixon', 'ford', 'carter', 'reagan', 'bush_ghw', 'clinton', 'bush_gw', 'obama', 'trump', 'biden'];

const answerNotificationBox = document.getElementById("answer-notification-box");
const answerNotification = document.getElementById("answer-notification");
const questionBox = document.getElementById("question-asker");

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

let timerSeconds = 0;
let timerMinutes = 0;
let timerString;

let questionBeingAsked;
let chosenPresident;
let currentAnswers = [];
const chosenPresidentBox = document.getElementById("pres-name-box");
let wrongAnswers = 0;
let rightAnswers = 0;


function newGame() {
    // Reset things to start out the new game.
    document.getElementById("new-game-button").style.visibility = "hidden";
    timerSeconds = 0;
    timerMinutes = 0;


    questionAsker();
    setInterval(gameTimer, 1000);
}

function gameTimer() { // Tracks how long the game takes.
    timerSeconds++;
    if (timerSeconds === 60) {
        timerMinutes++;
        timerSeconds = 0;
    }
    if (timerMinutes < 1) {
        timerString = `${timerSeconds} seconds`;
    } else {
        timerString = `${timerMinutes} minutes, ${timerSeconds} seconds`;
    }
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
    let chosenPresidentFullName = namesDictionary[chosenPresident];

    let currentAnswersFullNames = []; // currentAnswersFullNames can show a list of all *currently available* correct answers, though not all possible answers.
    for (let i = 0; i < currentAnswers.length; i++) {
        currentAnswersFullNames.push(` ${namesDictionary[currentAnswers[i]]}`);
    }

    console.log(`You have chosen ${chosenPresident}. Remaining correct answers include:${currentAnswersFullNames}.`);

    //Enable "Next Question" button, though it will get disabled again if the game turns out to be over.
    document.getElementById("question-asker-button").style.visibility = "visible";

    if (currentAnswers.includes(chosenPresident)) {
        answerNotificationBox.style.visibility = "visible";
        answerNotification.style.visibility = "visible";
        answerNotification.innerText = `You have chosen ${chosenPresidentFullName}. Correct!`;

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

    } else {
        wrongAnswers++
        answerNotificationBox.style.visibility = "visible";
        answerNotification.style.visibility = "visible";

        if (wrongAnswers >= 1) {
            document.getElementById("mistake-1").style.visibility = "visible";
            answerNotification.innerText = `You have chosen ${chosenPresidentFullName}. Incorrect! You have ${wrongAnswers} mistake.`;
        }

        if (wrongAnswers >= 2) {
            document.getElementById("mistake-2").style.visibility = "visible";
            answerNotification.innerText = `You have chosen ${chosenPresidentFullName}. Incorrect! You have ${wrongAnswers} mistakes.`;
        }

        if (wrongAnswers >= 3) {
            document.getElementById("mistake-3").style.visibility = "visible";
            answerNotification.innerText = `You have chosen ${chosenPresidentFullName}. Incorrect! You have ${wrongAnswers} mistakes.`;
        }

        if (wrongAnswers === 3) {
            gameOver();
        }
    }

    // If 45 answers are correct, the game has been won!
    if (rightAnswers === 45) {
        questionBox.innerText = `You win! You won in ${timerString}.`;
        gameOver();
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

// let presidentialList = ['washington', 'adams_j', 'jefferson', 'madison', 'monroe', 'adams_jq', 'jackson', 'vanburen', 'harrison_wh', 'tyler', 'polk', 'taylor', 'fillmore', 'pierce', 'buchanan', 'lincoln', 'johnson_a', 'grant', 'hayes', 'garfield', 'arthur', 'cleveland', 'harrison_b', 'mckinley', 'roosevelt_t', 'taft', 'wilson', 'harding', 'coolidge', 'hoover', 'roosevelt_fd', 'truman', 'eisenhower', 'kennedy', 'johnson_lb', 'nixon', 'ford', 'carter', 'reagan', 'bush_ghw', 'clinton', 'bush_gw', 'obama', 'trump', 'biden'];
let workingQuestionSet = [];

function hiddeny() {
    answerNotificationBox.style.visibility = "hidden";
    answerNotification.style.visibility = "hidden";
}

async function questionAsker() {
    // When a question IS being asked, enable the presidential portrait section and clear answer area.
    document.getElementById("pres-button-area").style.pointerEvents = "auto";
    document.getElementById("pres-name-box").style.display = "flex";
    questionBox.innerText = "";
    answerNotificationBox.style.visibility = "hidden";
    answerNotification.style.visibility = "hidden";
    //


    // This next section deletes entries with no remaining answers. The loop nestled inside deletes these entries, while the outside loop merely runs
    // the deletion process a total of four times. The reason is this is that sometimes, questions with answer.length === 0 still somehow remained even
    // after this "delete entries with no answers" bit. This happened with Cleveland. I answered correctly, and then he was deleted from the questions
    // "Born in NJ" and "was sherriff", but then the "non-consecutive terms" question was asked. This is odd, because (1) that question should have been
    // deleted, and (2) even if the question remained, there were still multi-answer questions that should have been asked BEFORE this single-answer question.                                      
    // I suspected that superJSON.splice(i, 1) wass messing with things. Since it changes the index of various entries in the list of questions, perhaps
    // this results in certain questions-with-no-answers getting skipped from the deletion process. My fix is simply running the deletion loop multiple times.
    // An alternative could be making sure that when a new question is generated, it automatically skips any questions-with-no-answers.
    for (let indx = 0; indx < 4; indx++) {
        console.log("index is " + indx);
        for (let i = 0; i < superJSON.length; i++) {
            if (superJSON[i]["answer"].length === 0) {
                console.log(`DELETED ENTRY WITH NO ANSWERS: ${superJSON[i]["question"]} `);
                superJSON.splice(i, 1);
            }
        }
    }

    // Make all questions with less than 2 answers be labeled as "hard." Some questions with 2+ answers are marked "hard" from the beginning,
    // but this creates new questions for the "hard" pool as the game progresses.

    for (let i = 0; i < superJSON.length; i++) {
        if (superJSON[i]["answer"].length <= 1) {
            superJSON[i]["difficulty"] = "hard";
            // console.log(`${superJSON[i]["answer"].length} answers remain for question: ${superJSON[i]["question"]}. Answers are: ${superJSON[i]["answer"]}. Difficulty is ${superJSON[i]["difficulty"]}`);
        }
    }

    // Use the easyQuestionsStillFound array to see if any "easy" questions remain.
    // If "easy" questions are found, these questions are chosen at random to be asked.
    // If no "easy" questions remain and "moderate" questions are found, these "moderate" questions are chosen at random to be asked.
    // If ALL the remaining questions are marked as "hard", those "hard" questions will become available to be asked.

    let answersThreshold = "easy";
    let easyQuestions = [];
    let moderateQuestions = [];
    let hardQuestions = [];

    for (let i = 0; i < superJSON.length; i++) {
        if (superJSON[i]["difficulty"] === "easy") {
            easyQuestions.push(superJSON[i]);
        }
    }

    for (let i = 0; i < superJSON.length; i++) {
        if (superJSON[i]["difficulty"] === "moderate") {
            moderateQuestions.push(superJSON[i]);
        }
    }

    for (let i = 0; i < superJSON.length; i++) {
        if (superJSON[i]["difficulty"] === "hard") {
            hardQuestions.push(superJSON[i]);
        }
    }

    console.log("Easy");
    console.log(easyQuestions);
    console.log("__________________");

    console.log("Moderate");
    console.log(moderateQuestions);
    console.log("__________________");

    console.log("Hard");
    console.log(hardQuestions);
    console.log("__________________");

    if (easyQuestions.length > 0) {
        answersThreshold = "easy";
    } else {
        if (moderateQuestions.length > 0) {
            answersThreshold = "moderate";
        } else {
            answersThreshold = "hard";
        }
    }

    console.log("ANSWERS THRESHOLD: " + answersThreshold);

    // This next part picks a random question to be asked.

    let randomizer = Math.floor(Math.random() * superJSON.length);

    // If answersThreshold is set to "easy," keep randomizing until an "easy" question is found.
    while (answersThreshold === "easy") {
        if (superJSON[randomizer]["difficulty"] !== "easy") {
            // console.log(`Needs to randomize again. Question: ${superJSON[randomizer]["question"]}. Answers: ${superJSON[randomizer]["answer"].length}. Difficulty: ${superJSON[randomizer]["difficulty"]}`)
            randomizer = Math.floor(Math.random() * superJSON.length);
        } else {
            break;
        }
    }

    // If answersThreshold is set to "moderate," keep randomizing until an "moderate" question is found.
    while (answersThreshold === "moderate") {
        if (superJSON[randomizer]["difficulty"] !== "moderate") {
            // console.log(`Needs to randomize again. Question: ${superJSON[randomizer]["question"]}. Answers: ${superJSON[randomizer]["answer"].length}. Difficulty: ${superJSON[randomizer]["difficulty"]}`)
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


// TO DO

// When the game is WON, an extra "incorrect" mark suddenly pops up.

// Maybe the answer (right or wrong) should appear in the same areas as the "game over" message.

// Show list of correct answers after someone makes a guess (for right or wrong)

// After the game is over (win or lose), show the average percentage of correct answers users have achieved.

// Maybe instead of Difficulty as either "hard" or nothing at all, maybe an "easy" difficulty should go first with some of the more simple
// questions. There shouldn't be so many of them, maybe 5, or 10 at most. Then comes the standard questions (currenly with no difficulty
// setting), and then comes the hard questions as has already been coded.