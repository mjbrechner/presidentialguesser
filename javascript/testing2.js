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
    let randomizer = Math.floor(Math.random() * superJSON.length);
    questionBeingAsked = superJSON[randomizer]["question"];
    questionBox.innerText = questionBeingAsked;
    currentAnswers = superJSON[randomizer]["answer"];
    console.log(superJSON.length + " " + randomizer + " " + superJSON[randomizer]["question"] + " " + currentAnswers);


    // This should delete the question that has just been asked. Still need to delete the president who has just been answered, though.
    console.log(`I want to delete the question ${superJSON[randomizer]["question"]} It currents has the answers: ${currentAnswers}.`);
    superJSON.splice(randomizer, 1);
    console.log(superJSON);
}