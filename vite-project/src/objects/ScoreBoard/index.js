import "./style.css"
import PlayerName from "../../components/PlayerName"
import PlayerScore from "../../components/PlayerScore"
import ArrowDown from "../../components/ArrowDown"

const ScoreBoard = () => {
    return /*html*/`
    <div class="score-board">
        ${ArrowDown(1)}
        ${PlayerName('Papai')}
        ${PlayerScore(1)}
        <div class="versus">x</div>
        ${PlayerScore(3)}
        ${PlayerName('Luli')}
    </div>
    `
}

export default ScoreBoard