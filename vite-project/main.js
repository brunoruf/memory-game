// CSS Imports
import "./src/styles/settings/colors.css";
import "./src/styles/elements/base.css";
import "./src/styles/generic/reset.css";

// Components Imports

import ScoreBoard from "./src/objects/ScoreBoard";
import BoardGame from "./src/objects/BoardGame";


const $root = document.querySelector("#root");


$root.insertAdjacentHTML("beforeend", 
    `
    ${ScoreBoard()}
    ${BoardGame(8)}
    `
)