'use strict';

const questionBox = document.getElementById("question-asker");

// let presidentialList = ['washington', 'adams_j', 'jefferson', 'madison', 'monroe', 'adams_jq', 'jackson', 'vanburen', 'harrison_wh', 'tyler', 'polk', 'taylor', 'fillmore', 'pierce', 'buchanan', 'lincoln', 'johnson_a', 'grant', 'hayes', 'garfield', 'arthur', 'cleveland', 'harrison_b', 'mckinley', 'roosevelt_t', 'taft', 'wilson', 'harding', 'coolidge', 'hoover', 'roosevelt_fd', 'truman', 'eisenhower', 'kennedy', 'johnson_lb', 'nixon', 'ford', 'carter', 'reagan', 'bush_ghw', 'clinton', 'bush_gw', 'obama', 'trump', 'biden'];
let workingQuestionSet = [];



async function questionAsker() {
    const response = await fetch("javascript/questions.json");
    let data = await response.json();
    let workingQuestionSet = data;
    let randomizer = Math.floor(Math.random() * data.length);
    questionBox.innerText = data[randomizer]["question"];
    console.log(data.length + " " + randomizer + " " + data[randomizer]["question"] + " " + data[randomizer]["answer"][0]);
    

    // While this does delete the question just asked, running it again pulls up the questions anew, so you always start with 57 and then end up with 56.
    // need separate functions
    console.log(data[randomizer]);
    delete data[randomizer]["question"];
    console.log(data);

}