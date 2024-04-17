'use strict';

let chosenMode = "game";

console.log("yes");

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