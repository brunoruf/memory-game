/* import './style.css'

document.querySelector('#root').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
*/

import CardGame from "./src/components/CardGame";
const $root = document.querySelector("#root");
const $htmlCardGame = CardGame()


$root.insertAdjacentHTML("beforeend", $htmlCardGame);