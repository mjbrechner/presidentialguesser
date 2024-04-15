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