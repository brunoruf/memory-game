// CSS Imports
import "./src/styles/settings/colors.css";
import "./src/styles/elements/base.css";
import "./src/styles/generic/reset.css";

// Components Imports

import PlayerName from "./src/components/PlayerName";
import BoardGame from "./src/objects/BoardGame";


const $htmlBoardGame = BoardGame(6)
const $playerName = PlayerName()
const $root = document.querySelector("#root");


$root.insertAdjacentHTML("beforeend", $htmlBoardGame);