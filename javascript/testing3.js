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
    console.log("Here are a list of all remaining questions with less than 2 answers");

    for (let i = 0; i < superJSON.length; i++) {
        if (superJSON[i]["answer"].length <= 1) {
            superJSON[i]["difficulty"] = "hard";
            console.log(`${superJSON[i]["answer"].length} answers remain for question: ${superJSON[i]["question"]}. Answers are: ${superJSON[i]["answer"]}`);
        }
    }
    console.log(superJSON);

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

    console.log("still found array :" + answersStillFound);


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
    console.log(superJSON.length + " " + randomizer + " " + superJSON[randomizer]["question"] + " " + currentAnswers);


    // This should delete the question that has just been asked. Still need to delete the president who has just been answered, though.
    console.log(`I want to delete the question ${superJSON[randomizer]["question"]} It currents has the answers: ${currentAnswers}.`);
    superJSON.splice(randomizer, 1);
    console.log(superJSON);

}