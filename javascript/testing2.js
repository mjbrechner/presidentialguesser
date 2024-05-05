'use strict';

const questionBox = document.getElementById("question-asker");

// let presidentialList = ['washington', 'adams_j', 'jefferson', 'madison', 'monroe', 'adams_jq', 'jackson', 'vanburen', 'harrison_wh', 'tyler', 'polk', 'taylor', 'fillmore', 'pierce', 'buchanan', 'lincoln', 'johnson_a', 'grant', 'hayes', 'garfield', 'arthur', 'cleveland', 'harrison_b', 'mckinley', 'roosevelt_t', 'taft', 'wilson', 'harding', 'coolidge', 'hoover', 'roosevelt_fd', 'truman', 'eisenhower', 'kennedy', 'johnson_lb', 'nixon', 'ford', 'carter', 'reagan', 'bush_ghw', 'clinton', 'bush_gw', 'obama', 'trump', 'biden'];
let workingQuestionSet = [];

let answersThreshold = 5;

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

    //move questions with only one answer
    for (let i = 0; i < superJSON.length; i++) {
        if (superJSON[i]["answer"].length === 1) {
            console.log(`MOVED ENTRY WITH ONE ANSWER1: ${superJSON[i]["question"]} `);
            superJSON2[superJSON[i]["question"]] = superJSON[i]["answer"];
            superJSON.splice(i, 1);

            console.log("ORIGINAL superJSON:");
            console.log(superJSON);
            console.log("NEW superJSON 22222:");
            console.log(superJSON2);
        }
    }

    console.log(superJSON2);

    // if there are no more questions with 2 or more answers, add all the questions with only one answer into the set.
    // THIS DOESN'T WORK YET.... IT IMPORTS THE NEW JSON, BUT THE NEW JSON INCLUDES QUESTIONS WITH ANSWERS THAT SHOULD HAVE BEEN DELETED.
    // SOLUTION WOULD BE TO JUST PUT ALL QUESTIONS IN THE ORIGINAL JSON AND PREVENT ONE-ANSWER QUESTIONS FROM SHOWING UNTIL THE END.
    if (superJSON.length === 0) {
        console.log(`No more available questions with more than one answer.`)
        console.log("ORIGINAL superJSON:");
        console.log(superJSON);
        console.log("NEW superJSON 22222:");
        console.log(superJSON);
        console.log("___");
        superJSON = superJSON2;
        console.log("NEW superJSON:");
        console.log(superJSON);
    }


    let randomizer = Math.floor(Math.random() * superJSON.length);


    // while (superJSON[randomizer]["answer"].length === 0) {
    //     console.log(`This question has no answers: ${superJSON[randomizer]["question"]}`)
    //     randomizer = Math.floor(Math.random() * superJSON.length);
    // }

    questionBeingAsked = superJSON[randomizer]["question"];
    questionBox.innerText = questionBeingAsked;
    currentAnswers = superJSON[randomizer]["answer"];
    console.log(superJSON.length + " " + randomizer + " " + superJSON[randomizer]["question"] + " " + currentAnswers);


    // This should delete the question that has just been asked. Still need to delete the president who has just been answered, though.
    console.log(`I want to delete the question ${superJSON[randomizer]["question"]} It currents has the answers: ${currentAnswers}.`);
    superJSON.splice(randomizer, 1);
    console.log(superJSON);



}