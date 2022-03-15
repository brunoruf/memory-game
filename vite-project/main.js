// CSS Imports
import "./src/styles/settings/colors.css";
import "./src/styles/elements/base.css";
import "./src/styles/generic/reset.css";

// Components Imports
import CardGame from "./src/components/CardGame";

const $htmlCardGame = CardGame()
const $root = document.querySelector("#root");

$root.insertAdjacentHTML("beforeend", $htmlCardGame);